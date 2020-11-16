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
        console.log(commit);
        console.log(userPayload);
        try{
            //commit('setLoading', true);
            const authUserData = await this.$axios.$post('/register/',userPayload);
            console.log("<<<<<<<<<<");
            console.log(authUserData);
            const avatar = 'http://gravatar.com/avatar/${hasha(authUserData.email)}?d=robohash';
            console.log(avatar);
            const user = {email:authUserData.email, avatar};
            console.log(user);
            console.log(">>>>>>>");
            commit('setUser', user);
            commit('setToken', authUserData.idToken);
            //commit('setLoading', false);
        }catch(err){
            console.log(err);
           // commit('setLoading', false);
        }
    }
};
export const getters = {
    posts: state => state.posts,
    authenticated: state => !!state.token,
    user: state => state.user
};

