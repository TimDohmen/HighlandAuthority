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
    hiScores: [],
    hiStoneScore: {},
    hiBraemarScore: {},
    hiWFDScore: {},
    hiWFDLScore: {},
    hiHammerLScore: {},
    hiHammerHScore: {}



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
    setHiScores(state, scores) {
      state.hiScores.push(scores)
    },
    setHiStoneScores(state, score) {
      state.hiStoneScore = score
    },
    setHiBraemarScores(state, score) {
      state.hiBraemarScore = score
    },
    setHiWFDScores(state, score) {
      state.hiWFDScore = score
    },
    setHiWFDLScores(state, score) {
      state.hiWFDLScore = score
    },
    setHiHammerLScores(state, score) {
      state.hiHammerLScore = score
    },
    setHiHammerHScores(state, score) {
      state.hiHammerHScore = score
    },
    resetState(state, user) {
      state.user = {}
    }
  },
  actions: {
    // DONT GO FARTHER BACK

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
    async getHiScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/find` + query)
        commit('setHiScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },



    async getHiStoneScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/find` + query)
        commit('setHiStoneScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHiBraemarScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/find` + query)
        commit('setHiBraemarScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHiWFDScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/find` + query)
        commit('setHiWFDScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHiWFDLScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/find` + query)
        commit('setHiWFDLScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHiHammerLScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/find` + query)
        commit('setHiHammerLScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHiHammerHScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/find` + query)
        commit('setHiHammerHScores', res.data)
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
        commit('setActiveProfile', res.data)
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
