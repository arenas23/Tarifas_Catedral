const btnNext = document.querySelector(".form .boton_formulario .despues");
const btnPrev = document.querySelector(".form .boton_formulario .antes");
const indicator = document.querySelector(".indicador .line span");
const indicatorItems = document.querySelectorAll(".indicador p");
const form = document.querySelectorAll(".form");
const allTab = document.querySelectorAll(".form .tab");
let i = 0;
var bandera;

allTab[i].classList.add("ver_formulario");
indicator.style.width = i;
indicatorItems[i].classList.add("active");

if (i === 0) {
    btnPrev.style.display = "none";
} else {
    btnPrev.style.display = "block";
}

btnNext.addEventListener("click", Validar);
//$('.despues').click(Validar);

async function Validar() {
    //validaciones

    const allInputPerTab = allTab[0].querySelectorAll("input");
    const allInputPertab2 = allTab[1].querySelectorAll("input");

    let ValorPagar;
    if (document.getElementById("mostrar_resultado_2").value == undefined) {
        ValorPagar = 0;
    } else {
        ValorPagar = parseInt(
            document
                .getElementById("mostrar_resultado_2")
                .value.replaceAll("$", "")
                .replaceAll(".", "")
        );
    }

    if (ValorPagar <= 0) {
        allInputPerTab[0].style = "border-color:var(--red) !important";
        allInputPerTab[1].style = "border-color:var(--red) !important";
        allInputPerTab[2].style = "border-color:var(--red) !important";
        allInputPerTab[3].style = "border-color:var(--red) !important";
        allInputPerTab[4].style = "border-color:var(--red) !important";
        allInputPerTab[5].style = "border-color:var(--red) !important";
        allInputPerTab[6].style = "border-color:var(--red) !important";
        allInputPerTab[7].style = "border-color:var(--red) !important";
        allInputPerTab[8].style = "border-color:var(--red) !important";
        allInputPerTab[9].style = "border-color:var(--red) !important";

        $("#myModal").modal("toggle");

        bandera = false;
        return false;
    } else {
        allInputPerTab[0].style.borderColor = "#ddd";
        allInputPerTab[1].style.borderColor = "#ddd";
        allInputPerTab[2].style.borderColor = "#ddd";
        allInputPerTab[3].style.borderColor = "#ddd";
        allInputPerTab[4].style.borderColor = "#ddd";
        allInputPerTab[5].style.borderColor = "#ddd";
        allInputPerTab[6].style.borderColor = "#ddd";
        allInputPerTab[7].style.borderColor = "#ddd";
        allInputPerTab[8].style.borderColor = "#ddd";
        allInputPerTab[9].style.borderColor = "#ddd";
        bandera = true;
    }
    //fin validaciones
    if (!validarDatos(allInputPertab2) && i > 0) {
        if (
            document.getElementById("input_numero_electronico").style.cssText ==
            "border-color: var(--red)  !important;"
        ) {
            $("#myModal2").modal("toggle");
        } else {
            $("#myModal1").modal("toggle");
        }

        return false;
    } else {
        allInputPertab2[0].style.borderColor = "#ddd";
        allInputPertab2[1].style.borderColor = "#ddd";
        allInputPertab2[2].style.borderColor = "#ddd";
        allInputPertab2[3].style.borderColor = "#ddd";
        allInputPertab2[4].style.borderColor = "#ddd";
        allInputPertab2[5].style.borderColor = "#ddd";
        allInputPertab2[7].style.borderColor = "#ddd";
    }
    if (i < 3) {
        i += 1;
    }

    if (i >= allTab.length) {
        i -= 1;
        if (btnNext.innerHTML == "Pagar") {
            let idUsuario = parseInt(
                document.getElementById("input_id_usuario").value
            );
            let idNumUsuario = document.getElementById(
                "input_id_num_usuario"
            ).value;
            let nit = document.getElementById("input_Razon_Social").value;
            let primerNombre = document.getElementById(
                "input_primer_nombre"
            ).value;
            let segundoNombre = document.getElementById(
                "input_segundo_nombre"
            ).value;
            let primerApellido = document.getElementById(
                "input_primer_apellido"
            ).value;
            let segundoApellido = document.getElementById(
                "input_segundo_apellido"
            ).value;
            let numeroCelular = document.getElementById(
                "input_numero_celular"
            ).value;
            let correoElectronico = document.getElementById(
                "input_numero_electronico"
            ).value;
            let total = parseInt(
                document
                    .getElementById("mostrar_resultado_2")
                    .value.replace(/[$.]/g, "")
            );

            let Detalle = await productos();
            let api = new ApiConnection(
                idUsuario,
                idNumUsuario,
                nit,
                primerNombre,
                segundoNombre,
                primerApellido,
                segundoApellido,
                numeroCelular,
                correoElectronico,
                total,
                Detalle
            );

            try {
                var DatosApi = await api.CrearTransaccion2();

                window.location.href = DatosApi;
            } catch (error) {
                alert(error);
            }
        }

        return false;
    } else {
        for (let j = 0; j < allTab.length; j++) {
            allTab[j].classList.remove("ver_formulario");
            indicatorItems[j].classList.remove("active");
        }

        for (let j = 0; j < i; j++) {
            indicatorItems[j].classList.add("active");
        }

        allTab[i].classList.add("ver_formulario");
        indicator.style.width = `${i * 50}%`;
        indicatorItems[i].classList.add("active");
    }

    if (i === 0) {
        btnPrev.style.display = "none";
    } else {
        btnPrev.style.display = "block";
    }

    if (i === allTab.length - 1) {
        btnNext.innerHTML = "Pagar";
    } else {
        mostrarRazonSocial();
        btnNext.innerHTML = "Siguiente";
    }
}

btnPrev.addEventListener("click", function () {
    i -= 1;

    for (let j = 0; j < allTab.length; j++) {
        allTab[j].classList.remove("ver_formulario");
        indicatorItems[j].classList.remove("active");
    }

    for (let j = 0; j < i; j++) {
        indicatorItems[j].classList.add("active");
    }

    allTab[i].classList.add("ver_formulario");
    indicator.style.width = `${i * 50}%`;
    indicatorItems[i].classList.add("active");

    if (i === 0) {
        btnPrev.style.display = "none";
    } else {
        btnPrev.style.display = "block";
    }

    if (i === allTab.length - 1) {
        btnNext.innerHTML = "Pagar";
    } else {
        mostrarRazonSocial();
        btnNext.innerHTML = "Siguiente";
    }
});

$("#input_id_usuario").value;

$(document).ready(function () {
    $("#input_id_usuario").on("change", mostrarRazonSocial);
});

function mostrarRazonSocial() {
    if (document.getElementById("input_id_usuario").value == 2) {
        $("#div_primer_nombre").hide();
        $("#div_primer_apellido").hide();
        $("#div_segundo_nombre").hide();
        $("#div_segundo_apellido").hide();
        $("#div_razonSocial").show();
    } else {
        $("#div_primer_nombre").show();
        $("#div_primer_apellido").show();
        $("#div_segundo_nombre").show();
        $("#div_segundo_apellido").show();
        $("#div_razonSocial").hide();
    }
}

function validarDatos(lista) {
    let bandera = true;
    let exp =
        /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    if (document.getElementById("input_id_usuario").value == 2) {
        if (document.getElementById("input_id_num_usuario").value == "") {
            bandera = false;
            lista[0].style = "border-color:var(--red) !important";
        } else {
            lista[0].style.borderColor = "#ddd";
        }

        if (document.getElementById("input_Razon_Social").value == "") {
            bandera = false;
            lista[1].style = "border-color:var(--red) !important";
        } else {
            lista[1].style.borderColor = "#ddd";
        }

        if (document.getElementById("input_numero_electronico").value == "") {
            bandera = false;
            lista[7].style = "border-color:var(--red) !important";
        } else {
            if (
                !exp.test(
                    document
                        .getElementById("input_numero_electronico")
                        .value.trim()
                )
            ) {
                lista[7].style = "border-color:var(--red) !important";
                bandera = false;
            } else {
                lista[7].style.borderColor = "#ddd";
            }
        }

        return bandera;
    } else {
        if (document.getElementById("input_id_num_usuario").value == "") {
            bandera = false;
            lista[0].style = "border-color:var(--red) !important";
        } else {
            lista[0].style.borderColor = "#ddd";
        }

        if (document.getElementById("input_primer_nombre").value == "") {
            bandera = false;
            lista[2].style = "border-color:var(--red) !important";
        } else {
            lista[2].style.borderColor = "#ddd";
        }

        if (document.getElementById("input_primer_apellido").value == "") {
            bandera = false;
            lista[4].style = "border-color:var(--red) !important";
        } else {
            lista[4].style.borderColor = "#ddd";
        }

        if (document.getElementById("input_segundo_nombre").value == "") {
            bandera = false;
            lista[3].style = "border-color:var(--red) !important";
        } else {
            lista[3].style.borderColor = "#ddd";
        }

        if (document.getElementById("input_segundo_apellido").value == "") {
            bandera = false;
            lista[5].style = "border-color:var(--red) !important";
        } else {
            lista[5].style.borderColor = "#ddd";
        }

        if (document.getElementById("input_numero_electronico").value == "") {
            bandera = false;
            lista[7].style = "border-color:var(--red) !important";
        } else {
            if (
                !exp.test(
                    document
                        .getElementById("input_numero_electronico")
                        .value.trim()
                )
            ) {
                lista[7].style = "border-color:var(--red) !important";
                bandera = false;
            } else {
                lista[7].style.borderColor = "#ddd";
            }
        }

        return bandera;
    }
}

async function productos() {
    let api = new ApiConnection("", "", "", "", "", "", "", "", "", "", []);
    await api.detallesProductos();
    var arrayProductos = [];

    let input_cantidad_69 = document.getElementById("input_cantidad_69").value;
    if (input_cantidad_69.trim() != "") {
        if (parseInt(input_cantidad_69.trim()) > 0) {
            let impuestos = []
            var productoTemp = api.productos.find(x => x.idProducto == "69");
    
            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * (parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100) )
                impuestos = [ {
                    idTipoImpuesto: productoTemp.jImpuestos[0].idTipoImpuesto,
                    dValorBase: productoTemp.jImpuestos[0].dValorBase,
                    dPorcentaje:parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                    dValorImpuesto: input_cantidad_69 * iva
                }]
            }

            arrayProductos.push(BuscarProducto(productoTemp, parseInt(input_cantidad_69), impuestos));
        }
    }
    let input_cantidad_74 = document.getElementById("input_cantidad_74").value;
    if (input_cantidad_74.trim() != "") {
        if (parseInt(input_cantidad_74.trim()) > 0) {
            let impuestos = []
            var productoTemp = api.productos.find(x => x.idProducto == "74");
    
            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [ {
                    idTipoImpuesto: productoTemp.jImpuestos[0].idTipoImpuesto,
                    dValorBase: productoTemp.jImpuestos[0].dValorBase,
                    dPorcentaje:parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                    dValorImpuesto: input_cantidad_74 * iva
                }]
            }

            arrayProductos.push(BuscarProducto(productoTemp, parseInt(input_cantidad_74), impuestos));
        }
    }

    let input_cantidad_296 =
        document.getElementById("input_cantidad_296").value;
    if (input_cantidad_296.trim() != "") {
        if (parseInt(input_cantidad_296.trim()) > 0) {
            let impuestos = []
            var productoTemp = api.productos.find(x => x.idProducto == "296");
    
            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [ {
                    idTipoImpuesto: productoTemp.jImpuestos[0].idTipoImpuesto,
                    dValorBase: productoTemp.jImpuestos[0].dValorBase,
                    dPorcentaje:parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                    dValorImpuesto: input_cantidad_296 * iva
                }]
            }

            arrayProductos.push(BuscarProducto(productoTemp, parseInt(input_cantidad_296), impuestos));
        }
    }

    let input_cantidad_297 =
        document.getElementById("input_cantidad_297").value;
    if (input_cantidad_297.trim() != "") {
        if (parseInt(input_cantidad_297.trim()) > 0) {
            let impuestos = [];
            var productoTemp = api.productos.find((x) => x.idProducto == "297");

            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100 )
                impuestos = [
                    {
                        idTipoImpuesto:productoTemp.jImpuestos[0].idTipoImpuesto,
                        dValorBase: productoTemp.jImpuestos[0].dValorBase,
                        dPorcentaje: parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                        dValorImpuesto:input_cantidad_297 * iva
                    }
                ];
            }
            arrayProductos.push(BuscarProducto(productoTemp,parseInt(input_cantidad_297),impuestos));
        }
    }

    let input_cantidad_293 =
        document.getElementById("input_cantidad_293").value;
    if (input_cantidad_293.trim() != "") {
        if (parseInt(input_cantidad_293.trim()) > 0) {
            let impuestos = [];
            var productoTemp = api.productos.find((x) => x.idProducto == "293");

            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [
                    {
                        idTipoImpuesto:productoTemp.jImpuestos[0].idTipoImpuesto,
                        dValorBase: productoTemp.jImpuestos[0].dValorBase,
                        dPorcentaje: parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                        dValorImpuesto:input_cantidad_293 * iva
                    }
                ];
            }

            arrayProductos.push(BuscarProducto(productoTemp,parseInt(input_cantidad_293),impuestos));
        }
    }

    //tafifa Descuento

    let input_cantidad_5 = document.getElementById("input_cantidad_5").value;
    if (input_cantidad_5.trim() != "") {
        if (parseInt(input_cantidad_5.trim()) > 0) {
            let impuestos = []
            var productoTemp = api.productos.find(x => x.idProducto == "5");
    
            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [ {
                    idTipoImpuesto: productoTemp.jImpuestos[0].idTipoImpuesto,
                    dValorBase: productoTemp.jImpuestos[0].dValorBase,
                    dPorcentaje:parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                    dValorImpuesto: input_cantidad_5 * iva
                }]
            }

            arrayProductos.push(BuscarProducto(productoTemp, parseInt(input_cantidad_5), impuestos));
        }
    }
    let input_cantidad_8 = document.getElementById("input_cantidad_8").value;
    if (input_cantidad_8.trim() != "") {
        if (parseInt(input_cantidad_8.trim()) > 0) {
            let impuestos = []
            var productoTemp = api.productos.find(x => x.idProducto == "8");
    
            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [ {
                    idTipoImpuesto: productoTemp.jImpuestos[0].idTipoImpuesto,
                    dValorBase: productoTemp.jImpuestos[0].dValorBase,
                    dPorcentaje:parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                    dValorImpuesto: input_cantidad_8 * iva
                }]
            }

            arrayProductos.push(BuscarProducto(productoTemp, parseInt(input_cantidad_8), impuestos));
        }
    }

    let input_cantidad_294 =
        document.getElementById("input_cantidad_294").value;
    if (input_cantidad_294.trim() != "") {
        if (parseInt(input_cantidad_294.trim()) > 0) {
            let impuestos = []
            var productoTemp = api.productos.find(x => x.idProducto == "294");
    
            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [{
                    idTipoImpuesto: productoTemp.jImpuestos[0].idTipoImpuesto,
                    dValorBase: productoTemp.jImpuestos[0].dValorBase,
                    dPorcentaje:parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                    dValorImpuesto: input_cantidad_294 * iva
                }]
            }

            arrayProductos.push(BuscarProducto(productoTemp, parseInt(input_cantidad_294), impuestos));
        }
    }
    let input_cantidad_295 =
        document.getElementById("input_cantidad_295").value;
    if (input_cantidad_295.trim() != "") {
        if (parseInt(input_cantidad_295.trim()) > 0) {
            let impuestos = []
            var productoTemp = api.productos.find(x => x.idProducto == "295");
    
            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [ {
                    idTipoImpuesto: productoTemp.jImpuestos[0].idTipoImpuesto,
                    dValorBase: productoTemp.jImpuestos[0].dValorBase,
                    dPorcentaje: parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                    dValorImpuesto: input_cantidad_295 * iva
                }]
            }

            arrayProductos.push(BuscarProducto(productoTemp, parseInt(input_cantidad_295),impuestos));
        }
    }

    let input_cantidad_292 =
        document.getElementById("input_cantidad_292").value;
    if (input_cantidad_292.trim() != "") {
        if (parseInt(input_cantidad_292.trim()) > 0) {
            let impuestos = [];
            var productoTemp = api.productos.find((x) => x.idProducto == "292");

            if (productoTemp.jImpuestos.length != 0) {
                let iva =Math.round( productoTemp.jImpuestos[0].dValorBase * parseInt(productoTemp.jImpuestos[0].dPorcentaje)/100)
                impuestos = [
                    {
                        idTipoImpuesto:productoTemp.jImpuestos[0].idTipoImpuesto,
                        dValorBase: productoTemp.jImpuestos[0].dValorBase,
                        dPorcentaje: parseInt( productoTemp.jImpuestos[0].dPorcentaje),
                        dValorImpuesto:input_cantidad_292 * iva
                    }
                ];
            }

            arrayProductos.push(BuscarProducto(productoTemp,parseInt(input_cantidad_292),impuestos));
        }
    }

    return arrayProductos;
}
function BuscarProducto(producto, catidad, impuestos) {
    var producto = {
        idProducto: parseInt(producto.idProducto),
        sNombreProducto: producto.sNombreProducto,
        sDescripcionProducto: producto.sDescripcionProducto,
        nCantidad: catidad,
        dPrecioInicial: catidad * parseInt(producto.dPrecio),

        dDescuento: 0,
        dPrecioFinal: catidad * parseInt(producto.dPrecio),
        jImpuestos: [],
    };

    if (impuestos.length != 0) {
        producto.jImpuestos = impuestos;
    }

    return producto;
}
