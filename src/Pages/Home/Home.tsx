import Banner from 'Components/Common/Banner';
import React from 'react';
import Products from './Products';
import ProductService from 'Services/ProductService';
import useAsync from 'hooks/useAsync';

const Home = () => {
    // const [products, setProduct] = useState<IProduct[]>([]);
    // useEffect(() =>{
    //     ProductService.getProduct().then((res) => setProduct(res))
    // }, []);
    const {data , isLoading} =useAsync(ProductService.getProduct);
    return <>
        <Banner/>
         <Products isLoading={isLoading} products={data}/> 
        </>;    
}

export default Home;