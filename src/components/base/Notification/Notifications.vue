<template>
  <Teleport to="body" style="z-index: 1000">
    <Container class="flex flex-col gap-2 sticky left-0 bottom-5 right-0">
      <Notification
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="notification"
    /></Container>
  </Teleport>
</template>

<script lang="ts" setup>
import Container from '~/components/layout/Container.vue';
import Notification from './Notification.vue';

import { notifications } from './state';
</script>
