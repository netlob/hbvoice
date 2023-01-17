<template>
  <label class="block text-sm font-medium text-gray-700" :for="name">{{ label }}</label>
  <textarea
    :name="name"
    :readonly="readonly"
    :required="required"
    @input="(e) =>  emit('input', (e.target as HTMLInputElement).value)"
    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
    >{{ value }}</textarea
  >
  <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
</template>

<script lang="ts" setup>
defineProps<{
  value?: string | null;
  name?: string;
  description?: string;
  label?: string;
  readonly?: boolean;
  required?: boolean;
}>();

const emit = defineEmits<{
  (event: 'input', value: string): void;
}>();
</script>
