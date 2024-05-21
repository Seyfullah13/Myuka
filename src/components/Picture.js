import React from 'react';
import PropTypes from 'prop-types';
import PlaceholderImage from '../Sans titre.png'; // Assurez-vous que le chemin d'importation est correct

function Picture({ photo, ingredient, packaging }) {
  // Logique pour déterminer l'affichage du conditionnement
  let packagingToShow = packaging;
  if (!packaging || packaging === "unknown" || packaging === null || packaging === "undefined" || (Array.isArray(packaging) && packaging.length === 0)) {
    packagingToShow = <img src={PlaceholderImage} alt="Unknown Packaging" className="unknown-image" />;
  }

  return (
    <div className="col-md-9 m-auto" id="photo">
      {photo ? (
        <div className="row g-1 text-center mt-1">
          <div className="col-md-6 animate__animated animate__flash">
            <div className="p-3 p-md-5" id="body">
              <img src={photo} alt="Product" className="img-fluid rounded-lg" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 p-md-5" id="body">
           
            </div>
          </div>
        </div>
      ) : (
        <div className="row g-1 text-center mt-1 animate__animated animate__flash">
          <div className="col">
            <div className="p-3 p-md-5" id="body">
              <img src={PlaceholderImage} alt="Unknown Product" className="unknown-image" />
            </div>
          </div>
        </div>
      )}
      {/* Affichage du conditionnement */}
      {packagingToShow && (
        <div className="row g-1 text-center mt-1">
          <div className="col">
            <div className="p-3 p-md-5" id="body">
              <div className="p-4 rounded">Conditionnement: <br></br> {packagingToShow}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Picture.propTypes = {
  photo: PropTypes.string,
  ingredient: PropTypes.string,
  packaging: PropTypes.string
};

export default Picture;
