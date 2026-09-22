export default function Price({oldPrice,newPrice})
{
    let oldStyles={textDecorationLine:'line-through'}
    let newStyles={fontWeight:'bold'}

    return(
    <div style={{backgroundColor:'#e0c367',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
    }}>
    <span style={oldStyles}>&#x20B9;{oldPrice}</span>
    &nbsp;&nbsp;&nbsp;
    <span style={newStyles}>&#x20B9;{newPrice}</span>
    </div>

    );
   
    
}