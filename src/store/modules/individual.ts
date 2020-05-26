import { Module, ActionTree, MutationTree, GetterTree} from 'vuex'
import { IndividualState } from '../../types/modules/individualTypes'
import { RootState } from '../../types' 

const state: IndividualState  = {
    basic: {title: 'Sr. Product Designer', experience: 5, location: 'San Francisco', industry: 'Finance', quote: 'Party all day and night cuz of keto diet cuz gains, makes no sense.', tag: ['Traveler', 'Foodie', 'Party Animal']},
    earnings: [
        {description: 'Base', amount: 24500, information: 'it was pretty shitty'},
        {description: 'Relocation', amount: 9000},
        {description: 'Bonus', amount: 25000, information: 'it was pretty shitty'},        
    ],
    growth: [
        {title: 'Jr. PD',salary: 24500, year: 0},
        {title: 'Jr. PD',salary: 28500, year: 1},        
        {title: 'PD',salary: 30500, year: 2.5},        
        {title: 'Sr. Product Designer',salary: 37000, year: 3},        
        {title: 'Sr. Product Designer',salary: 50000, year: 4},        
        {title: 'Sr. Product Designer',salary: 65000, year: 5},        
    ],
    expenses: [
        {description: 'Rent', amount: 3500, information: 'it was pretty shitty'},
        {description: 'Food', amount: 3000},
        {description: 'Entertainment', amount: 1000, information: 'it was pretty shitty'},                
        {description: 'Travel', amount: 2000, information: 'it was pretty shitty'},                
    ],
    marketSalary: [
        {title: 'Freelance PD', salary: 65000, year: 8},
        {title: 'Freelance PD', salary: 35000, year: 1},
        {title: 'Freelance PD', salary: 65000, year: 7},
        {title: 'Freelance PD', salary: 45800, year: 3},
        {title: 'Freelance PD', salary: 29000, year: 2},
        {title: 'Junior PD', salary: 29000, year: 1},
        {title: 'Junior PD', salary: 76000, year: 0.9},
        {title: 'Junior PD', salary: 38000, year: 1.5},
        {title: 'Junior PD', salary: 47000, year: 1},
        {title: 'Junior PD', salary: 25030, year: 0.5},
        {title: 'Product Designer', salary: 39900, year: 3},
        {title: 'Product Designer', salary: 28900, year: 2},
        {title: 'Product Designer', salary: 88000, year: 5},
        {title: 'Product Designer', salary: 43000, year: 2.3},
        {title: 'Product Designer', salary: 54000, year: 4.5},
    ],
    marketCOL: [
        {title: 'Freelance PD', col: 35000, year: 8},
        {title: 'Freelance PD', col: 5000, year: 1},
        {title: 'Freelance PD', col: 45000, year: 7},
        {title: 'Freelance PD', col: 25800, year: 3},
        {title: 'Freelance PD', col: 23000, year: 2},
        {title: 'Junior PD', col: 19000, year: 1},
        {title: 'Junior PD', col: 45000, year: 0.9},
        {title: 'Junior PD', col: 28000, year: 1.5},
        {title: 'Junior PD', col: 35500, year: 1},
        {title: 'Junior PD', col: 19030, year: 0.5},
        {title: 'Product Designer', col: 19900, year: 3},
        {title: 'Product Designer', col: 18900, year: 2},
        {title: 'Product Designer', col: 81000, year: 5},
        {title: 'Product Designer', col: 23000, year: 2.3},
        {title: 'Product Designer', col: 44000, year: 4.5},        
    ],
    location: 'San Francisco',
    date: 'May 2020'

}
const getters: GetterTree<IndividualState, RootState> = {}
const mutations: MutationTree<IndividualState> = {}
const actions: ActionTree<IndividualState, RootState> = {}

const namespaced = true

export const individual: Module<IndividualState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}