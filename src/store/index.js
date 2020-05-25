import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      title: "",
      name: "User"+Date.now(),
      email: "User@"+Date.now()+".com",
      role: "unknown",
      hide: true,
      button0: {
        func: function () { }
      },
      button1: {
        func: function () { }
      }
    }
  },
  mutations: {
    openModal(state) {
      state.modal.hide = false
    },
    closeModal(state) {
      state.modal.hide = true
    },
    setModalTitle(state, title) {
      state.modal.title = title
    },
    setModalName(state, name) {
      state.modal.name = name
    },
    setModalEmail(state, email) {
      state.modal.email = email
    },
    setModalRole(state, role) {
      state.modal.role = role
    },
    setModalButton0(state, obj) {
      state.modal.button0 = obj
    },
    setModalButton1(state, obj) {
      state.modal.button1 = obj
    },
  },
  actions: {
    openModal({ commit }) {
      commit("openModal")
    },
    closeModal({ commit }) {
      commit("closeModal")
    },
    setModalTitle({ commit }, title) {
      commit("setModalTitle", title)
    },
    setModalName({ commit }, name) {
      commit("setModalName", name)
    },
    setModalEmail({ commit }, email) {
      commit("setModalEmail", email)
    },
    setModalRole({ commit }, role) {
      commit("setModalRole", role)
    },
    setModalButton0({ commit }, obj) {
      commit("setModalButton0", obj)
    },
    setModalButton1({ commit }, obj) {
      commit("setModalButton1", obj)
    }
  },
  modules: {
  }
})