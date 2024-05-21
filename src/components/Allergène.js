import React from 'react';
import PropTypes from 'prop-types';
import PlaceholderImage from '../Sans titre.png'; // Assurez-vous que le chemin d'importation est correct

function Allergène({ allergenName }) {
  // Condition pour obtenir le nom de l'allergène ou afficher "Allergène non disponible"
  let allergenNameToShow = allergenName;
  if (!allergenName || allergenName === "unknown" || allergenName === null || allergenName === "undefined" || (Array.isArray(allergenName) && allergenName.length === 0) || (Array.isArray(allergenName) && allergenName.length === 1 && allergenName[0] === "")) {
    allergenNameToShow = "Inconnu";
  }

  return (
    <div className="col-md-9 m-auto my-2 p-4 text-center text-dark animate__animated animate__slideInLeft">
      {/* Affichage du nom de l'allergène */}
      <div>
        <p>Allergène :</p>
        <h2 id='allergène'>{allergenNameToShow}</h2>
        {/* Affichage de l'image si le nom de l'allergène est inconnu */}
        {allergenNameToShow === "Inconnu" && <img src={PlaceholderImage} alt="Unknown Allergen" className="unknown-image" />}
      </div>
    </div>
  );
}

Allergène.propTypes = {
  allergenName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string) // Accepts either a string or an array of strings
  ])
};

export default Allergène;
