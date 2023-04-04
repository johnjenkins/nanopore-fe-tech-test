import { defineStore } from "pinia";
import customersData from "~/assets/data/customers.json";
import { AccountRole } from "~/types/account";
import { Customer } from "~/types/customer";

interface CustomersState {
  data: Customer[];
}

export const useCustomerStore = defineStore("customers", {
  state: (): CustomersState => ({ data: customersData }),
  getters: {
    getAllCustomersByRoles: (state: CustomersState) => (currentUserRoles: AccountRole[]) => {
      return state.data.filter((customer) => {
        return customer.account_roles.some((role) => currentUserRoles.includes(role));
      });
    },
    getAllCustomers(state: CustomersState): Customer[] {
      return state.data;
    }
  },
});
