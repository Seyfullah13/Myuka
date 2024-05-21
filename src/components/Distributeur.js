import React from 'react';
import PropTypes from 'prop-types';
import PlaceholderImage from '../Sans titre.png'; // Importer votre image locale

function Distributeur({ store, fabriquant, quantite, pays }) {
  return (
    <div className="container my-4 animate__animated animate__zoomInLeft" id='distributeur'>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4">
          <div className="p-4 rounded text-dark text-center">
            {/* Condition pour afficher le magasin ou un message si indisponible */}
            {store ? <p className="mb-2">Magasin : {store}</p> : <p className="mb-2"> <img src={PlaceholderImage} alt="Magasin indisponible" className="unknown-image" /></p>}
            {/* Condition pour afficher le fabricant ou un message si indisponible */}
            {fabriquant ? <p className="mb-2">Fabricant : {fabriquant}</p> : <p className="mb-2"> <img src={PlaceholderImage} alt="Fabricant indisponible" className="unknown-image" /></p>}
            {/* Condition pour afficher la quantité ou un message si indisponible */}
            {quantite ? <p className="mb-2">Quantité : {quantite}</p> : <p className="mb-2"> <img src={PlaceholderImage} alt="Quantité indisponible" className="unknown-image" /></p>}
            {/* Condition pour afficher le pays ou un message si indisponible */}
            {pays ? <p className="mb-0">Pays : {pays}</p> : <p className="mb-0"> <img src={PlaceholderImage} alt="Pays indisponible" className="unknown-image" /></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

Distributeur.propTypes = {
  store: PropTypes.string,
  fabriquant: PropTypes.string,
  quantite: PropTypes.string,
  pays: PropTypes.string
};

export default Distributeur;
