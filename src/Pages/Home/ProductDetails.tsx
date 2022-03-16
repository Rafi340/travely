import useAsync from 'hooks/useAsync';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductService from 'Services/ProductService';
import { IProduct } from 'types';
import { BsCartCheckFill} from 'react-icons/bs';
interface IParams{
    id: string;
}
const ProductDetails = () => {
    const {id} = useParams<IParams>();
    const {data, isLoading, isSuccess } = useAsync<IProduct>(()=> ProductService.getProductBYId(id));
    const {title, image, description, price } = (data || {}) as IProduct;
    return <div className="product_details__component my-5">
        <Container>
            <div className="wrapper bg-white rounded border"></div>
            {
                isLoading && <h3>Loading ....</h3>
            }
            {
                isSuccess && <Row>
                    <Col md={4}>
                        <img src={(data ? image:"")} alt={title} />
                    </Col>
                    <Col md={8}>
                            <h3 className="mb-3">{data?.title}</h3>
                            <h1>$ {price}</h1>
                            <Button className="btn btn-primary">
                        <BsCartCheckFill />
                        Add to Cart
                    </Button>
                    <p>
                        {description}
                     </p>
                    </Col>

                    
                     </Row>
            }
        </Container>
    </div>;
};
export default ProductDetails;