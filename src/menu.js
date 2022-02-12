import pageload from "./initial page-load.js";
import contact from "./Contact.js";
export default function menu() {
  document.querySelector("#content").innerHTML = `<div class="background">
    </div>
    <nav>
    <button id="home"> accueil</button>
    <button id="menu"> Menu</button>
  <button id="contact"> Contact</button></nav>
    <article>
    <header><h1>Menna Yacine FORGE</h1></header>
    <section>
    vous pouvez commander sur mesure en nous envoyant la photo que vous souhaitez dans notre <a href="https://www.facebook.com/Technicalmourning09">page Facebook</a> 
    ou vous pouvez choisir parmi les options ci-dessus
    </section>
    </article>`;
  const Contact = document.querySelector("#contact");
  Contact.addEventListener("click", contact);
  const home = document.querySelector("#home");
  home.addEventListener("click", pageload);
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", Menu);
}
