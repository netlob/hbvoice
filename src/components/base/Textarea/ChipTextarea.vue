<template>
  <label class="block text-sm font-medium text-gray-700" :for="name">{{ label }}</label>
  <div
    @click="focusInputElement"
    class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 w-full sm:text-sm border border-gray-300 rounded-md flex gap-2 flex-wrap"
  >
    <Chip v-for="(item, index) in chips" :key="index">{{ item }}</Chip>
    <input
      :name="name"
      ref="input"
      class="w-[1ch] p-0 border-none focus:ring-transparent"
      type="text"
      :value="inputVal"
      @input="onInput"
      @keyup="onKeyup"
    />
  </div>
  <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
</template>

<script lang="ts" setup>
import { Ref, ref, watchEffect } from 'vue';
import Chip from '../Chip/Chip.vue';

const props = defineProps<{
  name?: string;
  label?: string;
  description?: string;
  value?: string[] | null;
}>();

const emit = defineEmits<{
  (event: 'input', value: string[]): void;
}>();

const input: Ref<HTMLInputElement | undefined> = ref();

const chips: Ref<string[]> = ref([]);
const inputVal: Ref<string> = ref('');

watchEffect(() => {
  if (props.value) {
    chips.value = props.value;
  }
});

const onInput = (e: Event) => {
  const val = (e.target as HTMLInputElement).value;
  inputVal.value = val;
  if (input.value) {
    // set the input width based on the length
    input.value.style.width = `${val.length}ch`;
  }

  // check if the string includes a comma, if so push the chip and clear the input
  if (val.includes(',')) {
    chips.value.push(val.slice(0, val.length - 1));
    emit('input', chips.value);
    inputVal.value = '';
  }
};

const onKeyup = (e: KeyboardEvent) => {
  switch (e.keyCode) {
    // remove the chip on backspace
    case 8:
      if (inputVal.value.length == 0) {
        chips.value.pop();
        emit('input', chips.value);
      }
      break;
    case 13:
      chips.value.push(inputVal.value);
      emit('input', chips.value);
      inputVal.value = '';
      break;
  }
};

const focusInputElement = () => {
  input.value?.focus();
};
</script>
