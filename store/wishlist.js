export const state = () => ({
  wishlist: []
})

export const getters = {
  wishlist (state) {
    return state.wishlist
  },
  subtotal (state) {
    let subtotal = 0
    for (let index = 0; index < state.wishlist.length; index++) {
      const element = state.wishlist[index]

      subtotal += (element.valor + element.quantidade)
    }

    return subtotal
  }
}

export const mutations = {
  clear (state) {
    state.wishlist = []
  },
  clearItem (state, id) {
    for (let index = 0; index < state.wishlist.length; index++) {
      const element = state.wishlist[index]

      if (element._id === id) {
        state.wishlist.splice(index, 1)
      }
    }
  },
  clearAmount (state, id) {
    const index = state.wishlist.findIndex(u => u.id === id)
    if (index !== -1) {
      state.wishlist[index].quantidade = 1
    }
  },
  decrease (state, id) {
    const index = state.wishlist.findIndex(u => u.id === id)
    if (index !== -1) {
      state.wishlist[index].quantidade--
    }
  },
  increase (state, id) {
    const index = state.wishlist.findIndex(u => u.id === id)
    if (index !== -1) {
      state.wishlist[index].quantidade++
    }
  },
  fill (state, wishlist) {
    state.wishlist = wishlist
  },
  setItem (state, item) {
    state.wishlist.push(item)
  },
  setAmount (state, payload) {
    state.wishlist[payload.id].quantidade = payload.quantidade
  },
  complemento (state, payload) {
    const index = state.wishlist.findIndex(u => u._id === payload.id)
    console.log(index)
    if (index !== -1) {
      state.wishlist[index].complemento.push(payload.complemento)
    }
  }
}

export const actions = {
  clear ({ commit }) {
    commit('clear')
  },
  clearAmount ({ commit }, id) {
    commit('clearAmount', id)
  },
  clearItem ({ commit }, id) {
    commit('clearItem', id)
  },
  decrease ({ commit }, id) {
    commit('decrease', id)
  },
  increase ({ commit }, id) {
    commit('increase', id)
  },
  fill ({ commit }, wishlist) {
    commit('fill', wishlist)
  },
  complemento ({ commit }, payload) {
    commit('complemento', payload)
  },
  setAmount ({ commit }, payload) {
    commit('setItem', payload)
  },
  setItem ({ commit }, item) {
    commit('setItem', item)
  }
}