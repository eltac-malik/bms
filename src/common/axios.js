import axios from 'axios'


export const delAxios = (url,id)=>
{
    return   axios.delete(`${process.env.REACT_APP_BASE_URL}/${url}/${id}`)
}


export const getAxios = (url)=>
{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`).then(res =>res.data)
}