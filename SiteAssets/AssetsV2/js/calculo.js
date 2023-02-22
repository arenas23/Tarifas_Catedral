//formatear numero a moneda colombiana
const formato_pesoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

let api = new ApiConnection("","","","","","","","","","",[]);
 api.detallesProductos();

////////////////////// 

function multiplicar(precio,dato_input){
    rta_multiplicacion = precio * dato_input;
    return rta_multiplicacion;
}

function multiplicar(precio, dato_input,iva) {
    precio = precio + iva
    let rta_multiplicacion = precio * dato_input;
    return rta_multiplicacion;

}

 function calcular(){
 
    const producto69 = api.productos.find(x => x.idProducto == "69")
    const producto74 = api.productos.find(x => x.idProducto == "74")
    const producto5 = api.productos.find(x => x.idProducto == "5")
    const producto8 = api.productos.find(x => x.idProducto == "8")
    const producto296 = api.productos.find(x => x.idProducto == "296")
    const producto297 = api.productos.find(x => x.idProducto == "297")
    const producto294 = api.productos.find(x => x.idProducto == "294")
    const producto295 = api.productos.find(x => x.idProducto == "295")
    const producto293 = api.productos.find(x => x.idProducto == "293")
     const producto292 = api.productos.find(x => x.idProducto == "292")
     
   //Estrangero Basic
    const basic_adulto_plena = parseInt(producto69.dPrecio);//77500;
    const base_iva_69 = producto69.jImpuestos.length !== 0 ? parseInt(producto69.jImpuestos[0].dValorBase) : 0
    const porcentaje_iva_69 = base_iva_69 != 0 ? parseInt(producto294.jImpuestos[0].dPorcentaje) : 0
    const iva_69 = base_iva_69 != 0 ? parseInt( Math.round(base_iva_69 * (porcentaje_iva_69 / 100 ))) : 0
      
   const basic_adulto_mayor_plena =parseInt(producto74.dPrecio);// 66500;
   const base_iva_74 = producto74.jImpuestos.length !== 0 ? parseInt(producto74.jImpuestos[0].dValorBase) : 0
   const porcentaje_iva_74 = base_iva_74 != 0 ? parseInt(producto74.jImpuestos[0].dPorcentaje) : 0
   const iva_74 = base_iva_74 != 0 ? parseInt( Math.round(base_iva_74 * (porcentaje_iva_74 / 100 ))) : 0
    
   //Colombiano Basic
     const basic_adulto_descuento = parseInt(producto5.dPrecio);//49500;
     const base_iva_5 = producto5.jImpuestos.length !== 0 ? parseInt(producto5.jImpuestos[0].dValorBase) : 0
     const porcentaje_iva_5 = base_iva_5 != 0 ? parseInt(producto5.jImpuestos[0].dPorcentaje) : 0
     const iva_5 = base_iva_5 != 0 ? parseInt( Math.round(base_iva_5 * (porcentaje_iva_5 / 100 ))) : 0
      
     const basic_adulto_mayor_descuento = parseInt(producto8.dPrecio);//40500;
     const base_iva_8 = producto8.jImpuestos.length !== 0 ? parseInt(producto8.jImpuestos[0].dValorBase) : 0
     const porcentaje_iva_8 = base_iva_8 != 0 ? parseInt(producto8.jImpuestos[0].dPorcentaje) : 0
     const iva_8 = base_iva_8 != 0 ? parseInt( Math.round(base_iva_8 * (porcentaje_iva_8 / 100 ))) : 0
      
   
   
   //Estrangero Standard
     const standard_adulto_plena = parseInt(producto296.dPrecio);//95500;
     const base_iva_296 = producto296.jImpuestos.length !== 0 ? parseInt(producto296.jImpuestos[0].dValorBase) : 0
     const porcentaje_iva_296 = base_iva_296 != 0 ? parseInt(producto296.jImpuestos[0].dPorcentaje) : 0
     const iva_296 = base_iva_296 != 0 ? parseInt( Math.round(base_iva_296 * (porcentaje_iva_296 / 100 ))) : 0
      
     const standard_adulto_mayor_plena = parseInt(producto297.dPrecio);//84000;
     const base_iva_297 = producto297.jImpuestos.length !== 0 ? parseInt(producto297.jImpuestos[0].dValorBase) : 0
     const porcentaje_iva_297 = base_iva_297 != 0 ? parseInt(producto297.jImpuestos[0].dPorcentaje) : 0
     const iva_297 = base_iva_297 != 0 ? parseInt( Math.round(base_iva_297 * (porcentaje_iva_297 / 100 ))) : 0
      
   
   //Colombiano Standard
    const standard_adulto_descuento = parseInt(producto294.dPrecio);//67500;
    const base_iva_294 = producto294.jImpuestos.length !== 0 ? parseInt(producto294.jImpuestos[0].dValorBase) : 0
    const porcentaje_iva_294 = base_iva_294 != 0 ? parseInt(producto294.jImpuestos[0].dPorcentaje) : 0
    const iva_294 = base_iva_294 != 0 ? parseInt( Math.round(base_iva_294 * (porcentaje_iva_294 / 100 ))) : 0
     

    const standard_adulto_mayor_descuento = parseInt(producto295.dPrecio);//58000;
    const base_iva_295=producto295.jImpuestos.length !== 0 ? parseInt( producto295.jImpuestos[0].dValorBase ) : 0
    const porcentaje_iva_295 = base_iva_295 != 0 ? parseInt( producto295.jImpuestos[0].dPorcentaje) : 0
    const iva_295 = base_iva_295 != 0 ? parseInt( Math.round(base_iva_295 * (porcentaje_iva_295 / 100 ))) : 0
   //Estrangero Standard
    const premium_adulto_plena = parseInt(producto293.dPrecio);//113000;
    const base_iva_plena = producto293.jImpuestos.length !== 0 ? parseInt(producto293.jImpuestos[0].dValorBase) : 0
    const porcentaje_iva_plena = base_iva_plena != 0 ? parseInt(producto293.jImpuestos[0].dPorcentaje) : 0
    const iva_plena = base_iva_plena != 0 ? parseInt(Math.round(base_iva_plena * (porcentaje_iva_plena / 100))) : 0
     
   //Colombiano Standard
     const premium_adulto_descuento = parseInt(producto292.dPrecio);//84000;
     const base_iva_descuento = producto292.jImpuestos.length !== 0 ? parseInt(producto292.jImpuestos[0].dValorBase) : 0
     const porcentaje_iva_descuento = base_iva_descuento != 0 ? parseInt(producto292.jImpuestos[0].dPorcentaje) : 0
     const iva_descuento = base_iva_descuento != 0 ? parseInt(Math.round( base_iva_descuento * (porcentaje_iva_descuento / 100))) : 0
    // tarifa Plena

     let tarifa_plena_00 = document.getElementById('input_cantidad_69').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_69').value)
     let total_iva_69 = iva_69 * tarifa_plena_00

     let tarifa_plena_01 = document.getElementById('input_cantidad_74').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_74').value)
     let total_iva_74 = iva_74 * tarifa_plena_01 

     let tarifa_plena_10 = document.getElementById('input_cantidad_296').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_296').value)
     let total_iva_296 = iva_296 * tarifa_plena_10

     let tarifa_plena_11 = document.getElementById('input_cantidad_297').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_297').value)
     let total_iva_297 = iva_297 * tarifa_plena_11

     let tarifa_plena_20 =  document.getElementById('input_cantidad_293').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_293').value)
     let total_iva_plena = iva_plena * tarifa_plena_20

    //tafifa Descuento

     let tarifa_descuento_00 = document.getElementById('input_cantidad_5').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_5').value)
     let total_iva_5 = iva_5 * tarifa_descuento_00

     let tarifa_descuento_01 = document.getElementById('input_cantidad_8').value == "" ? 0 :  parseInt( document.getElementById('input_cantidad_8').value)
     let total_iva_8 = iva_8 * tarifa_descuento_01

     let tarifa_descuento_10 = document.getElementById('input_cantidad_294').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_294').value)
     let total_iva_294 = iva_294 * tarifa_descuento_10

     let tarifa_descuento_11 = document.getElementById('input_cantidad_295').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_295').value)
     let total_iva_295 = iva_295 * tarifa_descuento_11

     let tarifa_descuento_20 = document.getElementById('input_cantidad_292').value == "" ? 0 : parseInt( document.getElementById('input_cantidad_292').value)
     let total_iva_descuento = iva_descuento * tarifa_descuento_20


    //multiplicar

    // multiplicar cada valor tarifa plena
    let dato_uno = multiplicar(basic_adulto_plena,tarifa_plena_00, iva_69);
    let dato_dos = multiplicar(basic_adulto_mayor_plena,tarifa_plena_01,iva_74);
    let dato_tres = multiplicar(standard_adulto_plena,tarifa_plena_10,iva_296);
    let dato_cuatro = multiplicar(standard_adulto_mayor_plena,tarifa_plena_11,iva_297);
    let dato_cinco = multiplicar(premium_adulto_plena,tarifa_plena_20,iva_plena);

    // multiplicar cada valor tarifa descuento
    let dato_seis = multiplicar(basic_adulto_descuento,tarifa_descuento_00,iva_5);
    let dato_siete = multiplicar(basic_adulto_mayor_descuento,tarifa_descuento_01, iva_8);
    let dato_ocho = multiplicar(standard_adulto_descuento,tarifa_descuento_10, iva_294);
    let dato_nueve = multiplicar(standard_adulto_mayor_descuento,tarifa_descuento_11, iva_295);
    let dato_diez = multiplicar(premium_adulto_descuento,tarifa_descuento_20,iva_descuento);

    // sumando resultados
    let suma = dato_uno + dato_dos + dato_tres + dato_cuatro + dato_cinco + dato_seis + dato_siete + dato_ocho + dato_nueve + dato_diez;

    let = resultado_final = formato_COP(suma)

    document.getElementById("mostrar_resultado").innerHTML = resultado_final;
    document.getElementById("mostrar_resultado_2").value = resultado_final;
    document.getElementById("mostrar_resultado_2").innerHTML ="COP" +resultado_final;

   
    /// para mostrar en Resumen

    ////coordenada formulario extranjeros basic 00

    if(tarifa_plena_00 > 0){
        document.getElementById("mostrar_plan_00").innerHTML = 'Tarifa Plena Basic Adulto';
        document.getElementById("mostrar_cantidad_00").innerHTML =  tarifa_plena_00;
        document.getElementById("mostrar_valor_parcial_00").innerHTML = formato_COP(basic_adulto_plena * tarifa_plena_00)
        document.getElementById("mostrar_base_00").innerHTML = formato_COP(base_iva_69)
        document.getElementById("mostrar_iva_00").innerHTML = formato_COP(total_iva_69)
        document.getElementById("mostrar_total_00").innerHTML = formato_COP(dato_uno)
    }

    if(tarifa_plena_00 == 0){
        document.getElementById("mostrar_plan_00").style.display = "none";
        document.getElementById("mostrar_cantidad_00").style.display = "none";
        document.getElementById("mostrar_valor_parcial_00").style.display = "none";
        document.getElementById("mostrar_base_00").style.display = "none";
        document.getElementById("mostrar_iva_00").style.display = "none";
        document.getElementById("mostrar_total_00").style.display = "none";

    }else{
        document.getElementById("mostrar_plan_00").style.display = "block";
        document.getElementById("mostrar_cantidad_00").style.display = "block";
        document.getElementById("mostrar_valor_parcial_00").style.display = "block";
        document.getElementById("mostrar_base_00").style.display = "block";
        document.getElementById("mostrar_iva_00").style.display = "block";
        document.getElementById("mostrar_total_00").style.display = "block";
    }

    ////coordenada formulario extranjeros basic 01

    if(tarifa_plena_01 > 0){
        document.getElementById("mostrar_plan_01").innerHTML = 'Tarifa Plena Basic Niño / Adulto Mayor';
        document.getElementById("mostrar_cantidad_01").innerHTML =  tarifa_plena_01;
        document.getElementById("mostrar_valor_parcial_01").innerHTML = formato_COP( basic_adulto_mayor_plena * tarifa_plena_01)
        document.getElementById("mostrar_base_01").innerHTML = formato_COP(base_iva_74)
        document.getElementById("mostrar_iva_01").innerHTML = formato_COP(total_iva_74)
        document.getElementById("mostrar_total_01").innerHTML = formato_COP(dato_dos)
    }

    if(tarifa_plena_01 == 0){
        document.getElementById("mostrar_plan_01").style.display = "none";
        document.getElementById("mostrar_cantidad_01").style.display = "none";
        document.getElementById("mostrar_valor_parcial_01").style.display = "none";
        document.getElementById("mostrar_base_01").style.display = "none";
        document.getElementById("mostrar_iva_01").style.display = "none";
        document.getElementById("mostrar_total_01").style.display = "none";

    }else{
        document.getElementById("mostrar_plan_01").style.display = "block";
        document.getElementById("mostrar_cantidad_01").style.display = "block";
        document.getElementById("mostrar_valor_parcial_01").style.display = "block";
        document.getElementById("mostrar_base_01").style.display = "block";
        document.getElementById("mostrar_iva_01").style.display = "block";
        document.getElementById("mostrar_total_01").style.display = "block";
    }


    ////coordenada formulario extranjeros standard 10

    if(tarifa_plena_10 > 0){
        document.getElementById("mostrar_plan_10").innerHTML = 'Tarifa Plena Standard Adulto';
        document.getElementById("mostrar_cantidad_10").innerHTML =  tarifa_plena_10;
        document.getElementById("mostrar_valor_parcial_10").innerHTML = formato_COP( standard_adulto_plena * tarifa_plena_10)
        document.getElementById("mostrar_base_10").innerHTML = formato_COP(base_iva_296)
        document.getElementById("mostrar_iva_10").innerHTML = formato_COP(total_iva_296)
        document.getElementById("mostrar_total_10").innerHTML = formato_COP(dato_tres)
    }

    if(tarifa_plena_10 == 0){
        document.getElementById("mostrar_plan_10").style.display = "none";
        document.getElementById("mostrar_cantidad_10").style.display = "none";
        document.getElementById("mostrar_valor_parcial_10").style.display = "none";
        document.getElementById("mostrar_base_10").style.display = "none";
        document.getElementById("mostrar_iva_10").style.display = "none";
        document.getElementById("mostrar_total_10").style.display = "none";

    }else{
        document.getElementById("mostrar_plan_10").style.display = "block";
        document.getElementById("mostrar_cantidad_10").style.display = "block";
        document.getElementById("mostrar_valor_parcial_10").style.display = "block";
        document.getElementById("mostrar_base_10").style.display = "block";
        document.getElementById("mostrar_iva_10").style.display = "block";
        document.getElementById("mostrar_total_10").style.display = "block";
    }

    ////coordenada formulario extranjeros standard 11

    if(tarifa_plena_11 > 0){
        document.getElementById("mostrar_plan_11").innerHTML = 'Tarifa Plena Standard Niño / Adulto Mayor';
        document.getElementById("mostrar_cantidad_11").innerHTML =  tarifa_plena_11;
        document.getElementById("mostrar_valor_parcial_11").innerHTML = formato_COP( standard_adulto_mayor_plena * tarifa_plena_11)
        document.getElementById("mostrar_base_11").innerHTML = formato_COP(base_iva_297)
        document.getElementById("mostrar_iva_11").innerHTML = formato_COP(total_iva_297)
        document.getElementById("mostrar_total_11").innerHTML = formato_COP(dato_cuatro)
    }

    if(tarifa_plena_11 == 0){
        document.getElementById("mostrar_plan_11").style.display = "none";
        document.getElementById("mostrar_cantidad_11").style.display = "none";
        document.getElementById("mostrar_valor_parcial_11").style.display = "none";
        document.getElementById("mostrar_base_11").style.display = "none";
        document.getElementById("mostrar_iva_11").style.display = "none";
        document.getElementById("mostrar_total_11").style.display = "none";

    }else{
        document.getElementById("mostrar_plan_11").style.display = "block";
        document.getElementById("mostrar_cantidad_11").style.display = "block";
        document.getElementById("mostrar_valor_parcial_11").style.display = "block";
        document.getElementById("mostrar_base_11").style.display = "block";
        document.getElementById("mostrar_iva_11").style.display = "block";
        document.getElementById("mostrar_total_11").style.display = "block";
    }

    ////coordenada formulario extranjeros premium 20

    if(tarifa_plena_20 > 0){
        document.getElementById("mostrar_plan_20").innerHTML = 'Tarifa Plena Premium Adulto';
        document.getElementById("mostrar_cantidad_20").innerHTML =  tarifa_plena_20;
        document.getElementById("mostrar_valor_parcial_20").innerHTML = formato_COP(premium_adulto_plena * tarifa_plena_20);
        document.getElementById("mostrar_base_20").innerHTML = formato_COP(base_iva_plena)
        document.getElementById("mostrar_iva_20").innerHTML = formato_COP(total_iva_plena)
        document.getElementById("mostrar_total_20").innerHTML = formato_COP(dato_cinco)
    }

    if(tarifa_plena_20 == 0){
        document.getElementById("mostrar_plan_20").style.display = "none";
        document.getElementById("mostrar_cantidad_20").style.display = "none";
        document.getElementById("mostrar_valor_parcial_20").style.display = "none";
        document.getElementById("mostrar_base_20").style.display = "none";
        document.getElementById("mostrar_iva_20").style.display = "none";
        document.getElementById("mostrar_total_20").style.display = "none";
    }else{
        document.getElementById("mostrar_plan_20").style.display = "block";
        document.getElementById("mostrar_cantidad_20").style.display = "block";
        document.getElementById("mostrar_valor_parcial_20").style.display = "block";
        document.getElementById("mostrar_base_20").style.display = "block";
        document.getElementById("mostrar_iva_20").style.display = "block";
        document.getElementById("mostrar_total_20").style.display = "block";
    }


////// Tarifa Descuento

    ////coordenada formulario descuento basic 00

    if(tarifa_descuento_00 > 0){
        document.getElementById("mostrar_plan2_00").innerHTML = 'Tarifa Descuento Basic Adulto';
        document.getElementById("mostrar_cantidad2_00").innerHTML =  tarifa_descuento_00;
        document.getElementById("mostrar_valor_parcial2_00").innerHTML = formato_COP(basic_adulto_descuento * tarifa_descuento_00)
        document.getElementById("mostrar_base2_00").innerHTML = formato_COP(base_iva_5)
        document.getElementById("mostrar_iva2_00").innerHTML = formato_COP(total_iva_5)
        document.getElementById("mostrar_total2_00").innerHTML = formato_COP(dato_seis)

    }

    if(tarifa_descuento_00 == 0){
        document.getElementById("mostrar_plan2_00").style.display = "none";
        document.getElementById("mostrar_cantidad2_00").style.display = "none";
        document.getElementById("mostrar_valor_parcial2_00").style.display = "none";
        document.getElementById("mostrar_base2_00").style.display = "none";
        document.getElementById("mostrar_iva2_00").style.display = "none";
        document.getElementById("mostrar_total2_00").style.display = "none";

    }else{
        document.getElementById("mostrar_plan2_00").style.display = "block";
        document.getElementById("mostrar_cantidad2_00").style.display = "block";
        document.getElementById("mostrar_valor_parcial2_00").style.display = "block";
        document.getElementById("mostrar_base2_00").style.display = "block";
        document.getElementById("mostrar_iva2_00").style.display = "block";
        document.getElementById("mostrar_total2_00").style.display = "block";
    }

    ////coordenada formulario descuento basic 01  producto8

    if(tarifa_descuento_01 > 0){
        document.getElementById("mostrar_plan2_01").innerHTML = 'Tarifa Descuento Basic Niño / Adulto Mayor';
        document.getElementById("mostrar_cantidad2_01").innerHTML =  tarifa_descuento_01;
        document.getElementById("mostrar_valor_parcial2_01").innerHTML = formato_COP(basic_adulto_mayor_descuento * tarifa_descuento_01)
        document.getElementById("mostrar_base2_01").innerHTML = formato_COP(base_iva_8)
        document.getElementById("mostrar_iva2_01").innerHTML = formato_COP(total_iva_8)
        document.getElementById("mostrar_total2_01").innerHTML = formato_COP(dato_siete)

    }

    if(tarifa_descuento_01 == 0){
        document.getElementById("mostrar_plan2_01").style.display = "none";
        document.getElementById("mostrar_cantidad2_01").style.display = "none";
        document.getElementById("mostrar_valor_parcial2_01").style.display = "none";
        document.getElementById("mostrar_base2_01").style.display = "none";
        document.getElementById("mostrar_iva2_01").style.display = "none";
        document.getElementById("mostrar_total2_01").style.display = "none";

    }else{
        document.getElementById("mostrar_plan2_01").style.display = "block";
        document.getElementById("mostrar_cantidad2_01").style.display = "block";
        document.getElementById("mostrar_valor_parcial2_01").style.display = "block";
        document.getElementById("mostrar_base2_01").style.display = "block";
        document.getElementById("mostrar_iva2_01").style.display = "block";
        document.getElementById("mostrar_total2_01").style.display = "block";
    }


    ////coordenada formulario descuento standard 10

    if(tarifa_descuento_10 > 0){
        document.getElementById("mostrar_plan2_10").innerHTML = 'Tarifa Descuento Standard Adulto';
        document.getElementById("mostrar_cantidad2_10").innerHTML =  tarifa_descuento_10;
        document.getElementById("mostrar_valor_parcial2_10").innerHTML =formato_COP( standard_adulto_descuento * tarifa_descuento_10);
        document.getElementById("mostrar_base2_10").innerHTML = formato_COP(base_iva_294)
        document.getElementById("mostrar_iva2_10").innerHTML = formato_COP(total_iva_294)
        document.getElementById("mostrar_total2_10").innerHTML = formato_COP(dato_ocho)
    }

    if(tarifa_descuento_10 == 0){
        document.getElementById("mostrar_plan2_10").style.display = "none";
        document.getElementById("mostrar_cantidad2_10").style.display = "none";
        document.getElementById("mostrar_valor_parcial2_10").style.display = "none";
        document.getElementById("mostrar_base2_10").style.display = "none";
        document.getElementById("mostrar_iva2_10").style.display = "none";
        document.getElementById("mostrar_total2_10").style.display = "none";

    }else{
        document.getElementById("mostrar_plan2_10").style.display = "block";
        document.getElementById("mostrar_cantidad2_10").style.display = "block";
        document.getElementById("mostrar_valor_parcial2_10").style.display = "block";
        document.getElementById("mostrar_base2_10").style.display = "block";
        document.getElementById("mostrar_iva2_10").style.display = "block";
        document.getElementById("mostrar_total2_10").style.display = "block";
    }

    ////coordenada formulario descuento standard 11

    if(tarifa_descuento_11 > 0){
        document.getElementById("mostrar_plan2_11").innerHTML = 'Tarifa Descuento Standard Niño / Adulto Mayor';
        document.getElementById("mostrar_cantidad2_11").innerHTML =  tarifa_descuento_11;
        document.getElementById("mostrar_valor_parcial2_11").innerHTML = formato_COP( standard_adulto_mayor_descuento * tarifa_descuento_11)
        document.getElementById("mostrar_base2_11").innerHTML = formato_COP(base_iva_295)
        document.getElementById("mostrar_iva2_11").innerHTML = formato_COP(total_iva_295)
        document.getElementById("mostrar_total2_11").innerHTML = formato_COP(dato_nueve)
    }

    if(tarifa_descuento_11 == 0){
        document.getElementById("mostrar_plan2_11").style.display = "none";
        document.getElementById("mostrar_cantidad2_11").style.display = "none";
        document.getElementById("mostrar_valor_parcial2_11").style.display = "none";
        document.getElementById("mostrar_base2_11").style.display = "none";
        document.getElementById("mostrar_iva2_11").style.display = "none";
        document.getElementById("mostrar_total2_11").style.display = "none";

    }else{
        document.getElementById("mostrar_plan2_11").style.display = "block";
        document.getElementById("mostrar_cantidad2_11").style.display = "block";
        document.getElementById("mostrar_valor_parcial2_11").style.display = "block";
        document.getElementById("mostrar_base2_11").style.display = "block";
        document.getElementById("mostrar_iva2_11").style.display = "block";
        document.getElementById("mostrar_total2_11").style.display = "block";
    }

    ////coordenada formulario descuento premium 20

    if(tarifa_descuento_20 > 0){
        document.getElementById("mostrar_plan2_20").innerHTML = 'Tarifa Descuento Premium Adulto';
        document.getElementById("mostrar_cantidad2_20").innerHTML =  tarifa_descuento_20;
        document.getElementById("mostrar_valor_parcial2_20").innerHTML = formato_COP( premium_adulto_descuento * tarifa_descuento_20);
        document.getElementById("mostrar_base2_20").innerHTML = formato_COP(base_iva_descuento)
        document.getElementById("mostrar_iva2_20").innerHTML = formato_COP(total_iva_descuento)
        document.getElementById("mostrar_total2_20").innerHTML = formato_COP(dato_diez)
    }

    if(tarifa_descuento_20 == 0){
        document.getElementById("mostrar_plan2_20").style.display = "none";
        document.getElementById("mostrar_cantidad2_20").style.display = "none";
        document.getElementById("mostrar_valor_parcial2_20").style.display = "none";
        document.getElementById("mostrar_base2_20").style.display = "none";
        document.getElementById("mostrar_iva2_20").style.display = "none";
        document.getElementById("mostrar_total2_20").style.display = "none";

    }else{
        document.getElementById("mostrar_plan2_20").style.display = "block";
        document.getElementById("mostrar_cantidad2_20").style.display = "block";
        document.getElementById("mostrar_valor_parcial2_20").style.display = "block";
        document.getElementById("mostrar_base2_20").style.display = "block";
        document.getElementById("mostrar_iva2_20").style.display = "block";
        document.getElementById("mostrar_total2_20").style.display = "block";
    }
         
}

document.querySelectorAll('.si_input_es_cero').innerHTML = "Hello World!";         

//funcion para formatear resultado total a moneda colombiana

function formato_COP(numero_para_convertir){
    let resultado_con_formato_COP =  formato_pesoCOP.format(numero_para_convertir);
    return resultado_con_formato_COP;
}

function capturar(){

    let idUsuario = document.getElementById('input_id_usuario').value;
    let tipo_documento = '';

    let idNumUsuario = document.getElementById('input_id_num_usuario').value;
    let razonSocial = document.getElementById('input_Razon_Social').value;
    let primerNombre = document.getElementById('input_primer_nombre').value;
    let segundoNombre = document.getElementById('input_segundo_nombre').value;
    let primerApellido = document.getElementById('input_primer_apellido').value;
    let segundoApellido = document.getElementById('input_segundo_apellido').value;
    let numeroCelular = document.getElementById('input_numero_celular').value;
    let correoElectronico = document.getElementById('input_numero_electronico').value;



    switch (idUsuario) {
        case '2':
            tipo_documento = 'NIT';
            
          break;

        case '1':
            tipo_documento = 'Cédula Ciudadanía';

          break;
        
        case '3':
            tipo_documento = 'Documento Identidad';
            break;

        case '4':
            tipo_documento = 'Cédula Estranjería';
            break;

        case '5':
            tipo_documento = 'Pasaporte';
            break;
        default:
            tipo_documento = '';
            break;
      }


    document.getElementById("id_tipo_usuario").innerHTML = tipo_documento;
    document.getElementById("id_num_usuario").innerHTML = idNumUsuario;
    document.getElementById("razon_social").innerHTML= razonSocial;
    document.getElementById("primer_nombre").innerHTML = primerNombre;
    document.getElementById("segundo_nombre").innerHTML = segundoNombre;
    document.getElementById("primer_apellido").innerHTML = primerApellido;
    document.getElementById("segundo_apellido").innerHTML = segundoApellido;
    document.getElementById("numero_celular").innerHTML = numeroCelular;
    document.getElementById("correo_electronico").innerHTML = correoElectronico;

    if(tipo_documento=="NIT"){
        $("#RprimerNombre").hide();
      $("#RsegundoNombre").hide();
      $("#RprimerApellido").hide();
      $("#RsegundoApellido").hide();
      $("#RrazonSocial").show();
      }else{
        $("#RprimerNombre").show();
      $("#RsegundoNombre").show();
      $("#RprimerApellido").show();
      $("#RsegundoApellido").show();
      $("#RrazonSocial").hide();
      }
}

function validarPersona(val){

    val.value = val.value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');

   /* document.getElementById('input_plena_00').value= document.getElementById('input_plena_00').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
    document.getElementById('input_plena_01').value=document.getElementById('input_plena_01').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');

    document.getElementById('input_plena_10').value=document.getElementById('input_plena_10').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
    document.getElementById('input_plena_11').value=document.getElementById('input_plena_11').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');

    document.getElementById('input_plena_20').value= document.getElementById('input_plena_20').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
    //tafifa Descuento

    document.getElementById('input_descuento_00').value=document.getElementById('input_descuento_00').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
    document.getElementById('input_descuento_01').value=document.getElementById('input_descuento_01').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');

    document.getElementById('input_descuento_10').value=document.getElementById('input_descuento_10').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
    document.getElementById('input_descuento_11').value=document.getElementById('input_descuento_11').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');

    document.getElementById('input_descuento_20').value=document.getElementById('input_descuento_20').value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
 
*/
}

  function hacerScroll(){
    $("#s4-workspace").animate({ scrollTop: 1500 }, 1000);
  }
  




 


