import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../actions/employeeActions';
import { Space, Table, Button, PageHeader, Popconfirm } from 'antd';
// import { Outlet, Link } from "react-router-dom";
import { useNavigate, Outlet, Link } from 'react-router-dom';
const BASE_URL = 'http://localhost:4000'; // Replace with your API endpoint

const EmployeeTable = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
    const employee = useSelector((state) => {
        return state.employee.employee
    });
  
    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleEmployeeDelete = (key) => {
      fetch(`${BASE_URL}/employees/` + key, { 
        method : 'DELETE' }
      ).then( () => {
        console.log( key + 'deleted successfully' );
        dispatch(fetchEmployees());
        // navigate('/employee');
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
                dataSource={employee || []}
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

export default EmployeeTable;
