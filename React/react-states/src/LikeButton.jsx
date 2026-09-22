import { useState } from "react";
export default function LikeButton()
{
    let [liked,setLiked]=useState(false);
    let [likeCount,incLikeCount]=useState(0);
    console.log("Component was re-rendered");
    
    function likeToggle()
    {
        setLiked((liked)=>{
            if(!liked)
            {
                incLikeCount((likeCount)=>likeCount+1);
            }
            return !liked;
        }
        )
    }
        
    
    let likeStyle={color:"red"}
    return(
        <div>
            <p>Like count:{likeCount}</p>
            <p onClick={likeToggle}>
                {liked?
                (<i className="fa-solid fa-heart" style={likeStyle}></i>)
                :(<i className="fa-regular fa-heart"></i>)
                }
            </p>
        </div>
    )
}


   
         

    
  


