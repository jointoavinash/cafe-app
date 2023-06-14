import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, editEmployee, fetchEmployees } from '../actions/employeeActions';
import { Button, Form, Input, Radio } from 'antd';
import CafeFormDropdown from './CafeFormDropdown';

const EmployeeForm = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.employee.employee);  // Assuming you have a cafe reducer
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [gender, setGender] = useState('');
  const [cafe, setCafe] = useState('');

  const { id } = useParams();
  useEffect(() => {
    id && dispatch(fetchEmployees(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('email_address', emailAddress);
    formData.append('phone_number', phoneNumber);
    formData.append('gender', gender);
    formData.append('cafe', cafe);
    if (initialValues?._id) {
        dispatch(editEmployee(formData));
    } else {
      console.log('handleSubmitaddEmployee', dispatch(addEmployee(formData)));
    }
    // navigate('/employee');
  };

  const handleCancel = () => {
    navigate('/employee'); // Redirect to café page on cancel
  };

  const handleChange = (value) => {
     setCafe(value);
  }
  useEffect(() => {
    setName(initialValues?.name);
    setEmailAddress(initialValues.email_address);
    setPhoneNumber(initialValues.phone_number);
    setGender(initialValues.gender);
    setCafe(initialValues.cafe);  
  }, [initialValues]);

  return (
    <div>
      <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>   
      <Form 
        onSubmit={handleSubmit}
        labelCol={{ span: 4, }}
        wrapperCol={{
            span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
    >
      <Form.Item label="Name">
        <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={6}
            maxLength={10}
            required
          />
      </Form.Item>

      <Form.Item label="Email Address">
          <Input
            name='email_address'
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
      </Form.Item>

      <Form.Item label="Phone number">
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            minLength={8}
            maxLength={8}
            required
          />
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Radio.Group onChange={(e) => setGender(e.target.value)} defaultValue={gender} value={gender}>
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
          <Radio value="Transgender">Transgender</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="Café"
        label="Café"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select Café!',
          },
        ]}
      >
      <CafeFormDropdown defaultCafe={cafe} handleChange={handleChange} />
      </Form.Item>
      <Form.Item>
        <Button type="submit" onClick={handleSubmit} value="submit">Submit</Button>
        <Button type="button" onClick={handleCancel}>Cancel</Button>
      </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeForm;
