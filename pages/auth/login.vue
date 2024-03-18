<script setup lang="ts">
import { ref } from 'vue';
import { login } from '~/api/auth';
import { useUserStore } from '~/store/authStore';

import Form from '~/services/form';
import BadRequestError from '~/errors/BadRequestError';

const user = useUserStore();

const formData = ref(new Form({
  username: null,
  password: null,
}));

const handleSubmit = async () => {
  try {
    const response = await login(formData.value.getValues());
    user.setAuth(response.refresh, response.access);
  } catch (error) {
    if (error instanceof BadRequestError) {
      formData.value.setErrors(error.getErrors());
    }
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <h1 class="auth-page__title">Вход</h1>

      <FormWrapper @submit.prevent="handleSubmit">
        <FormInput
          v-model="formData.fields.username"
          placeholder="Username"
          :errors="formData.errors.username"
        />

        <FormInput
          v-model="formData.fields.password"
          placeholder="Password"
          type="password"
          :errors="formData.errors.password"
        />

        <NuxtLink to="/auth/registration" variant="ghost">Создать аккаунт</NuxtLink>

        <template #actions>
          <UiButton adaptive type="submit">Войти</UiButton>
        </template>
      </FormWrapper>
    </div>
  </div>
</template>
