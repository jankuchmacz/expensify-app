import uuid from 'uuid';
import database from '../firebase/firebase';
//Action that we need
//Add-expense

//component calls action generator
//action generator returns function
//component dispatches function
//functions runs (has the ability to dispatch other actions and do whatever it wants)
export const addExpense = (expense)=>{   
    return {
        type: 'ADD_EXPENSE',
        expense: expense
    }
}
export const startAddExpense = (expnseData = {})=>{
    return (dispatch) => {
        //destructuring
        const {
            description = '', note='', amount = 0, createdAt = 0
        } = expnseData;
        const expense={
            description,
            note,
            amount,
            createdAt
        }
        return database.ref('expenses').push(expense).then((ref)=>{
           dispatch(addExpense({
                id: ref.key,
                ...expense
            })); 
        })
    };
}
//Remove expense
export const removeExpense = ({id} = {}) => {
    return { 
        type: 'REMOVE_EXPENSE',
        id: id
    }
}

//Edit expense
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}