import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store';
import CafeTable from './components/CafeTable';
import EmployeeTable from './components/EmployeeTable';
import Layout from './components/Layout';
import CafeForm from './components/CafeForm';
import EmployeeForm from './components/EmployeeForm';
import CafeEmployee from './components/CafeEmployee';
const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="Cafe" element={<CafeTable />} />
                  <Route path="Employee" element={<EmployeeTable />} />
                  <Route path="AddEditCafe" element={<CafeForm />} />
                  <Route path="AddEditCafe/:id" element={<CafeForm />} />
                  <Route path="AddEditEmployee" element={<EmployeeForm />} />
                  <Route path="AddEditEmployee/:id" element={<EmployeeForm />} />
                  <Route path="cafeEmployee/:id" element={<CafeEmployee />} />
                </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    );
  };
export default App;
