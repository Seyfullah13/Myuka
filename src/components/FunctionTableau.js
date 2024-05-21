import React from 'react'; // Import de React
import PropTypes from 'prop-types'; // Import de PropTypes pour la validation des props

// Définition du composant FunctionTableau avec les props comme paramètres
function FunctionTableau({ matieresGrasses, fatPortion, energie, energy, glucides, carbohydrates, proteine, protein, sel, salt }) {
  // Rendu du composant
  return (
    <div className="col">
      {/* Tableau pour afficher les informations nutritionnelles */}
      <table className="table table-striped mt-3">
        {/* En-tête du tableau */}
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Amount</th>
            <th>Nutrient</th>
            <th>Amount</th>
          </tr>
        </thead>
        {/* Corps du tableau */}
        <tbody>
          {/* Lignes du tableau avec les informations nutritionnelles */}
          <tr>
            <td>Énergie</td>
            <td>{energie}</td>
            <td>Protéines</td>
            <td>{proteine}</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>{energy}</td>
            <td>Protein</td>
            <td>{protein}</td>
          </tr>
          <tr>
            <td>Sel</td>
            <td>{sel}</td>
            <td>Salt</td>
            <td>{salt}</td>
          </tr>
          <tr>
            <td>Matières Grasses</td>
            <td>{matieresGrasses}</td>
            <td>Fat Portion</td>
            <td>{fatPortion}</td>
          </tr>
          <tr>
            <td>Glucides</td>
            <td>{glucides}</td>
            <td>Carbohydrates</td>
            <td>{carbohydrates}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Validation des props avec PropTypes
FunctionTableau.propTypes = {
  matieresGrasses: PropTypes.number.isRequired, // Matières grasses (nombre)
  fatPortion: PropTypes.number.isRequired, // Portion de graisse (nombre)
  energie: PropTypes.number.isRequired, // Énergie (nombre)
  energy: PropTypes.number.isRequired, // Énergie (nombre)
  glucides: PropTypes.number.isRequired, // Glucides (nombre)
  carbohydrates: PropTypes.number.isRequired, // Glucides (nombre)
  proteine: PropTypes.number.isRequired, // Protéines (nombre)
  protein: PropTypes.number.isRequired, // Protéines (nombre)
  sel: PropTypes.number.isRequired, // Sel (nombre)
  salt: PropTypes.number.isRequired // Sel (nombre)
};

export default FunctionTableau; // Export du composant FunctionTableau
