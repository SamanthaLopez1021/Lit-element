import { LitElement, html } from "lit-element";
import styleLogin from '../src/loginStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[styleLogin];
    }
    render(){
        return html`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="navegacion.css">
    <title>Document</title>
</head>
<body>
    <div class="row">
    <div  class="col-sm card ">
        <h4 class="text">Bienvenid@ al sistema integrado de pumas</h4>
        <h1 class="text1">PUMAS TIC</h1>
    </div>
    </div>
   

      
</body>
</html>
        `
        ;
    }
}
customElements.define('my-welcome', MyElement)