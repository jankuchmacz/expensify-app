import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { startEditExpense, startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt }) => {
        expensesData[id]={
            description,
            note,
            amount,
            createdAt
        }
    });
    database.ref('expenses').set(expensesData).then(()=>{
        done(); //to force JEST to wait - we have to communicte with DB etc. 
    })
});

test ('should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
    //two objects are never the same so we cant compare them with ===
    //we have to use toEqual() method to compare objects
});
test('should remove expense from firebase', (done)=>{
    const store = createMockStore({});
    store.dispatch(startRemoveExpense({id: expenses[0].id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[0].id
        });
        return database.ref(`expenses/${actions[0].id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});
test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New note value'}
    })
})
test('should edit expense from firebase', (done)=>{
    const store = createMockStore({});
    store.dispatch(startEditExpense(expenses[2].id, {note: 'Test note'})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id:expenses[2].id,
                updates: {note: 'Test note'}
        });
        return database.ref(`expenses/${actions[0].id}/note`).once('value');
    }).then((snapashot)=>{
        expect(snapashot.val()).toBe('Test note');
        done();
    })
})
test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});
test('should add expense to database and store', (done)=>{
    //we have to mock redux store to check if correct action is dispatched to store
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        //we have to get all actions dispatched to mock store
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        //to check if expense was saved to DB
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');      
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done(); //to force JEST to wait - we have to communicte with DB etc. 
    });
   
});
test('should add expense with defaults to database and store', (done)=>{
    //we have to mock redux store to check if correct action is dispatched to store
    const store = createMockStore({});
    store.dispatch(startAddExpense({})).then(()=>{
        //we have to get all actions dispatched to mock store
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '', 
                note:'', 
                amount: 0, 
                createdAt: 0
            }
        });
        //to check if expense was saved to DB
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');      
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual({
                description: '', 
                note:'', 
                amount: 0, 
                createdAt: 0
        });
        done(); //to force JEST to wait - we have to communicte with DB etc. 
    });
   
});
test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    })
})
test('should fetch expenses from firebase', (done)=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })

})

/*test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});*/