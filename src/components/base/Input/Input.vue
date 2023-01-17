<template>
  <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
  <input
    v-bind="attrs"
    :aria-label="name"
    :type="type"
    :name="name"
    @input="(e) => emit('input', (e.target as HTMLInputElement).value)"
    :class="{ 'mt-1': label }"
    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
  <p class="mt-1 text-sm text-gray-500">
    {{ description }}
  </p>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';

// https://www.w3schools.com/tags/tag_input.asp
type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

defineProps<{
  type?: InputType;
  name?: string;
  description?: string;
  label?: string;
}>();

const emit = defineEmits<{
  (event: 'input', value: string): void;
}>();

const attrs = useAttrs();
</script>
