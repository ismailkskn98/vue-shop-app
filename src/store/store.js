import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            basket: [],
        }
    },
    getters: {
        getBasket(state) { return state.basket },
        getBasketLength(state) { return state.basket.length },
        getBasketTotal(state) {
            let total = 0;
            state.basket.forEach(item => {
                total += item.price;
            })
            return total;
        }
    },
    mutations: {
        setBasket(state, protuct) {
            state.basket.push(protuct)
        },
        removeBasket(state, protuct) {
            const arr = [...state.basket];
            state.basket = arr.filter(item => item.id !== protuct.id)
        },
    },
    actions: {
        setBasket({ commit }, protuct) {
            commit('setBasket', protuct)
        },
        removeBasket({ commit }, protuct) {
            commit('removeBasket', protuct)
        },
    },
    modules: {},
    devtools: true,
})

export default store;