class ApiConnection{



  constructor(idUsuario,idNumUsuario,nit,primerNombre,segundoNombre,primerApellido,
      segundoApellido,numeroCelular,correoElectronico,resultadoFinal,DetalleProductos)
  {
      this.url="";
      this.ENDPOINT= 'https://autoliquidables.1cero1.com/api';
      this.ID_MUNICIPIO = "8320065687";
      this.idUsuario=idUsuario;
      this.idNumUsuario=idNumUsuario;
      this.primerNombre=primerNombre;
      this.segundoNombre=segundoNombre;
      this.primerApellido=primerApellido;
      this.segundoApellido=segundoApellido;
      this.numeroCelular=numeroCelular;
      this.correoElectronico=correoElectronico;
      this.resultadoFinal=resultadoFinal; 
      this.nit=nit;
      this.productos=[];
      this.DetalleProductos=DetalleProductos;
  }

    CrearTransaccion(){
       var windowReference = window.open();
      var header= new Headers();
      var raw = JSON.stringify(
          {
            "Pagador": {
              "Id_TipoDocumento": this.idUsuario,
              "Documento": this.idNumUsuario,
              "DetalleContribuyente": {
                "PrimerNombre": this.primerNombre,
                "SegundoNombre": this.segundoNombre,
                "PrimerApellido": this.primerApellido,
                "SegundoApellido": this.segundoApellido,
                "RazonSocial": this.nit
              },
              "Telefonos": [
                {
                  "Numero": this.numeroCelular
                }
              ],
              "Correos": [
                {
                  "Correo":this.correoElectronico
                }
              ]
            },
            "FechaCreacion": new Date(),
            "FechaVisita": new Date(),
            "ValorPagar": this.resultadoFinal,
            "OrigenPago": 1,
            "DetalleProducto": this.DetalleProductos,
            "Respuestas": []
          });

      header.append("Content-Type", "application/json");

      var requestedOpion = {
          method:'POST',
          headers:header,
          body:raw,
          redirect:'follow',
          mode:'cors'
      };

    fetch(this.ENDPOINT+"/Catedral/PagarCatedral",requestedOpion)
      .then((response) => response.json())
      .then((responseData) => {
        windowReference.location = responseData;
      })
      .catch(error => console.warn(error));
      }
      
  


async detallesProductos(){
  var datos= await fetch(this.ENDPOINT+"/Catedral/ProductosCatedral");
var Result = await datos.json();
  this.productos= Result.jRespuesta;
     
  }
  
      
    async   CrearTransaccion2(){
      var header= new Headers();
      var raw = JSON.stringify(
          {
            "Pagador": {
              "Id_TipoDocumento": this.idUsuario,
              "Documento": this.idNumUsuario,
              "DetalleContribuyente": {
                "PrimerNombre": this.primerNombre,
                "SegundoNombre": this.segundoNombre,
                "PrimerApellido": this.primerApellido,
                "SegundoApellido": this.segundoApellido,
                "RazonSocial": this.nit
              },
              "Telefonos": [
                {
                  "Numero": this.numeroCelular
                }
              ],
              "Correos": [
                {
                  "Correo":this.correoElectronico
                }
              ]
            },
            "FechaCreacion": new Date(),
            "FechaVisita": new Date(),
            "ValorPagar": this.resultadoFinal,
            "OrigenPago": 1,
            "DetalleProducto": this.DetalleProductos,
            "Respuestas": []
          });

      header.append("Content-Type", "application/json");

      var requestedOpion = {
          method:'POST',
          headers:header,
          body:raw,
          redirect:'follow',
          mode:'cors'
      };

    const result2 = await  fetch(this.ENDPOINT+"/Catedral/PagarCatedral",requestedOpion);
    const DATOS = await result2.json();
    return DATOS ;
    }



}
