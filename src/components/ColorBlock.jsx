import React from "react";

export default function ColorBlock({color}) {
    let style = {'backgroundColor': color}
    return <div className="colorBlock" style={style}>
        <p>{color}</p>
    </div>

}