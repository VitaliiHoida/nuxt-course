export default {
    state: () => ({
        token: null,
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = null;
        },
    },
    getters: {
        hasToken: s => !!s.token,
    },
    actions: {
        login({commit}) {
            commit('setToken', 'truetoken')
        },
        logout({commit}) {
            commit('clearToken')
        },
        nuxtServerInit({dispatch}) {
            console.log('nuxtServerInit');
        },
    },
}