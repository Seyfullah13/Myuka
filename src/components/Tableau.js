import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

function Tableau({ matieres_grasses, fat_portion, energie, energy, glucides, carbohydrates, proteine, protein, sel, salt }) {
  // Fonction pour arrondir les valeurs à un chiffre après la virgule ou afficher l'entier s'il n'y a pas de décimales
  const roundValue = (value) => {
    if (typeof value === 'number') {
      // Vérifie si la valeur est un nombre entier
      if (value % 1 === 0) {
        return value.toString(); // Retourne la valeur en tant que chaîne de caractères
      } else {
        return value.toFixed(1); // Retourne la valeur arrondie à un chiffre après la virgule
      }
    } else {
      return "-";
    }
  };

  return (
    <div className="col animate__animated animate__zoomInLeft" id='tableau'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nutriment</th>
            <th>Pour 100g/100ml</th>
            <th>Par portion (52g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Énergie</td>
            <td>{roundValue(energie)}</td>
            <td>{roundValue(proteine)}</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>{roundValue(energy)}</td>
            <td>{roundValue(protein)}</td>
          </tr>
          <tr>
            <td>Sel</td>
            <td>{roundValue(sel)}</td>
            <td>{roundValue(salt)}</td>
          </tr>
          <tr>
            <td>Matières Grasses</td>
            <td>{roundValue(matieres_grasses)}</td>
            <td>{roundValue(fat_portion)}</td>
          </tr>
          <tr>
            <td>Glucides</td>
            <td>{roundValue(glucides)}</td>
            <td>{roundValue(carbohydrates)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

Tableau.propTypes = {
  matieres_grasses: PropTypes.number,
  fat_portion: PropTypes.number,
  energie: PropTypes.number,
  energy: PropTypes.number,
  glucides: PropTypes.number,
  carbohydrates: PropTypes.number,
  proteine: PropTypes.number,
  protein: PropTypes.number,
  sel: PropTypes.number,
  salt: PropTypes.number
};

export default Tableau;
