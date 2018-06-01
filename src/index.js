import './main.css';
import { Main } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';



class MyComponent extends HTMLElement {
  connectedCallback(){
    this.innerHTML = "<div>I am a web component!</div>";
  }
}

customElements.define("my-component", MyComponent);
Main.embed(document.getElementById('root'));

registerServiceWorker();
