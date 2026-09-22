import './Product.css'
import Price from './Price';
import Description from './Description';

function Product({title,idx})
{
  let oldPrices=['12,495','11,900','1,599','599'];
  let newPrices=['8,999','9,199','899','278'];
  let description=[
    ['8000 DPI','5 programmeable buttons'],
    ['Intutive surface','Designed for IPad pro'],
    ['Designed for Ipad pro','Intuitive surface'],
    ['wireless','optical orientation']
  ];
  
    return(
        <div className="Product">
           <p>{title}</p>
           <Description description={description[idx][0]}/>
           <Description description={description[idx][1]}/>
           <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
           
        </div>
    )
}

export default Product