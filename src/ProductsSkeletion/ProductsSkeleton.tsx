import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
const ProductsSkeleton = () => {
    return (
        <div>
             <Row>
            {Array(20).fill('')?.map((product, index) => (
                <Col md={3} className="md-3" key={index}>
                    <Skeleton style={{borderRadius: 10}} height={320} />
                </Col>
            ))}
            </Row>
        </div>
    );
};

export default ProductsSkeleton;