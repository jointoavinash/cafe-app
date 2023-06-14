import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { CoffeeOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: <Link to="/cafe">Cafe</Link>,
    key: '/cafe',
    icon: <CoffeeOutlined />
  },
  {
    label: <Link to="/employee">Employee</Link>,
    key: '/employee',
    icon: <UserOutlined />
  },
];

const Layout = () => {
  const [current, setCurrent] = useState('/cafe');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <Outlet />
    </>
  )
};

export default Layout;