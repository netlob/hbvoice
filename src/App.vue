<template>
  <router-view />
  <Notifications />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import Notifications from '~/components/base/Notification/Notifications.vue';

const route = useRoute();
const router = useRouter();
</script>
