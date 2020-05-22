

const state = () => ({
    view: 'Grid'
})

const getters = {
    // eslint-disable-next-line 
    // getView: (state: any) => {
    //     return state.view
    // }
}

const mutations = {
    // eslint-disable-next-line 
    setView(state: any, viewType: string){
        state.view = viewType
    }
}
const actions = {
    // eslint-disable-next-line 
    changeView({ commit }: { commit: any}, viewType: string) {
        commit('setView', viewType)

    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}