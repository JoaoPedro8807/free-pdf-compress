import { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { api } from "../services/axiosApi";

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig){
    const [data, setData] = useState<T | null >(null)
    const [isFetching, setIsFetching] = useState(true)

    api.get(url, options)
    .then(response => setData(response.data))
    .catch( erro => alert(`Erro ${erro} `))
    .finally(() => setIsFetching(false))

    return { data, isFetching }
}




