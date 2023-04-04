<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAccountsStore } from "~/store/account";
import { useUserStore } from "~/store/user";

const { getAllAccounts, selectedAccount } = storeToRefs(useAccountsStore());
const { getCurrentUserProfile } = useUserStore();
const { setAccountById } = useAccountsStore();

const accountsAsSelectItems = computed(() => {
  return getAllAccounts.value.map((account) => {
    return {
      title: account.organisation_name,
      value: account.id,
    };
  });
});

const preSelectedAccountAsSelectItem = computed({
  get: () => {
    return {
      title: selectedAccount.value.organisation_name,
      value: selectedAccount.value.id,
    };
  },
  set: (accountId) => {
    let accNumId = accountId as number; // weird type error
    setAccountById(accNumId);
  },
});
</script>

<template>
  <v-navigation-drawer class="pa-6">
    <template v-slot:prepend>
      <v-list-item
        lines="two"
        :title="`Welcome ${
          getCurrentUserProfile.first_name +
          ' ' +
          getCurrentUserProfile.last_name
        }`"
      ></v-list-item>
      <v-select
        label="Select"
        v-model="preSelectedAccountAsSelectItem"
        :items="accountsAsSelectItems"
      ></v-select>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
