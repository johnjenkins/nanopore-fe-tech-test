import { defineStore } from "pinia";
import customersData from "~/assets/data/customers.json";
import { User } from "~/types/user";

interface UserState {
  profile: User;
}

const initialUser = customersData[0] as User;

export const useUserStore = defineStore("user", {
  state: (): UserState => ({ profile: initialUser }),
  getters: {
    getCurrentUserProfile(state: UserState): User {
      return state.profile;
    },
  },
});
