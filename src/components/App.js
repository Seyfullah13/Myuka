import React, { useState } from "react";
import Banner from "./Banner";
import Product from "./Product";
import Informations from "./Informations";
import Distributeur from "./Distributeur";
import Allergène from "./Allergène";
import Footer from "./Footer";
import Picture from "./Picture";
import Tableau from "./Tableau";
import 'animate.css';

function App() {
  const [codeBarre, setCodeBarre] = useState("");
  const [productInfo, setProductInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setCodeBarre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${codeBarre}.json`
      );
      if (!response.ok) {
        throw new Error("Produit non trouvé.");
      }
      const data = await response.json();
      setProductInfo(data.product);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="body">
      <Banner />
      <div className="text-dark text-center col-md-12 m-auto my-2 p-4">
        <form
          className="border-5 col-12 m-auto p-2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="codeBarre" className="visually-hidden">
            Code-barres
          </label>
          <input
            id="codeBarre"
            className="form-control text-center"
            type="number"
            value={codeBarre}
            onChange={handleChange}
            placeholder="Entrez le code-barres"
          />
          <br />
          <button className="btn m-2" type="submit" id="bouton">
            Rechercher <i className="fas fa-search"></i>
          </button>
        </form>
        {error && <p>{error}</p>}
        {productInfo && (
          <Product
            productName={productInfo.product_name}
            infoBrand={productInfo.brands}
            barreCode={productInfo.id}
            ingredient={
              productInfo?.ingredients_text_fr || productInfo?.ingredients_text
              }
          />
        )}
        {productInfo && (
          <Picture
            photo={productInfo.image_front_url}
           
            
            packaging={productInfo.packaging?.split(/en:|fr:/) || []}
          />
        )}
        {productInfo && (
          <Tableau
            matieres_grasses={productInfo.nutriments.fat_100g}
            fat_portion={productInfo.nutriments.fat_serving}
            energie={productInfo.nutriments.energy}
            energy={productInfo.nutriments.energy_serving}
            glucides={productInfo.nutriments.carbohydrates_100g}
            carbohydrates={productInfo.nutriments.carbohydrates_serving}
            proteine={productInfo.nutriments.proteins_100g}
            protein={productInfo.nutriments.proteins_serving}
            sel={productInfo.nutriments.salt_100g}
            salt={productInfo.nutriments.salt_serving}
          />
        )}
        {productInfo && (
          <Informations
            nutriscore={productInfo.nutriscore_2023_tags}
            codeNova={productInfo.nova_group}
            huilePalme={productInfo.ingredients_from_palm_oil_n}
          />
        )}
        {productInfo && (
          <Allergène
            allergenName={
              (productInfo.allergens_imported || productInfo.allergens_from_ingredients)
                ?.split(/en:|fr:/) || []
            }
          />
        )}
        {productInfo && (
          <Distributeur
            store={productInfo.stores}
            fabriquant={productInfo.manufacturing_places}
            quantite={productInfo.quantity}
            pays={
              typeof productInfo.countries === "string"
                ? productInfo.countries.split(/en:|fr:/)
                : null
            }
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
