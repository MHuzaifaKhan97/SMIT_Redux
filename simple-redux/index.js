const redux = require('redux');

const initCake = {
    noOfCakes:10
}
const initIcecream = {
    noOfIceCream:20
}


// Action
const buyCake = () => {
    return {
        type: 'BUY_CAKE'
    }
}
const buyIceCream = () => {
    return {
        type: 'BUY_ICECREAM'
    }
}

// Reducer 
const iceCreateReducer = (state = initIcecream, action) => {
    switch (action.type) {

        case 'BUY_ICECREAM': return {
            ...state,
            noOfIceCream: state.noOfIceCream - 1
        }
        default: return state;
    }
}

const cakeReducer = (state = initCake, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default: return state;
    }
}

const reducer = redux.combineReducers({
    cake: cakeReducer,
    icecream: iceCreateReducer
})

// Store
const store = redux.createStore(reducer);

console.log("Initial State : ", store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe()