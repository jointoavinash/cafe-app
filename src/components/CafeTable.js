import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Table, Button, PageHeader, Popconfirm } from 'antd';
import { fetchCafes } from '../actions/cafeActions';
import { Outlet, Link, useNavigate } from "react-router-dom";
const BASE_URL = 'http://localhost:4000'; // Replace with your API endpoint

const CafeTable = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const cafes = useSelector((state) => state.cafes.cafes);
  useEffect(() => {
      dispatch(fetchCafes());
  }, [dispatch]);

  const handleCafeDelete = (key) => {
    fetch(`${BASE_URL}/cafes/` + key, { 
      method : 'DELETE' }
    ).then( () => {
      console.log( key + ' deleted successfully' );
      dispatch(fetchCafes());
      navigate('/cafe');
    })
  };

  const columns = [
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (text) => <img src={text} width="30" height="30"/>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Employees',
      key: 'employees',
      dataIndex: 'employees',
      render: (_, record) =>(
        <Space size="middle">
          <Link to={`/cafeEmployee/${record._id}`}>Employee</Link>
        </Space>
      )

    },
    {
      title: 'Location',
      key: 'location',
      dataIndex: 'location',
    },    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>(
        <Space size="middle">
          <Link to={`/addEditCafe/${record._id}`}>Edit</Link>
          <Popconfirm title="Sure to delete the CAfe?" onConfirm={() => handleCafeDelete(record._id)}>
            <a>Delete</a>
          </Popconfirm>
        </Space>
      )
    },
  ];

  const frameworkComponents = {
    actionsCellRenderer: ActionsCellRenderer,
  };

  return (
    <div className="cafe-table">
        <PageHeader
            className="site-page-header"
            title="Cafe Page"
        />
        <Table 
            columns={columns} 
            dataSource={cafes || []}
            frameworkComponents={frameworkComponents}
        />
        <div>
          <nav>
            <Link to="/addEditCafe"><Button type="primary">Add café</Button></Link>
            <Outlet />
          </nav>
        </div>
    </div>
  );
};

const ActionsCellRenderer = (props) => {
  const { onEdit, onDelete } = props;
  return (
    <div className="actions-cell">
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default CafeTable;
