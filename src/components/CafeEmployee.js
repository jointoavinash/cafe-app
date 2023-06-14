import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCafeEmployee } from '../actions/employeeActions';
import { Space, Table, Button, PageHeader, Popconfirm } from 'antd';
import { useNavigate, Outlet, Link, useParams } from 'react-router-dom';
const BASE_URL = 'http://localhost:4000'; // Replace with your API endpoint

const CafeEmployee = () => {
  const { id } = useParams();

  const navigate  = useNavigate();
  const dispatch = useDispatch();
    const employee = useSelector((state) => {
        return state.employee.employee
    });
  
    useEffect(() => {
        dispatch(fetchCafeEmployee(id));
    }, [dispatch]);

    const handleEmployeeDelete = (key) => {
      fetch(`${BASE_URL}/employees/` + key, { 
        method : 'DELETE' }
      ).then( () => {
        console.log( key + 'deleted successfully' );
        dispatch(fetchCafeEmployee());
        navigate(0)
      })
    };

    const columns = [
        {
            title: 'Employee Id',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email_address',
            key: 'email_address',
        },
        {
            title: 'Phone',
            key: 'phone_number',
            dataIndex: 'phone_number',
        },
        {
            title: 'Days Worked',
            dataIndex: 'days_worked',
            key: 'days_worked',
        },
        {
            title: 'Cafe',
            dataIndex: 'cafe',
            key: 'cafe',
        },        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) =>
            <Space size="middle">
                <Link to={`/addEditEmployee/${record._id}`}>Edit</Link>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleEmployeeDelete(record._id)}>
                    <a>Delete</a>
                </Popconfirm>
            </Space>
        },
    ];
    
    return (
      <>
        <div className="employee-table">
            <PageHeader
                className="site-page-header"
                title="Employee Page"
            />
            <Table 
                columns={columns} 
                dataSource={employee}
                pagination={{ pageSize: 5 }} 
            />
        </div>
        <div>
          <nav>
            <Link to="/addEditEmployee"><Button>Add Employees</Button></Link>
            <Outlet />
          </nav>
      </div>        
      </>
    );
};

export default CafeEmployee;
