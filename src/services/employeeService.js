const BASE_URL = 'http://localhost:4000'; // Replace with your API endpoint

export const getEmployees = async (id) => {
  try {
    let response = '';
    if(id){
      response = await fetch(`${BASE_URL}/employees/${id}`);
    }else{
      response = await fetch(`${BASE_URL}/employees`);
    }
    const data = await response.json() || [];
    return data;
  } catch (error) {
    throw new Error('Failed to fetch employees');
  }
};

export const getCafeEmployees = async (id) => {
  try {
    let response = '';
    response = await fetch(`${BASE_URL}/employees?cafe=${id}`);
    const data = await response.json() || [];
    return data;
  } catch (error) {
    throw new Error('Failed to fetch cafe\'s employees');
  }
};

export const deleteEmployees = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/employees`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch employees');
  }
};

export const addEmployee = async (formData) => {
  try {
    let data = {};
      for (var key of formData.entries()) {
        data[key[0]] = key[1];
      }
      const response = await fetch(`${BASE_URL}/employees`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to add Employee!');
  }
};

export const editEmployee = async (formData) => {
  try {
    let data = {};
    for (var key of formData.entries()) {
      data[key[0]] = key[1];
    }
    const response = await fetch(`${BASE_URL}/employees`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to update Employee!');
  }
};
