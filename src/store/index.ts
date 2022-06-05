import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
    projects: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [
      {
        id: new Date().toISOString(),
        name: 'Raffle system'
      },
      {
        id: new Date().toISOString(),
        name: 'Default Staking'
      },
      {
        id: new Date().toISOString(),
        name: 'Custom Airdrop'
      }
    ]
  }
})