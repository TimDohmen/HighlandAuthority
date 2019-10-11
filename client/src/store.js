import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'
import NotificationService from "./NotificationService"

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})
let apiUser = Axios.create({
  baseURL: base,
  timeout: 3000,
  withCredentials: true
})
export default new Vuex.Store({
  state: {
    user: {},
    activeProfile: {},
    hiStoneScore: {},
    hiBraemarScore: {},
    hiWFDScore: {},
    hiWFDLScore: {},
    hiHammerHScore: {},
    hiHammerLScore: {},
    oneEventScores: [],
    searchResults: [],
    games: [],
    athletes: [],
    test: [],
    activeGames: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setActiveProfile(state, activeProfile) {
      state.activeProfile = activeProfile
    },
    setMyProfile(state, payload) {
      state.activeProfile = payload
    },
    setOneEventScores(state, scores) {
      state.oneEventScores = scores
    },
    setSearchResults(state, payload) {
      state.searchResults = payload
    },
    setGames(state, payload) {
      state.games = payload
    },
    setAthletes(state, payload) {
      state.athletes = payload
    },
    resetState(state, user) {
      state.user = {}
    },
    setScore(state, payload) {
      state.athletes[state.athletes.findIndex(a => a._id == payload.athleteId)].topAttempt = payload.newTopScore
      state.athletes[state.athletes.findIndex(a => a._id == payload.athleteId)].gamesId = payload.activeGame.game
      state.athletes[state.athletes.findIndex(a => a._id == payload.athleteId)].eventName = payload.activeGame.event
      state.athletes[state.athletes.findIndex(a => a._id == payload.athleteId)].throwingClass = payload.activeGame.throwingClass
    },
    setActiveGame(state, payload) {
      Vue.set(state, "activeGame", payload)
    },
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
        NotificationService.toast("Login Successful")

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

    async checkRole({ commit, dispatch }) {
      try {
        let user = await AuthService.adminAuthenticate()
        if (!user) {
          router.push({ name: "login" })
          NotificationService.toastError("")
        }
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion

    //#region -- SCORES --
    async getOneEventScores({ commit, dispatch }, payload) {
      try {
        let query = `?eventName=${payload.eventName}`
        let res = await api.get(`scores/${payload.userId}/findAll` + query)
        commit('setOneEventScores', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    //#endregion

    //#region -- EditProfileModal --
    async editProfile({ commit, dispatch }, payload) {
      try {
        let res = await api.put('athletes/' + payload._id, payload)
        commit('setActiveProfile', res.data)
        if (payload.nickname || payload.location || payload.class || payload.bio || payload.picture || payload.phone) {
          NotificationService.toast("Profile Edit Successful")
        }
      } catch (error) {
        console.error(error)
      }
    },

    async createProfile({ commit, dispatch }, payload) {
      try {
        let res = await api.post('athletes/', payload)
        commit('setActiveProfile', res.data)
        NotificationService.toast("Athlete Profile Created")
      } catch (error) {
        console.error(error)
      }
    },

    async getMyProfile({ commit, dispatch }, userId) {
      try {
        let res = await api.get(`athletes/${userId}`)
        commit('setMyProfile', res.data)
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

    async getSearchedProfile({ commit, dispatch }, payload) {
      try {
        let res = await api.get('athletes/' + payload)
        // let res = payload.profile.find(p => p.userId == payload.userId)
        if (res) commit('setActiveProfile', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion

    //#region Reset Password
    async changePassword({ commit, dispatch }, payload) {
      try {
        let res = await apiUser.put(`account/:id/forgot`, payload)
        commit('setUser', res.data)
        NotificationService.toast("Password Changed")
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion

    //#region Search Results
    async findUserByName({ commit, dispatch }, query) {
      try {
        let res = await api.get("athletes/find?name=" + query) //FIXME athletes?
        commit('setSearchResults', res.data)
        router.push({ name: "search" })
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion

    //#region Games
    async createGame({ commit, dispatch }, payload) {
      try {
        let res = await api.post("games", payload)
        NotificationService.toast("Game Created")
        dispatch("getGames", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getGames({ commit, dispatch }) {
      try {
        let res = await api.get("games")
        commit("setGames", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async editGame({ commit, dispatch }, payload) {
      try {
        let res = await api.put("games/" + payload._id, payload)
        dispatch("getGames", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    //#endregion

    //#region Scoring
    async getAthletes({ commit, dispatch }) {
      try {
        let res = await api.get("athletes")
        commit("setAthletes", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async addScores({ commit, dispatch }, payload) {
      try {
        await api.post("scores", payload)
      } catch (error) {
        console.error(error)
      }
    }
    //#endregion
  }
})
