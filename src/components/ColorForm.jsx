import React, {useState} from "react";

export default function ColorForm (props){
let [inputColor, setInputColor] = useState('');

const onSubmit = (e) => {
    e.preventDefault()

    let {addToColors} = props
    addToColors(inputColor)
}

return <div className="color-form">
    <form onSubmit={onSubmit}>
        <input type="text" 
        onChange={e => setInputColor(e.target.value)}
        />
        <button type="submit">Submit</button>
    </form>
</div>

}