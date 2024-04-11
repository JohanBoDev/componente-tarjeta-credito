let numero_tarjeta_prede = document.getElementById('numero-tarjeta');
let numero_tarjeta_cliente = document.getElementById('numero-cliente');
let nombre_cliente = document.getElementById('nombre-cliente');
let nombre_tarjeta = document.getElementById('nombre-tarjeta');
let mes_cliente = document.getElementById('mes-cliente');
let año_cliente = document.getElementById('año-cliente');
let mes_tarjeta = document.getElementById('mes-tarjeta');
let año_tarjeta = document.getElementById('año-tarjeta');
let cvv_cliente = document.getElementById('cvv-cliente');
let cvv_tarjeta = document.getElementById('cvv-tarjeta');
let confirmar = document.getElementById('confirmar');
let modal_exito = document.getElementById('modal-exito');
let modal_datos = document.getElementById('modal-datos');
let volver = document.getElementById('volver');


numero_tarjeta_cliente.addEventListener('input', function() {
    numero_tarjeta_prede.innerHTML = numero_tarjeta_cliente.value;

    if (numero_tarjeta_cliente.value.length == 0) {
        numero_tarjeta_prede.innerHTML = '#### #### #### ####';
    }
    else if (numero_tarjeta_cliente.value.length > 16) {
        numero_tarjeta_prede.innerHTML = 'Numero de tarjeta incorrecto';
        numero_tarjeta_prede.style.fontSize = '14px';
    }

    if (numero_tarjeta_cliente.value.length > 0) {
        let numero_tarjeta = numero_tarjeta_cliente.value;
        let numero_tarjeta_separado = numero_tarjeta.match(/.{1,4}/g);
        numero_tarjeta_prede.innerHTML = numero_tarjeta_separado.join(' ');
    }
});

nombre_cliente.addEventListener('input', function() {
    nombre_tarjeta.innerHTML = nombre_cliente.value;

    if (nombre_cliente.value.length == 0) {
        nombre_tarjeta.innerHTML = 'Nombre del titular';
        nombre_tarjeta.style.fontSize = '10px';
    }
    else{
        nombre_tarjeta.innerHTML = nombre_cliente.value;
        nombre_tarjeta.style.fontSize = '14px';
    }

});

mes_cliente.addEventListener('input', function() {
    mes_tarjeta.innerHTML = mes_cliente.value;

    if (mes_cliente.value.length == 0) {
        mes_tarjeta.innerHTML = 'MM';
    }
    else {
        mes_tarjeta.innerHTML = mes_cliente.value;
    }
    if (mes_cliente.value > 12) {
        mes_tarjeta.innerHTML = 'MM';
    }
    if(mes_cliente.value.length > 2){
        mes_tarjeta.innerHTML = 'MM';
    }
}   );

año_cliente.addEventListener('input', function() {
    año_tarjeta.innerHTML = año_cliente.value;

    if (año_cliente.value.length == 0) {
        año_tarjeta.innerHTML = 'AA';
    }
    else {
        año_tarjeta.innerHTML = año_cliente.value;
    }
    if (año_cliente.value.length > 2) {
        año_tarjeta.innerHTML = 'AA';
    }

});

cvv_cliente.addEventListener('input', function() {
    cvv_tarjeta.innerHTML = cvv_cliente.value;

    if (cvv_cliente.value.length == 0) {
        cvv_tarjeta.innerHTML = 'CVV';
    }
    else {
        cvv_tarjeta.innerHTML = cvv_cliente.value;
    }
    if (cvv_cliente.value.length > 3) {
        cvv_tarjeta.innerHTML = 'CVV';
    }
});


confirmar.addEventListener('click', function() {
    if (validarCampos()) {
        modal_exito.style.display = 'flex';
        modal_datos.style.display = 'none';

    }
});

function validarCampos() {
    let campos = [numero_tarjeta_cliente.value, nombre_cliente.value, mes_cliente.value, año_cliente.value, cvv_cliente.value];
    let campos_validos = true;
    

    campos.forEach(function(campo) {
        if (campo.length == 0) {
            campos_validos = false;
            alert('Todos los campos son obligatorios');
        }
    });

    return campos_validos;
}


volver.addEventListener('click', function() {
    modal_exito.style.display = 'none';
    modal_datos.style.display = 'block';
});
