import { LitElement, html } from "lit-element";
import styleScss from '../my-elementStyle'

export class MyElement extends LitElement{
    static get styles(){
        return[styleScss]
    }
        render(){
        return html`<p>hola</p>`;
    }
}
customElements.define('my-element', MyElement)