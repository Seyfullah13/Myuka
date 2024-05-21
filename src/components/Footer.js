import React from 'react';

function Footer() {
  return (
    <footer className="text-black text-center py-4 animate__animated animate__flipInX" id='footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="https://monsite.com/" className="text-black">Accueil</a></li>
              <li><a href="https://monsite.com/products" className="text-black">Produits</a></li>
              <li><a href="https://monsite.com/about" className="text-black">À propos</a></li>
              <li><a href="tel:+330123456789" className="text-black">Contact</a></li> {/* Ajouté le lien de téléphone */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Nos partenaires</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.acmemarkets.com/" className="text-black">Acme (États-Unis)</a></li>
              <li><a href="https://groceries.morrisons.com/webshop/startWebshop.do" className="text-black">Morrisons (Royaume-Uni)</a></li>
              <li><a href="https://www.norma.fr/fr/bonnes-affaires/" className="text-black">Norma (Allemagne)</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contactez-nous</h5>
            <address className="text-black">
              13 Rue du Prévôt<br />
              75001 Paris<br />
              France<br />
              <abbr title="Téléphone" className="text-black">Tél:</abbr> <a href="tel:+330123456789" className="text-black">+33 (0)1 23 45 67 89</a> {/* Ajouté le lien de téléphone */}
            </address>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">© 2024 MYUKA. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
