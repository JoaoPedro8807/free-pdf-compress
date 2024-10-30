import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        "Content-Type": "json",
    }
})

export const testeReatDjango = async <T = string>(url: string) =>{
    const response = await api.get(url)
    const data = await <T>response.data

    return data
}