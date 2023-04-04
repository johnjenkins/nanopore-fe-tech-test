<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAccountsStore } from "~/store/account";
import { useCustomerStore } from "~/store/customer";
import { useUserStore } from "~/store/user";

const { getCurrentUserProfile } = useUserStore();
const { getAllCustomers } = storeToRefs(useCustomerStore());
const { selectedAccount } = storeToRefs(useAccountsStore());

const { account_roles } = getCurrentUserProfile;

const companyAccountRoles = computed(() => {
  return selectedAccount.value.account_roles.map(({ role, id }) => {
    return {
      title: role,
      value: id,
    };
  });
});

const userAssignedRoleInAccount = computed(() => {
  const assignedRole = selectedAccount.value.account_roles.find(({ id }) =>
    getCurrentUserProfile.account_roles.map(({ id }) => id).includes(id)
  );
  if (assignedRole) {
    return {
      title: assignedRole.role,
      value: assignedRole.id,
    };
  } else {
    return {
      title: "No Role",
      value: null,
    };
  }
});

const filteredMembers = computed(() => {
  return getAllCustomers.value.filter((member) => {
    return member.account_roles.map(({ id }) => id).includes(userAssignedRoleInAccount.value.value);
  });
});

</script>
<template>
  <v-table>
    <thead></thead>
    <tbody>
      <tr v-for="item in filteredMembers" :key="item.id">
        <td>
          <strong>{{ item.first_name }}</strong
          >&nbsp;
          <strong>{{ item.last_name }}</strong>
        </td>
        <td>{{ item.email }}</td>
        <td>{{ item.start_date }}</td>
        <td>
          <v-select
            density="compact"
            :items="companyAccountRoles"
            v-model="userAssignedRoleInAccount"
          >
          </v-select>
        </td>
        <td>
          <v-icon icon="mdi-chevron-down"></v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style lang="scss" scoped></style>
