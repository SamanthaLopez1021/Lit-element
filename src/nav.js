import { LitElement, html } from "lit-element";
import styleLogin from '../src/navStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[styleLogin]
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
   <div class="row nav">
    <div  class="col-sm-4 Ctexto">
    <img src="https://pumasdc.com.co//SITSS/resources/img/logo2.png" alt="" width="50px" height="50px" style="float: inline-start; background-color: white; border-radius: 50px;">
    <div class="col-sm texto">
        <h5>Admin admin</h5>
    </div>
    </div>
    <div  class="col-sm">
      
    </div>
    
    
      
</body>
</html>
       `
        ;
    }
}
customElements.define('my-nav', MyElement)