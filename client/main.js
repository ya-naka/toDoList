
import Navigo from "navigo"
import * as App from "/js/App"

const appElement = document.getElementById("app")
const router = new Navigo("/")
App.init(appElement, router)

