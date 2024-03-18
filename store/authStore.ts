import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'auth',

  state: () => ({
    refresh: null,
    access: null,
  }),

  actions: {
    setAuth(refresh: string, access: string) {
      localStorage.setItem('kanban.auth.refresh', refresh);
      localStorage.setItem('kanban.auth.access', access);

      this.$patch({ refresh, access })
    },
  },
});
