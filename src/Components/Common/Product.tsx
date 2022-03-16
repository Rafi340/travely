import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from 'types';

interface IProps{
    product: IProduct
}
const Product = ({product} :IProps) => {
    const {id, image, title, category} = product;
    return <>
    <Col className="md-3 h-100 " >
        <Link to={`/product/${id}`}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {image} />
            <Card.Body>
                <Card.Text>{title}</Card.Text>
                <Card.Text>
                    {category}
                </Card.Text>

            </Card.Body>
        </Card>
        </Link>
    </Col>
    </>
}
export default Product;