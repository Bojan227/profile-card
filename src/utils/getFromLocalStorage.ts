import { User } from "../types"

export default function getFromLocalStorage(key:string){
    const user =  localStorage.getItem(key)

    if(user != null){
        const parsed:User = JSON.parse(user)
        return parsed
    }else return null



}