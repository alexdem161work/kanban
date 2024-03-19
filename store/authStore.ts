import { defineStore } from 'pinia';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { refresh } from '~/api/auth';

export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    refresh: null,
    access: null,
  }),

  actions: {
    setAuth(refresh: string | null, access: string | null): void {
      const cookiesAuthAccess = useCookie('auth.access');
      cookiesAuthAccess.value = access;

      const cookiesAuthRefresh = useCookie('auth.refresh');
      cookiesAuthRefresh.value = refresh;

      this.$patch({ refresh, access });
    },

    async refreshToken(): void {
      const cookiesAuthAccess = useCookie('auth.access');
      console.log(cookiesAuthAccess.value);
      let accessToken = cookiesAuthAccess.value;

      const cookiesAuthRefresh = useCookie('auth.refresh');
      console.log(cookiesAuthRefresh.value);
      const refreshToken = cookiesAuthRefresh.value;

      if (!accessToken) {
        return false;
      }

      const decoded = jwtDecode<JwtPayload>(accessToken);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decoded.exp < currentTime) {
        const response = await refresh(refreshToken);
        accessToken = response.access;
      }

      this.setAuth(refreshToken ?? null, accessToken ?? null);
    },
  },
});
