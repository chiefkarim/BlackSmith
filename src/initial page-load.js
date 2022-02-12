import contact from "./Contact.js";
import Menu from "./menu.js";
export default function pageload() {
  document.querySelector("#content").innerHTML = `<div class="background">
</div>
<nav>
<button id="home"> accueil</button>
   <button id="menu"> Menu</button>
 <button id="contact"> Contact</button>
</nav>
<article>
<header><h1>Menna Yacine FORGE</h1></header>
<section>Menna Yacine Forge est un atelier pour tout ce qui concerne le métal, des petits produits tels que les portes jusqu'aux exigences des grandes installations telles que la charpent metalic.</section>
<section class="hours">
    <h3>Heures de travail</h3>
    <p>Sunday: 8am - 5pm</p>

   <p>Monday: 8am - 5pm</p>
    
    <p>Tuesday: 8am - 5pm</p>
    
   <p>Wednesday: 8am - 5pm</p>
    
    <p>Thursday: 8am - 12pm</p>
    
   <p>Saturday: 8am - 5pm</p>
</section>
<section><h3>Location</h3>
<p>Algeria,Blida route slimane chaachoue</p>
</section>
</article>`;
  const Contact = document.querySelector("#contact");
  Contact.addEventListener("click", contact);
  const home = document.querySelector("#home");
  home.addEventListener("click", pageload);
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", Menu);
}
