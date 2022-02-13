import { useState } from "react"
import { AddCategory } from "./components/categories/AddCategory"
import { GifGrid } from "./components/categories/GifGrid"
import 'animate.css';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory { ...{setCategories}}/>
            <ol>
                {categories.map((category,i) => (<GifGrid {...{key: i+category, category}}/>))}
            </ol>
        </div>
    )
}

export default GifExpertApp