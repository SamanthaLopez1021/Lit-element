import { LitElement, html } from "lit-element";
import styleLogin from '../src/optionsStyle.js'
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
           
           </div>
           <div class="row">
            <div  class="col-sm-3 p">
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="dashboard.html" style="text-decoration: none; color: black;"><h5>Inicio</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="Presidencia.html" style="text-decoration: none; color: black;"><h5>Presidencia</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="Vicepresidencia.html" style="text-decoration: none; color: black;"> <h5>Vice Presidencia</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="Secretaria.html" style="text-decoration: none; color: black;"><h5>Secretaria</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Tesoreria</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Revisoria Fiscal</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Lista afiliados</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Lista de jugadores</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Lista de Coach's</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Lista Material</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Lista asistencia</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Cronograma</h5></a>
        
                </div>
                <div  class="col-sm c">
                    <img src="https://pumasdc.com.co//SITSS/resources/img/iconoBalon.png" alt="" style="float: inline-start; background-color: white; ">
                    <a href="" style="text-decoration: none; color: black;"><h5>Varios</h5></a>
        
                </div>
            </div>
          
    <div  class="col-sm card ">
        <h4 class="text">Bienvenid@ al sistema integrado de pumas</h4>
        <h1 class="text1">PUMAS TIC</h1>
    </div>
           </div>
        
              
        </body>
        </html>`
        ;
    }
}
customElements.define('my-option', MyElement)