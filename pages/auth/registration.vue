<script setup lang="ts">

</script>

<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <h1 class="auth-page__title">Регистрация</h1>

      <FormWrapper>
        <FormInput placeholder="Username"/>
        <FormInput placeholder="E-mail"/>
        <FormInput placeholder="Password" type="password"/>

        <NuxtLink to="/auth/login" variant="ghost">Уже есть аккаунт</NuxtLink>

        <template #actions>
          <UiButton adaptive>Создать аккаунт</UiButton>
        </template>
      </FormWrapper>
    </div>
  </div>
</template>
