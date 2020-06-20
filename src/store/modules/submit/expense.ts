import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { ExpenseState } from '@/types/modules/submitTypes'
import { RootState } from '@/types/index' 

const getDefaultExpense = () => {
    return {
        expenseList: []
    }
}

const state = getDefaultExpense()

const getters: GetterTree<ExpenseState, RootState> = {
    getTotal(state) {
        let total = 0
        for (const entry of state.expenseList) {
            total += entry.amount
        }
        if (isNaN(total)) {
            return 0
        }
        return total
    },
    isFilled(state) {
        // filled as long one row has all
        for (const entry of state.expenseList) {
            if (entry.category && (!isNaN(entry.amount) && entry.amount!==0) ) {
                return true
            }
        }
        return false
    }
}
const mutations: MutationTree<ExpenseState> = {    
    // reset
    resetExpense(state) {
        Object.assign(state, getDefaultExpense())
    },
    typeExpense(state, payload) {
        const { index, prop, $event} = payload        
        if (prop === "category") {
            state.expenseList[index].category = $event.target.value
        } else if (prop === "amount") {
            state.expenseList[index].amount = $event.target.valueAsNumber
        } else {
            state.expenseList[index].description = $event.target.value
        }        
    },
    addExpense(state) {
        const entry = {category:'', amount: 0, description: ''}
        state.expenseList = [...state.expenseList, entry]
    },
    delExpense(state, target) {
        state.expenseList.splice(target, 1)
    }

}
const actions: ActionTree<ExpenseState, RootState> = {    
    // reset
    resetExpense({ commit }) {
        commit('resetExpense')
    },
    initTemplate({ commit }) {
        commit('addExpense')
        commit('addExpense')
        commit('addExpense')
    },
    typeExpense({ commit }, payload) {
        commit("typeExpense", payload)
    },
    addExpense({ commit}) {
        commit('addExpense')
    },
    delExpense({ commit }, target) {
        commit('delExpense', target)
    }
}
const namespaced = true

export const submitExpense: Module<ExpenseState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
