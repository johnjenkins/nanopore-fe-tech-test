<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <v-app-bar color="primary" height="60">
    <template v-slot:append>
      <v-avatar image="https://avatars.githubusercontent.com/u/13460819?v=4" size="40"></v-avatar>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
