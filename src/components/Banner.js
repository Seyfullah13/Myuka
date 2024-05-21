import Header from "../Header"; // Import du composant Header depuis le répertoire parent
import Description from "./Description"; // Import du composant Description depuis le répertoire actuel

// Définition du composant Banner
function Banner() {
  // Rendu du composant
  return (
    <div className="md:w-3/4 mx-auto my-2 p-4 text-center text-black" id="bannière">
      {/* Affichage du composant Header */}
      <Header />
      {/* Affichage du composant Description */}
      <Description />
    </div>
  );
}

export default Banner; // Export du composant Banner pour une utilisation externe
