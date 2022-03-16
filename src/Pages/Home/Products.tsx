import Product from 'Components/Common/Product';
import ProductsSkeleton from 'ProductsSkeletion/ProductsSkeleton';
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { IProduct } from 'types';

interface IProps{
    products: IProduct[] | null,
    isLoading: boolean
}
const Products = ({products, isLoading}: IProps) => {
    return <>
    <div className="my-5">
    <h2 className="mb-4">New Product</h2>
    <Container>
        {
            isLoading && <ProductsSkeleton />
        }
        {
           !isLoading &&
           <Row className="align-items-stretch">
            { products?.map((product: IProduct) => 
            (<Product key={product.id } product={product} />))
            }
            </Row>
        }
    </Container>
    </div>
    </>
};
export default Products;