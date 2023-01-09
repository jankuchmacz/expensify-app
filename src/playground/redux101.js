import {createStore} from 'redux'; //to create Redux store
//state = {count:0} - default value, default state object
//createStore - to create Redux store


/*const add = ({a, b}) => {
    return a+b;
}
console.log(add({a:1, b:12}))
*/
//Action generators - functions that return action objects
//destructuring {incrementBy = 1}, we destructure incerementBy property from object which we sent, if it is not given we set it equal to 1
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

const decrementCount = ({decrementBy=1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}
const resetCount = () => {
    return {
        type: 'RESET'
    }
}
const setCount = ({count}) => {
    return {
        type: 'SET',
        count: count
    }
}
//Reducers
//1. Reducers are pure functions - the output is only determined by input 
//Moreover pure fuction does not change global variables
//Not pure function - output depends on global variable 
/*let a=10;
const add = (b) => {
    return a+b;
};*/
//2. Never change state or action - only return new state 

//console.log(add(5));
const countReducer = (state = {count:0}, action)=>{
    switch (action.type){
        case 'INCREMENT' :
            return {
                count: state.count+action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);
//how to watch for changes of the redux store state
const unsubscribe = store.subscribe(()=>{
    //function which we pass gets called every time store changes
    console.log(store.getState()); //to return current state object 
})

store.dispatch(incrementCount({incrementBy: 5}))
/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});*/

//unsubscribe(); //to unsubscribe - function to unsubscribe is return value of subscribe


//Actions - an object that gets sent to the store
//example actions: increment, reset, decrement
//To incerement the count
//disptatch method allows to send action to the store

store.dispatch(incrementCount());

//To reset the count
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 102}))


