import * as LoginPage from "login"
import * as HomePage from "\home"
//import * as RegisterPage from "\register"
//import * as NotFoundPage from "\notFound"

/**
  * @param {HTMLElement} container
  * @param {Object} router
  */
 export const init = (container, router) => {
	let currentPage
  
	const init = () => {
	  initRoutes()
	}
  
	const initRoutes = () => {
	  router

//	 	.on("/", () => {
//		  currentPage = LoginPage.render(container, router)
//		}, {
//		  before: protectAuthenticatedRoute
//		})

  		.on("/login", () => {
		  currentPage = LoginPage.render(container, router)
		})
	}
  
/* 
		.on("/register", () => {
		  currentPage = RegisterPage.render(container, router)
		})
  
	  // Utiliser la méthode `notFound` du router pour afficher la page "notFound"
	  // lorsque l'URL du navigateur ne correspond à aucune route gerée par
	  // l'application
		.notFound(() => {
		  currentPage = NotFoundPage.render(container, router)
		})
  
	  router.hooks({
		leave: handleLeave
	  })
  
	  router.resolve()
	}
	const protectAuthenticatedRoute = (done) => {
	  // Si l'utilisateur est connecté (voir module `src/services/auth.js`), on
	  // poursuit le changement de page, sinon on empêche le changement de page
	  // et on redirige vers la route `/login`
	  if (isLoggedIn()) {
		done()
	  } else {
		done(false)
		router.navigate("/login")
	  }
	}
  
	const handleLeave = (done) => {
	  if (currentPage && currentPage.destroy) {
		currentPage.destroy()
	  }
  
	  done()
	}
  */

	const destroy = () => {
	  router.destroy()
	}
  
	init()
  
	return { destroy }
  }

















/*
const router = new Navigo('/ProjetTuteure/client/');
router.on('/accueil', function () {
  // do something
});




	function reqListener () {
  console.log(this.responseText)
}
	var oReq = new XMLHttpRequest()
	oReq.addEventListener("load", reqListener)
	oReq.open("GET", "http://localhost:80/ProjetTuteure/verify_user")
	oReq.send()
*/