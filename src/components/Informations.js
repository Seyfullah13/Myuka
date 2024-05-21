import React from 'react';
import PropTypes from 'prop-types';

// Définir une variable pour l'image de remplacement
const PlaceholderImage = require('../Sans titre.png');

function Informations({ nutriscore, codeNova, huilePalme, codeNovaUnknown, huilePalmeUnknown }) {
  return (
    <div className="container">
      <div className="row animate__animated animate__flash">
        <div className="col-md-4">
          {/* Affichage du nutriScore */}
          {nutriscore == "e" && (
            <img
              id="nutriScore"
              src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-e.svg"
              alt="nutriScore E"
              className="img-fluid shadow-lg bg-body-tertiary rounded"
            />
          )}
          {nutriscore == "d" && (
            <img
              id="nutriScore"
              src="https://static.openfoodfacts.org/images/attributes/dist/nutriscore-d.svg"
              alt="nutriScore D"
              className="img-fluid shadow-lg bg-body-tertiary rounded"
            />
          )}
          {/* Ajoutez des blocs similaires pour les autres valeurs de nutriscore */}
          
          {/* Affichage du message si le nutriScore est indisponible */}
          {(nutriscore == "not-applicable" || nutriscore === "unknown" || nutriscore === undefined || nutriscore === "") && (
            <img src={PlaceholderImage} alt="Unknown Product" className="unknown-image" />
          )}
        </div>

        <div className="col-md-4">
          {/* Affichage du code Nova */}
          {codeNova === 4 && (
            <img
              id="nova"
              src="https://static.openfoodfacts.org/images/attributes/dist/nova-group-4.svg"
              alt="Code Nova 4"
              className="img-fluid shadow-lg p-2 bg-body-tertiary rounded"
            />
          )}
          {/* Ajoutez des blocs similaires pour les autres valeurs de codeNova */}
          
          {/* Affichage du message si le code Nova est indisponible */}
          {codeNovaUnknown === "unknown" && (
            <p className="text-center">Code Nova non disponible</p>
          )}
        </div>

        <div className="col-md-4">
          {/* Affichage du message si le produit contient de l'huile de palme */}
          {huilePalme === 1 && (
            <div className="text-center">
              <img
                id="palm"
                className="img-fluid"
                alt="huileDePalme"
                src="https://static.openfoodfacts.org/images/icons/dist/palm-oil.svg"
                style={{ maxWidth: "100px", height: "auto" }} // Modifie la taille de l'image
              />
              <p>Ce produit contient de l'huile de palme.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Informations.propTypes = {
  nutriscore: PropTypes.oneOf(['a', 'b', 'c', 'd', 'e', 'not-applicable']).isRequired,
  codeNova: PropTypes.oneOf([1, 2, 3, 4, 'unknown']).isRequired,
  huilePalme: PropTypes.oneOf([0, 1, 'en:palm-oil-content-unknown']).isRequired,
  codeNovaUnknown: PropTypes.string.isRequired,
  huilePalmeUnknown: PropTypes.string.isRequired,
};

export default Informations;
