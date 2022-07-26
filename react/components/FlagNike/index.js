import React, { useState, useEffect } from 'react';
import { ProductContext } from 'vtex.product-context';
import IconNike from '../../assets/nike.png';
import './style.global.css';

const Nike = () => {
    const { product } = React.useContext(ProductContext);
    const [enableFlag, setEnableFlag] = useState(false);

    useEffect(() => {
      const isActive = product.productClusters.some((item) => {
        return item.name.includes('Da nike');
      })

      setEnableFlag(isActive);
    }, [product])

    return(
        <div>
            {enableFlag && <div><img className="flag" src={IconNike}/></div>}
        </div>
    )
}

export default Nike;