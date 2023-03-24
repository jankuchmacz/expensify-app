//import './utils.js';
//when importing default export naming is not important
/*import substract, { square, add } from './utils.js';

console.log('app.js is running!!!');
console.log(square(4));
console.log(add(100, 23));
console.log(substract(100,80));
*/


/*import isSenior, { isAdult, canDrink } from "./person";
const age = 19;
console.log(isAdult(age));
console.log(canDrink(age));
console.log(isSenior(67));
*/

//install->import->use - first install using yarn or npm 
//import validator from 'validator';
//console.log(validator.isEmail('test@gmail.com'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';
import LoadingPage from './components/LoadingPage';
//import './playground/promises';


const store = configureStore();
console.log('test');
/*store.dispatch(addExpense({description: "Water bill", amount: 45000  }));
store.dispatch(addExpense({description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpense({description: "Rent", amount: 109500  }));*/
//store.dispatch(setTextFilter('water'));



const state = store.getState();
//console.log(getVisibleExpenses(state.expenses, state.filters));

//Provider component allows us to provide store to all components of our app
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.querySelector('#app'));
        hasRendered=true;
    }
}

ReactDOM.render(<LoadingPage/>, document.querySelector('#app'));

firebase.auth().onAuthStateChanged((user)=>{
    //this function runs when auth state changes (login or logout)
    if(user){
        //just log in
        store.dispatch(login(user.uid));
        console.log('user_id', user.uid);
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        //just logout
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})




/*class OldSyntax {
    constructor(){
        this.name="Jan";
        this.getGreeting=this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi. My name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax ();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//new syntax
class NewSyntax {
    name = "Janek";
    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting());*/
