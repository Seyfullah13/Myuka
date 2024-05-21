import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import PlaceholderImage from '../Sans titre.png'; // Importer votre image locale

function Product({ productName,  ingredient }) {
  return (
    <Card className="text-dark text-center my-2 p-4" id='produit'>
      <Card.Title>{productName}</Card.Title>
      {/* Conditionally render ingredients if available */}
      {ingredient ? (
        <div className="col animate__bounceInLeft animate__animated animate__bounce">
          <div className="p-5 text-dark">{ingredient}</div>
        </div>
      ) : (
        <div className="col animate__bounceInLeft animate__animated animate__bounce">
          <div className="p-5 text-dark"> <img src={PlaceholderImage} alt="Inconnu" className="unknown-image" /></div>
        </div>
      )}
    </Card>
  );
}

Product.propTypes = {
  productName: PropTypes.string,
  ingredient: PropTypes.string // Assuming you want to validate ingredient prop
};

export default Product;
