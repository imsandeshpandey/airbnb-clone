import React from "react";
import { DatePicker as Date } from "antd";
import './datepicker.css'
import './datepicker.less'



const { RangePicker } = Date;

const DatePicker = ({...props}) => {
  return <RangePicker bordered={0} {...props} />;
};

export default DatePicker;