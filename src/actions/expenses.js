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
    return (dispatch, getState) => {
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
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
           dispatch(addExpense({
                id: ref.key,
                ...expense
            })); 
        })
    };
}
//Remove expense
export const removeExpense = (id) => {
    return { 
        type: 'REMOVE_EXPENSE',
        id: id
    }
}
export const startRemoveExpense = ({id} = {}) =>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense(id))
        }).catch((e)=>{
            console.log('Error during fetching data from DB', e);
        })
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
export const startEditExpense = (id, updates)=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update({
            ...updates
        }).then(()=>{
            dispatch(editExpense(id, updates));
        })
    }
}
//SET_EXPENSES
export const setExpenses = (expenses)=>({
    type: 'SET_EXPENSES',
    expenses: expenses
});
export const startSetExpenses = () =>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapashot)=>{
            const expenses=[];
            snapashot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses));
        }).catch((e)=>{
            console.log('Error during fetching data from DB', e);
        })
    }
};
