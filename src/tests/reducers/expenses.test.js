import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})
test('should add an expense', ()=> {
    const newExpense = {
        id: '4',
        description: 'Cola',
        note: '',
        amount: 200,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);

})
test('should edit an expense', ()=>{
    const modifiedExpense = {
        id: '1',
        description: 'Cola',
        note: '',
        amount: 200,
        createdAt: 0
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: modifiedExpense.id,
        updates: modifiedExpense
    }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual([modifiedExpense, expenses[1], expenses[2]]);
})
test('should not edit an expense if expense not found', ()=>{
    const modifiedExpense = {
        id: '-1',
        description: 'Cola',
        note: '',
        amount: 200,
        createdAt: 0
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: modifiedExpense.id,
        updates: modifiedExpense
    }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})