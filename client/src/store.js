import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    profiles: [],
    activeProfile: {},
    scores: [],
    hiScores: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setActiveProfile(state, activeProfile) {
      state.activeProfile = activeProfile
    },
    setProfiles(state, profiles) {
      state.profiles = profiles
    },
    setMyProfile(state, payload) {
      state.activeProfile = payload
    },
    setScores(state, scores) {
      state.scores = scores
    },
    setStoneScores(state, scores) {
      state.hiScores.push(scores)
    },

    resetState(state, user) {
      state.user = {}
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "profile" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "profile" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion


    //#region -- SCORES --
    async getScoresById({ commit, dispatch }, userId) {
      try {
        let res = await api.get(`scores/${userId}`)
        commit('setScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getOpenStones({ commit, dispatch }, userId) {
      try {
        let query = "?eventName=Braemar"
        debugger
        let res = await api.get(`scores/${userId}/find` + query)
        debugger
        commit('setStoneScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    // getBoards({ commit, dispatch }) {
    //   api.get('boards')
    //     .then(res => {
    //       commit('setBoards', res.data)
    //     })
    // },
    // addBoard({ commit, dispatch }, boardData) {
    //   api.post('boards', boardData)
    //     .then(serverBoard => {
    //       dispatch('getBoards')
    //     })
    //#endregion


    //#region -- EditProfileModal --
    async editProfile({ commit, dispatch }, payload) {
      try {
        let res = await api.put('athletes/' + payload.userId, payload)
        dispatch('setMyProfile', payload.userId)
      } catch (error) {
        console.error(error)

      }
    },
    async getProfile({ commit, dispatch }, userId) {
      try {
        // let res = await api.get('athletes')
      } catch (error) {
        console.error(error)
      }
    },
    async getMyProfile({ commit, dispatch }, userId) {
      try {
        let res = await api.get(`athletes/${userId}`)
        commit('setMyProfile', res.data)
      } catch (error) {

      }
    },
    async getAllProfiles({ commit, dispatch }) {
      try {
        let res = await api.get('athletes')
        commit('setProfiles', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getActiveProfile({ commit, dispatch }, payload) {
      try {
        let res = payload.profiles.find(p => p.userId == payload.userId)
        if (res) commit('setActiveProfile', res)
      } catch (error) {
        console.error(error)
      }
    },


    //#endregion
  }
})
