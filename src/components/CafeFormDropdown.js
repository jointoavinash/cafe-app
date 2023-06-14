import React, { useEffect, memo } from 'react';
import { fetchCafes } from '../actions/cafeActions';
import { Select} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;

const CafeFormDropdown = ({ defaultCafe, handleChange}) => {
const dispatch = useDispatch();
const initialValues = useSelector((state) => state.cafes.cafes);  // Assuming you have a cafe reducer
useEffect(() => {
  dispatch(fetchCafes());
}, [dispatch]);

const getdropdownOption = (item, idx) => {
  return (
    <Option key={item._id} value={item._id} >
      {item.name}
    </Option>
  )
}

return (
  <Select placeholder="Please select a Café" value={defaultCafe} onChange={handleChange}>
    {initialValues.map(getdropdownOption)}
  </Select>
)
}

export default memo(CafeFormDropdown);
