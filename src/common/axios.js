import axios from 'axios'
const API =process.env.REACT_APP_BASE_URL

export const delAxios = (url,id)=>
{
    return   axios.delete(`${API}/${url}/${id}`)
}


export const getAxios = (url)=>
{
    return axios.get(`${API}/${url}`).then(res =>res.data)
}