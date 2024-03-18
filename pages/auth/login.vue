<script setup lang="ts">

</script>

<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <h1 class="auth-page__title">Вход</h1>

      <FormWrapper>
        <FormInput placeholder="Username"/>
        <FormInput placeholder="Password" type="password"/>

        <NuxtLink to="/auth/registration" variant="ghost">Создать аккаунт</NuxtLink>

        <template #actions>
          <UiButton adaptive>Войти</UiButton>
        </template>
      </FormWrapper>
    </div>
  </div>
</template>
