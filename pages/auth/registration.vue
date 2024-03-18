<script setup lang="ts">
import { ref } from 'vue';
import { registration } from '~/api/auth';

import Form from '~/services/form';
import BadRequestError from '~/errors/BadRequestError';

const formData = ref(new Form({
  username: null,
  email: null,
  password: null,
}));

const router = useRouter();

const handleSubmit = async () => {
  try {
    await registration(formData.value.getValues());
    await router.push('/auth/login');
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
      <h1 class="auth-page__title">Регистрация</h1>

      <FormWrapper @submit.prevent="handleSubmit">
        <FormInput
          v-model="formData.fields.username"
          placeholder="Username"
          :errors="formData.errors.username"
        />

        <FormInput
          v-model="formData.fields.email"
          placeholder="E-mail"
          :errors="formData.errors.email"
        />

        <FormInput
          v-model="formData.fields.password"
          placeholder="Password"
          type="password"
          :errors="formData.errors.password"
        />

        <NuxtLink to="/auth/login" variant="ghost">Уже есть аккаунт</NuxtLink>

        <template #actions>
          <UiButton adaptive type="submit">Создать аккаунт</UiButton>
        </template>
      </FormWrapper>
    </div>
  </div>
</template>
