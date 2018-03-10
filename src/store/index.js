import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    catagory: [
      {
        id: 0,
        name: 'All theft not mentioned elsewhere',
        catagory: 'All-theft-not-mentioned-elsewhere',
        description: ''
      }, {
        id: 1,
        name: 'Arson',
        catagory: 'arson',
        description: 'the criminal act of deliberately setting fire to property.'
      }, {
        id: 2,
        name: 'Assault with the intent to inflict grievous bodily harm',
        catagory: '',
        description: 'People are charged with this offence if they assault someone with the intent to cause, and do cause, a very serious injury.'
      }, {
        id: 3,
        name: 'Attempted murder',
        catagory: 'Attempted-murder',
        description: 'attempted murder is the crime of simultaneously preparing to commit an unlawful killing and having a specific intention to cause the death of a human being'
      }, {
        id: 4,
        name: 'Burglary at non-residential premises',
        catagory: '',
        description: ''
      }, {
        id: 5,
        name: 'Burglary at residential premises',
        catagory: '',
        description: ''
      }, {
        id: 6,
        name: 'Carjacking',
        catagory: 'carjacking',
        description: ''
      }, {
        id: 7,
        name: 'Commercial crime',
        catagory: '',
        description: ''
      }, {
        id: 8,
        name: 'Common assault',
        catagory: 'common-assault',
        description: ''
      }, {
        id: 9,
        name: 'Common robbery',
        catagory: '',
        description: 'is the unlawful and intentional forceful removal and appropriation of movable tangible property belonging to another. Note: The decisive factor is the use of force or violence.'
      }, {
        id: 10,
        name: 'Crimen injuria',
        catagory: '',
        description: 'is the unlawful intentional serious infringement of the dignity or privacy of another person.'
      }, {
        id: 11,
        name: 'Culpable homicide',
        catagory: '',
        description: 'consists of the unlawful, negligent causing of death of another human being.'
      }, {
        id: 12,
        name: 'Driving under the influence of alcohol or drugs',
        catagory: '',
        description: ''
      }, {
        id: 13,
        name: 'Drug-related crime',
        catagory: '',
        description: ''
      }, {
        id: 14,
        name: 'Kidnapping',
        catagory: '',
        description: ''
      }, {
        id: 15,
        name: 'Malicious injury to property',
        catagory: '',
        description: ''
      }, {
        id: 16,
        name: 'Murder',
        catagory: '',
        description: ''
      }, {
        id: 17,
        name: 'Neglect and ill-treatment of children',
        catagory: '',
        description: ''
      }, {
        id: 18,
        name: 'Public violence',
        catagory: '',
        description: ''
      }, {
        id: 19,
        name: 'Robbery at non-residential premises',
        catagory: '',
        description: ''
      }, {
        id: 20,
        name: 'Robbery at residential premises',
        catagory: '',
        description: ''
      }, {
        id: 21,
        name: 'Robbery with aggravating circumstances',
        catagory: '',
        description: ''
      }, {
        id: 22,
        name: 'Shoplifting',
        catagory: '',
        description: ''
      }, {
        id: 23,
        name: 'Stock-theft',
        catagory: '',
        description: ''
      }, {
        id: 24,
        name: 'Theft of motor vehicle and motorcycle',
        catagory: '',
        description: ''
      }, {
        id: 25,
        name: 'Theft out of or from motor vehicle',
        catagory: '',
        description: ''
      }, {
        id: 26,
        name: 'Total Sexual Crimes',
        catagory: '',
        description: ''
      }, {
        id: 27,
        name: 'Truck hijacking',
        catagory: '',
        description: ''
      }, {
        id: 28,
        name: 'Unlawful possession of firearms and ammunition',
        catagory: '',
        description: ''
      }
    ],
    user: null,
    loading: null,
    error: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state, payload) {
      state.error = null
    }
  },
  actions: {
    createMapEntry ({commit}, payload) {
      const mapEntry = {
        title: '',
        location: {
          lat: '',
          long: '',
          city: '',
          province: '',
          areaCode: ''
        },
        type: '',
        description: '',
        userId: ''
      }
      commit('createMarker', mapEntry)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    loadedCatagories (state) {
      return state.catagory
    },
    loadedCatagory (state) {
      return (catagoryName) => {
        return state.loadedCatagories.find((catagory) => {
          return catagory.name === catagoryName
        })
      }
    }
  }
})
