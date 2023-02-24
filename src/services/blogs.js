import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`;
}

const setHeader = () => {
  return {
    headers: { Authorization : token}
  }
}


const getAll = async () => {
  const config = setHeader();
  const response = await axios.get(baseUrl,config)
  return  response.data;
}

const create = async newObject => {
  const config = setHeader()

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, updatedObj ) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedObj);
  return response.data;
}

const deleteBlog = async ( id ) => {
  const config = setHeader();
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  console.log(response.data)
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken, create, update, deleteBlog }