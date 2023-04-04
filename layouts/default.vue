<script setup lang="ts"></script>

<template>
  <v-card>
    <v-layout>
      <NavBar />

      <SideBar />

      <v-main> <slot></slot></v-main>
    </v-layout>
  </v-card>
</template>
