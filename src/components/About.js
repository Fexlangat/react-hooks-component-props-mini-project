import React from "react";


function About({image, about}){

    const defaultValueImg = "https://via.placeholder.com/215"

    return(
        <aside>
        <img  src={image || defaultValueImg} alt="blog logo" />
            <p>{about}</p>
    </aside>
    )
 
}
export default About;