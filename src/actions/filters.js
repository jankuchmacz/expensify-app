//set Text filter
export const setTextFilter = (text='') => {
    return {
        type: 'SET_TEXT',
        text: text
    }
}
//Sort by amount
export const sortByAmount = () => {
    return {
        type: 'SET_SORT_BY_AMOUNT'
    }
}
//Sort by date
export const sortByDate = () => {
    return {
        type: 'SET_SORT_BY_DATE'
    }
}
//Set start date
export const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        startDate: date
    }
}
//Set end date
export const setEndDate = (date) => {
    return {
        type: 'SET_END_DATE',
        endDate: date
    }
}
