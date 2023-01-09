import moment from "moment";
import filtersReducer from "../../reducers/filters";

test('should setup default filter values', () =>{
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),//set to the first of this month, 12:00 am
        endDate: moment().endOf('month')
    })
});
test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type:'SET_SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type: 'SET_SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');

})
test ('should set text filter', () => {
    const action = {
        type: 'SET_TEXT',
        text: 'Rent'
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('Rent');
})
test('should set start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
})
test('should set end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
})