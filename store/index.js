import Vuex from 'vuex';
import md5 from 'md5';

export const state = () => ({
    posts:[],
    token: "",
    user: null,
});

export const mutations = {
    setPosts(state, posts){
        state.posts = posts;
    },
    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user){
        state.user = user;
    },
};
export const actions = {
    async loadPosts({commit},apiUrl){
        const  blogPosts  = await this.$axios.$get(apiUrl);
        commit("setPosts", blogPosts);
    },
    async authenticateUser({commit}, userPayload){
        
        try{
            const authUserData = await this.$axios.$post('/register/',userPayload);
            const avatar = 'http://gravatar.com/avatar/${hasha(authUserData.email)}?d=robohash';
            const user = {email:authUserData.email, avatar};
         
            commit('setUser', user);
            commit('setToken', authUserData.idToken);
        }catch(err){
        }
    }
};
export const getters = {
    posts: state => state.posts,
    authenticated: state => !!state.token,
    user: state => state.user
};

