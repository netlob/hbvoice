<script lang="ts" setup>
import { useAttrs } from 'vue';
import { LocationAsRelativeRaw } from 'vue-router';

type Variant = 'primary' | 'secundary' | 'gradient' | 'link';
type Size = 'small' | 'medium' | 'large';

interface Props {
  variant: Variant;
  size: Size;
  to?: string | LocationAsRelativeRaw;
  full?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  full: false
});

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void;
}>();

const attrs = useAttrs();
</script>

<template>
  <component
    :is="to ? (typeof to == 'string' ? 'a' : 'router-link') : 'button'"
    v-bind="typeof to == 'string' ? { href: to, attrs } : { to, attrs }"
    class="block border border-transparent shadow-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    :class="[variant, size, { 'w-full': full, 'w-max': !full }]"
    @click="(e: MouseEvent) => emit('click', e)"
  >
    <slot />
  </component>
</template>

<style scoped>
/* variant */
.primary {
  @apply bg-indigo-600 text-white hover:bg-indigo-700;
}

.secundary {
  @apply bg-white text-indigo-600 hover:bg-indigo-100;
}

.gradient {
  @apply bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border text-white hover:from-purple-700 hover:to-indigo-700;
}

.link {
  @apply bg-transparent text-gray-500 hover:text-gray-900;
}

/* size */
.small {
  @apply py-[4px] px-[10px];
}

.medium {
  @apply py-[6px] px-[16px];
}

.large {
  @apply py-3 px-4;
}
</style>
