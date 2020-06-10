import { Module, ActionTree, MutationTree, GetterTree} from 'vuex'
import { IndividualState } from '../../types/modules/individualTypes'
import { RootState } from '../../types' 
import router from '@/router/index'
import Axios from 'axios'

const URL = `http://localhost:5000/individual`

const state: IndividualState  = {
    // sample data until connecting with BE
    basic: [],
    earnings: [],
    growth: [],
    expenses: [],
    market: [],  
    others: [],  
}
const getters: GetterTree<IndividualState, RootState> = {        
    getTotalEarnings(state) {
        let sum = 0, entry        
        for (entry of state.earnings) {
            sum += entry.amount
        }
        return sum
    },    
    getGrowthStats(state){
        let maxSalary = 0, maxYear = 0, minSalary = state.growth[0].amount
        for (const entry of state.growth) {
            minSalary = Math.min(entry.amount, minSalary)
            maxSalary = Math.max(entry.amount, maxSalary)
            maxYear = Math.max(entry.year, maxYear)
        }
        return [maxYear, minSalary*0.5, maxSalary*1.2]
    },    
    getTotalExpenses(state) {
        let sum = 0, entry        
        for (entry of state.expenses) {
            sum += entry.amount
        }
        return sum
    }, 
    getMaxMarketSalary(state) {
        let maxSalary = 0, maxYear = 0
        for (const entry of state.market) {
            maxSalary = Math.max(maxSalary, entry.earnings)
            maxYear = Math.max(maxYear, entry.experience)
        }
        return [maxYear, maxSalary*1.2]        
    },
    getMaxMarketCOL(state) {
        let maxCOL = 0, maxYear = 0
        for (const entry of state.market) {
            maxCOL = Math.max(maxCOL, entry.expenses)
            maxYear = Math.max(maxYear, entry.experience)
        }
        return [maxYear, maxCOL*1.2]        
    },        
}

const mutations: MutationTree<IndividualState> = {
    // add isOpen for tables
    isEarnings(state, target) {
        state.earnings[target].isOpen = !state.earnings[target].isOpen        
    },
    isExpenses(state, target) {
        state.expenses[target].isOpen = !state.expenses[target].isOpen
    },
    // fetches
    fetchBasic(state, payload) {        
        state.basic = payload
    },
    fetchEarnings(state, payload) {        
        const base = {
            amount: state.basic[0].earnings,
            category: 'Total',
            isOpen: false
        }
        // specify or it will mess up structure        
        if (payload !== null && typeof payload !== "undefined") {
            state.earnings = payload
        } else {
            state.earnings = [...state.earnings, base]        
        }        
    },
    fetchGrowth(state, payload) {
        // add current position        
        const base = {
            title: state.basic[0].title, 
            amount: state.basic[0].earnings,
            year: state.basic[0].experience
        }
        // specify or it will mess up structure        
        if (payload !== null && typeof payload !== "undefined") {
            state.growth = payload
        }        
        state.growth = [...state.growth, base]
    },
    fetchExpenses(state, payload) {
        const base = {
            amount: state.basic[0].expenses,
            category: 'Total',
            isOpen: false
        }
        // specify or it will mess up structure        
        if (payload !== null && typeof payload !== "undefined") {
            state.expenses = payload
        } else {
            state.expenses = [...state.expenses, base]        
        }          
    },
    fetchMarket(state, payload) {
        state.market = payload
    },
    fetchOthers(state, payload) {
        state.others = payload
    }
}
const actions: ActionTree<IndividualState, RootState> = {
    isEarnings({ commit }, target) {
        commit('isEarnings', target)
    },
    isExpenses({ commit }, target) {
        commit('isExpenses', target)
    },
    fetchBasic({ commit }) {        
        Axios.get(`${URL}/header/${router.currentRoute.params.id}`).then((response) => {                     
            commit('fetchBasic', response.data)
        })        
    },
    fetchEarnings({ commit }) {
        Axios.get(`${URL}/earnings/${router.currentRoute.params.id}`).then((response)=> {
            if (response.data !== null && typeof response.data !== "undefined") {
                for (const entry of response.data) {
                    entry.isOpen = false
                }
            }            
            commit('fetchEarnings', response.data)            
        })
    },
    fetchGrowth({ commit }) {
        Axios.get(`${URL}/growth/${router.currentRoute.params.id}`).then((response) => {            
            commit('fetchGrowth', response.data)
        })
    },
    fetchExpenses({ commit }) {
        Axios.get(`${URL}/expenses/${router.currentRoute.params.id}`).then((response) => {            
            if (response.data !== null && typeof response.data !== "undefined") {
                for (const entry of response.data) {
                    entry.isOpen = false
                }
            }
            commit("fetchExpenses", response.data)            
        })
    },
    fetchMarket({ commit }) {
        Axios.get(`${URL}/market/${router.currentRoute.params.id}`).then((response)=> {
            commit("fetchMarket", response.data)
        })
    },
    fetchOthers({ commit }) {
        Axios.get(`${URL}/others/${router.currentRoute.params.id}`).then((response) => {
            commit("fetchOthers", response.data)
        })
    }
}

const namespaced = true

export const individual: Module<IndividualState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}