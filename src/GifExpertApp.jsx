import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Tom y Jerry", "Detective Conan"]);

    const onAddCategory = (value) => {
        if(isExistEntry(value)) return;

        setCategories([value, ...categories]);        
    }

    const isExistEntry = (value) => {
        return categories.filter(c => c.toLowerCase() === value.toLowerCase()).length > 0;
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={onAddCategory}/>

        { categories.map(c => <GifGrid key={c} category={c} />) }
        
    </>
  )
}
