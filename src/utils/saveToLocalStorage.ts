import { User } from "../types";

export default function saveToLocalStorage(key:string, data:User){

    localStorage.setItem(key, JSON.stringify(data))
   
}