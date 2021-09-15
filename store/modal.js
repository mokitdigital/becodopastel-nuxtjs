export const state = () => ({
  activeComplemento: false,
  activeLogin: false,
  idComplemento: null
})

export const getters = {
  activeComplemento (state) {
    return state.activeComplemento
  },
  activeLogin (state) {
    return state.activeLogin
  },
  idComplemento (state) {
    return state.idComplemento
  }
}

export const actions = {
  alterComplemento ({ commit }, alter) {
    commit('alterComplemento', alter)
  },
  alterLogin ({ commit }, alter) {
    commit('alterLogin', alter)
  },
  alterIdComplemento ({ commit }, id) {
    commit('alterIdComplemento', id)
  }
}

export const mutations = {
  alterComplemento (state, alter) {
    state.activeComplemento = alter
  },
  alterLogin (state, alter) {
    state.activeLogin = alter
  },
  alterIdComplemento (state, id) {
    state.idComplemento = id
  }
}