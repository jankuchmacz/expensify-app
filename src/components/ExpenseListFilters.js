import React from "react";
import {connect} from 'react-redux';
import { setTextFilter } from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { sortByDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import { setStartDate } from "../actions/filters";
import { setEndDate } from "../actions/filters";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (focusedInput) => {
        this.setState(()=>({
            calendarFocused: focusedInput
        }))
        //console.log(focusedInput);
    }
    onTextChange = (e) => {
        //every time input changes this function fires
        this.props.setTextFilter(e.target.value);
        //console.log(e.target.value);
    }
    onSortChange = (e) => {
        const sortBy = e.target.value;
        if(sortBy==='amount') {
            this.props.sortByAmount();
        } else if (sortBy==='date'){
            this.props.sortByDate()
        }
    }
    render () {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            type="text" 
                            className="text-input"
                            placeholder="Search expenses"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange} 
                        />
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            endDate = {this.props.filters.endDate}
                            onDatesChange = {this.onDatesChange}
                            focusedInput= {this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths = {1}
                            isOutsideRange = {() => false}
                            startDateId="start"
                            endDateId="end"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => {
        return dispatch(setTextFilter(text));
    },
    sortByDate: () => {
        return dispatch(sortByDate());
    },
    sortByAmount: () => {
        return dispatch(sortByAmount());
    },
    setStartDate: (startDate) => {
        return dispatch(setStartDate(startDate));
    },
    setEndDate: (endDate) => {
        return dispatch(setEndDate(endDate));
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (ExpenseListFilters);