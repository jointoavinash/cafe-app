const BASE_URL = 'http://localhost:4000'; // Replace with your API endpoint

export const getCafes = async (id) => {
  try {
    let response = '';
    if(id){
      response = await fetch(`${BASE_URL}/cafes/${id}`);
    }else{
      response = await fetch(`${BASE_URL}/cafes`);
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch cafes');
  }
};

export const addCafe = async (formData) => {
  try {
    let data = {};
      for (var key of formData.entries()) {
        data[key[0]] = key[1];
      }

      const response = await fetch(`${BASE_URL}/cafes`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error) {
    throw new Error('Failed to add cafe');
  }
};

export const editCafe = async (formData) => {
  try {
    let data = {};
    for (var key of formData.entries()) {
      data[key[0]] = key[1];
    }

    const response = await fetch(`${BASE_URL}/cafes`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to update cafe');
  }
};

