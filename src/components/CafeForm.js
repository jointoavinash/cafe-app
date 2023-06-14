import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCafes } from '../actions/cafeActions';
import { addCafe, editCafe } from '../actions/cafeActions';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button, Form, Input} from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;
// const CafeForm = ({ onSubmit, onCancel, initialValues }) => {
const CafeForm = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.cafes.cafes);  // Assuming you have a cafe reducer
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState(null);
  const [location, setLocation] = useState('');

  const { id } = useParams();
  useEffect(() => {
    id && dispatch(fetchCafes(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('logo', logo);
    formData.append('location', location);
    // let data = {};
    // for (var key of formData.entries()) {
    //   data[key[0]] = key[1];
    // }

    if (initialValues?._id) {
        dispatch(editCafe(formData));
    } else {
      dispatch(addCafe(formData));
    }
    navigate('/cafe/')
  };

  const handleCancel = () => {
    navigate('/cafe/'); // Redirect to café page on cancel
    // return <Link to="/cafe" />
  };

  useEffect(() => {
    setName(initialValues?.name);
    setDescription(initialValues.description);
    setLogo(initialValues.logo);
    setLocation(initialValues.location);
  }, [initialValues]);

  return (
    <div>
      <h2>{id ? 'Edit Café' : 'Add Café'}</h2>
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
      <Form.Item label="Description">
          <TextArea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={256}
        />
      </Form.Item>

      <Form.Item label="Logo Path">
        <input
            type="text"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            required
          />
      </Form.Item>  
      <Form.Item label="Location">
      <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="submit" onClick={handleSubmit} value="submit">Submit</Button>
        <Button type="button" onClick={handleCancel}>Cancel</Button>
      </Form.Item>
      </Form>
    </div>
  );
};

export default CafeForm;
