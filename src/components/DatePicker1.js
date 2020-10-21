import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker1() {
    const [selectDate, setSelectDate] = useState(null)
    return (
        <div>
            <DatePicker dateFormat='yyyy/MM/dd'
                selected={selectDate}
                onChange={date => setSelectDate(date)}
                filterDate={date => date.getDay() != 6 && date.getDay() != 0}
                isClearable showYearDropdown scrollableMonthYearDropdown
            />
        </div>
    )
}

export default DatePicker1
