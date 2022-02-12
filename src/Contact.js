import pageload from "./initial page-load.js";
import contact from "./Contact.js";
import Menu from "./menu.js";
export default function Contact() {
  document.querySelector("#content").innerHTML = `<div class="background">
  </div>
  <nav>
  <button id="home"> accueil</button>
  <button id="menu"> Menu</button>
<button id="contact"> Contact</button></nav>
  <article>
  <header><h1>Menna Yacine FORGE</h1></header>
  <section>
 <p> contactez nous sur facebook <a href="https://www.facebook.com/Technicalmourning09">Menna Yacine</a></p>
 <p> numéro de téléphone 0771201530</p>
  </section>

  </article>`;
  const Contact = document.querySelector("#contact");
  Contact.addEventListener("click", contact);
  const home = document.querySelector("#home");
  home.addEventListener("click", pageload);
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", Menu);
}
