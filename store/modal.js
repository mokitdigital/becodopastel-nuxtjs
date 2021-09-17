export const state = () => ({
  idComplemento: null
})

export const getters = {
  idComplemento (state) {
    return state.idComplemento
  }
}

export const actions = {
  alterComplemento ({ commit }, alter) {
    commit('alterIdComplemento', alter)
  }
}

export const mutations = {
  alterIdComplemento (state, id) {
    state.idComplemento = id
  }
}