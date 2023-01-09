import { setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";
import { sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});
test('should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SET_SORT_BY_AMOUNT'
    })
})
test('should generate sortByDate action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SET_SORT_BY_DATE'
    })
})
test('should generate setTextFilter action object for provided values', ()=>{
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'rent'
    })
})
test('should generate setTextFilter action object for default values', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    })
})