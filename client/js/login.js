import { init } from "./App";
import markup from "../connexion.html"

/**
  * @param {HTMLElement} container
  * @param {object} router
  */
export const render=(container, router)=>{

    container.innerHTML = markup
    document.title = "Connexion";

return container.destroy()
}