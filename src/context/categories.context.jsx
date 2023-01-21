import { createContext,useState,useEffect } from "react"
import Shop_Data from '../shop-data.json';
import { addCollectionDocuments,getCategoriesAndDocuments} from "../utlis/firebase.utils";
export const CategoryContext=createContext({
products:null,
setProducts:()=>null,
categoriesMap:{}
})


export const CategoryProvider=({children})=>{
const [categoriesMap,setCategoriesMap]=useState({})

useEffect(()=>{
// addCollectionDocuments('categories',Shop_Data)
const getCategoriesMap= async()=>{
const categoryMap= await getCategoriesAndDocuments();
console.log(categoryMap)
setCategoriesMap(categoryMap)
}
getCategoriesMap();
},[])
const value={categoriesMap,setCategoriesMap}
return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}