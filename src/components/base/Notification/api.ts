import { notifications } from './state';

type NotificationOptionsWithoutType = Omit<NotificationOptions, 'type'>;

export const error = (options: NotificationOptionsWithoutType) => {
  set({ ...options, type: 'error' });
};

export const success = (options: NotificationOptionsWithoutType) => {
  set({ ...options, type: 'success' });
};

export const set = (options: NotificationOptions) => {
  notifications.value.push(options);
};

export const clear = () => {
  notifications.value = [];
};

export type NotificationType = 'success' | 'error';

export type NotificationOptions = {
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
};
