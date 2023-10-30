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
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
           
           
          
        
        </head>
        <body> 
        
          <div class="row">
            <div class="col-sm">
            </div>
            <div class="col-sm">
               
              <div class="card card">
                <div class="card-header titulo">
                   <strong> PUMAS D.C</strong>
                </div>
                <div class="card-body form">
                    
                    <form class="formulario">
                       
                        <br>
                        <div class="form-group form " >
                            
                            <input type="text" id="usuario" name="usuario" placeholder="Usuario" required>
                        </div>
                        <br>
                        <br>
                        <div class="form-group form">
                    
                            <input type="text" id="contraseña" name="contraseña" placeholder="Password" required>
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="button">
                            <button type="submit" class="btn btn-primary boton">INGRESAR</button>
                        </div>
                        <br>
                        <br>
                        <a class="Link_reset-pass pass"><center>Olvido su contraseña?</center></a>
                        <a class="Link_reset-pass pass" href="dashboard.html">Dashboard</center></a>
                        <br>
                    </div>
                
                
                    </form>
                </div>
              </div>
        
           
          <div class="col-sm"></div>
        </div>
        </body>
        </html>`
        ;
    }
}
customElements.define('my-login', MyElement)