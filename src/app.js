// jsx custom compiler
// note: babel will call this function
import compile from "./compiler";
window.compile = compile; // add the compile function to the global object browser

// app component
import App from "./App.jsx";

// Bootstrap
import "bootstrap";

// scss entry point
import "./scss/app.scss";

(async () => {
  // inject app component in #app you can find it at public/index.html
  document.getElementById("app").appendChild(App());
})();
