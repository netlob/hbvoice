<template>
  <div class="inline-flex flex-wrap w-full max-w-5xl items-center">
    <div id="button-div" class="flex-initial pl-3">
      <svg
        @click="toggleAudio()"
        v-show="!isPlaying"
        class="text-orange-500 h-12"
        :class="{
          'hover:text-orange-600': audioLoaded,
          'cursor-pointer': audioLoaded
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        @click="toggleAudio()"
        v-show="isPlaying"
        class="h-12 text-orange-500 hover:text-orange-600 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <canvas :id="`canvas-${playerId}`" width="590" height="158" class="bg-white dark:bg-slate-800">
      Je browser ondersteund geen HTML5 <code>&lt;canvas&gt;</code>.
    </canvas>
  </div>

  <div>
    <audio ref="player" :id="playerId" class="hidden" crossorigin="anonymous" preload>
      <source :src="src" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  props: ['src', 'playerId'],
  data() {
    return {
      // playbackTime: 0,
      // audioDuration: 100,
      audioLoaded: false,
      isPlaying: false,
      animationInitiated: false,
      waves: []
    };
  },
  methods: {
    initSlider() {
      const audio = this.$refs.player;
      if (audio) {
        this.audioDuration = Math.round(audio.duration);
      }
    },
    playbackListener(e) {
      const audio = this.$refs.player;
      audio.addEventListener('ended', this.endListener);
      audio.addEventListener('pause', this.pauseListener);
    },
    pauseListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    endListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    cleanupListeners() {
      const audio = this.$refs.player;
      audio.removeEventListener('timeupdate', this.playbackListener);
      audio.removeEventListener('ended', this.endListener);
      audio.removeEventListener('pause', this.pauseListener);
    },
    toggleAudio() {
      const audio = this.$refs.player;
      audio.paused ? audio.play() : audio.pause();

      this.isPlaying = !audio.paused;

      if (!this.animationInitiated) {
        this.animate();
      }
    },
    loadAnimate() {
      const c = document.getElementById(`canvas-${this.playerId}`);
      const ctx = c.getContext('2d');

      class GraphicObject {
        constructor(scenario) {
          scenario.push(this);
        }
      }

      class Wave extends GraphicObject {
        constructor(scenario) {
          super(scenario);
          this.x = 0;
          this.y = 0;
          this.color = '#e87b35';
          this.db = 10;
          this.dbTarget = 10;
        }

        draw(ctx) {
          const increment = 5;
          if (this.db < this.dbTarget) {
            if (this.db + increment > this.dbTarget) {
              this.db = this.dbTarget;
            } else {
              this.db += increment;
            }
          } else {
            if (this.db - increment < this.dbTarget) {
              this.db = this.dbTarget;
            } else {
              this.db -= increment;
            }
          }

          const height = (135 * this.db) / 100;
          var rectX = this.x;
          var rectY = (158 - height) / 2;
          var rectWidth = 10;
          var rectHeight = height;
          var cornerRadius = 10;
          ctx.strokeStyle = this.color;
          ctx.fillStyle = this.color;
          ctx.lineJoin = 'round';
          ctx.lineWidth = cornerRadius;

          ctx.strokeRect(
            rectX + cornerRadius / 2,
            rectY + cornerRadius / 2,
            rectWidth - cornerRadius,
            rectHeight - cornerRadius
          );
          ctx.fillRect(
            rectX + cornerRadius / 2,
            rectY + cornerRadius / 2,
            rectWidth - cornerRadius,
            rectHeight - cornerRadius
          );
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }
      }

      const loadScenario = (ctx, scenario, root) => {
        return () => {
          if (root) {
            ctx.restore();
            ctx.beginPath();
            ctx.clearRect(0, 0, c.width, c.height);
          }
          for (let i = 0; i < scenario.length; i++) {
            ctx.restore();
            ctx.beginPath();
            scenario[i].draw(ctx);
          }
        };
      };

      const scenario1 = (ctx) => {
        const scenario = [];

        for (var i = 1; i < 30; i++) {
          const wave_1 = new Wave(scenario);
          wave_1.x = 20 * i;
          this.waves.push(wave_1);
        }

        return loadScenario(ctx, scenario, true);
      };

      const loadFrames = (scenario) => {
        const fn = () => {
          scenario();
          requestAnimationFrame(fn);
        };
        fn();
      };

      const start = (ctx) => {
        loadFrames(scenario1(ctx));
      };

      start(ctx);
    },
    animate() {
      this.animationInitiated = true;

      const FFT_SIZE = 512;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
      const analyser = audioCtx.createAnalyser();

      const node = audioCtx.createScriptProcessor(FFT_SIZE * 2, 1, 1);
      node.onaudioprocess = () => {
        self.spectrum = new Uint8Array(30);
        analyser.getByteFrequencyData(self.spectrum);
        analyser.smoothingTimeConstant = 0.4;
        for (var i = 0; i < 30; i++) {
          this.waves[i].dbTarget = self.spectrum[i] > 70 ? self.spectrum[i] / 2.5 : 10;
        }
      };

      const audio = document.getElementById(this.$props.playerId);
      const audioSrc = audioCtx.createMediaElementSource(audio);
      audioSrc.connect(analyser);
      audioSrc.connect(audioCtx.destination);
      analyser.connect(node);
      node.connect(audioCtx.destination);
    }
  },
  mounted: function () {
    const c = document.getElementById(`canvas-${this.playerId}`);
    const ctx = c.getContext('2d');
    this.loadAnimate();

    this.$nextTick(function () {
      const audio = this.$refs.player;
      audio.addEventListener('canplay', (e) => (this.audioLoaded = true));

      this.$watch('isPlaying', function () {
        if (this.isPlaying) {
          const audio = this.$refs.player;

          this.initSlider();

          if (!this.listenerActive) {
            this.listenerActive = true;
            audio.addEventListener('timeupdate', this.playbackListener);
          }
        }
      });

      this.$watch('playbackTime', function () {
        const audio = this.$refs.player;
        const diff = Math.abs(this.playbackTime - this.$refs.player.currentTime);
        if (diff > 0.01) this.$refs.player.currentTime = this.playbackTime;
      });
    });
  }
};
</script>

<style>
.play-button {
  height: 45px;
}
</style>
