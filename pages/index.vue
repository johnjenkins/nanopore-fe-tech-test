<script setup lang="ts">
import { useAccountsStore } from "~/store/account";
const store = useAccountsStore();
</script>

<template>
  <div style="min-height: 300px" class="bg-gray-100 pa-6">
    <h1>Accounts</h1>
    <MembersList />
  </div>
</template>
