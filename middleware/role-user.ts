import { useAuthStore } from '~/store/authStore';

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  await authStore.refreshToken();

  if (authStore.access === null) {
    return navigateTo('/auth/login');
  }
});
