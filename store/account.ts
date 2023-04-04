import { defineStore } from "pinia";
import accountsData from "~/assets/data/accounts.json";
import { Account } from "~/types/account";

interface AccountsState {
  data: Account[];
  selectedAccount: Account;
}

export const useAccountsStore = defineStore("accounts", {
  state: (): AccountsState => ({
    data: accountsData,
    selectedAccount: accountsData[0],
  }),
  getters: {
    getAllAccounts(state: AccountsState): Account[] {
      return state.data;
    },
  },
  actions: {
    setAccountById(accountId: number) {
      if (accountId === this.selectedAccount.id) return;
      const account = this.data.find((account) => account.id === accountId);
      console.log(account);
      if (!account) return;
      this.selectedAccount = { ...account };
    },
  },
});
