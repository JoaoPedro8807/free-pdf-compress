import { AxiosRequestConfig } from "axios";
import { api } from "./axiosApi";
import { IFileList } from "../components/FilesList/FileProvider";


export async function PostCompressFile<T = Blob>(url: string, files:IFileList[], options?: AxiosRequestConfig){
    options = { 
        ...options, 
        headers:{
            ...options?.headers,
            "Content-Type": "multipart/form-data"
    },
    responseType: 'blob' 
}
    const formData = new FormData()
    files.forEach(file => {
        formData.append("file", file.file)
        formData.append("quality", file.quality.toString())
    })
    try{
        const response = await api.post<T>(
            url,
            formData,
            options
        ).then(response => response.data)
        return response
        
    }catch(error){
        alert(`Error: ${error}`)
        return
    }


    
}




