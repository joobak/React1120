import React from "react";
<<<<<<< HEAD
import { Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Products = ({ id, title, price, imgUrl, content}) => {
    
    const navigate = useNavigate();

    return (
        <div className="col-md-4" style={{ marginBottom: "50px" }}>
            <Nav.Link className="c1" onClick={() => navigate(`/detail/${id}`)}>
=======
const Products = ({ id, title, price, imgUrl, content}) => {
    
    return (
        <div className="col-md-4" style={{ marginBottom: "50px" }}>
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
            <img src={imgUrl} width="80%" />
            <h5 style={{ marginTop: "10px" }}>{title}</h5>
            <p>{content}</p>
            <span>{price}</span>
<<<<<<< HEAD
            </Nav.Link>

        </div>
    );
};
export default Products;
=======
        </div>
    );
};
export default Products;
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
