import Vue from 'vue';
import Vuex from 'vuex';
import pokedex from './modules/pokedex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { pokedex },
});
