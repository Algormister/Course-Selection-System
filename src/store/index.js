import { createStore } from 'vuex'

export default createStore({
  state: {
    userid: window.sessionStorage.getItem('id'),             //null or id
    term: window.sessionStorage.getItem('term')
  },
  mutations: {
    updateUserid(state, uid){
      state.userid = uid
      window.sessionStorage.setItem('id', uid)
    },
    updateTerm(state, term){
      state.term = term
      window.sessionStorage.setItem('term', term)
    },
  },
  actions: {
  },
  modules: {
  }
})
