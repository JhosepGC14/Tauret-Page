$(document).ready(function () {
    $('.Banner-slider').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $('.slider-servicios').owlCarousel({
        loop: false,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    })
})
function validaContactanos(form) {
    let nombre = $('#nombre_cotizar').val();
    let correo = $('#correo_cotizar').val();
    let telefono = $('#telefono_cotizar').val();
    let marca = $('#marca_cotizar').val();
    let modelo = $('#modelo_cotizar').val();
    let anio = $('#anio_cotizar').val();
    let placa = $('#placa_cotizar').val();
    let mensaje = $('#mensaje_cotizar').val();
    let imagen = $('#imagen_cotizar').val();
    if (nombre == '' || nombre == null) {
        alert('Debe ingresar su nombre');
        return false;
    }
    if (correo == '' || correo == null || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo)) {
        alert('Debe ingresar un correo válido');
        return false;
    }
    if (telefono == '' || telefono == null) {
        alert('Debe ingresar su telefono');
        return false;
    }
    if (marca == '' || marca == null) {
        alert('Debe ingresar una marca');
        return false;
    }
    var formData = new FormData(document.getElementById('form-cotizar'));
    formData.append("section", "contactanos");
    $.ajax({
        url: url_web + "ajax.php",
        type: "post",
        dataType: "html",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $('.col-respuesta').html('');
            $('.col-respuesta').append('<h2>Consulta</h2>');
            $('.col-respuesta').append('<p>Enviando ...</p>');
        },
        success: function (respuesta) {
            if (respuesta == '1') {
                $('.col-respuesta').html('');
                $('.col-respuesta').append('<h2>Mensaje Enviado</h2>');
                $('.col-respuesta').append('<p>Gracias por escribirnos!. Te responderemos a la brevedad posible.</p>');
                $('.col-respuesta').append('<div class="py-5 text-center"><i class="text-info fas fa-envelope-open-text fa-7x"></i></div>');
            } else {
                $('.col-respuesta').html('');
                $('.col-respuesta').append('<h2>No se pudo realizar el envío</h2>');
                $('.col-respuesta').append('<p>Por favor intente dentro de unos minutos.</p>');
            }
            console.log(respuesta);
        },
        error: function (request, status, error) {
            $('.col-respuesta').html('');
            $('.col-respuesta').append('<h2>No se pudo realizar el envío</h2>');
            $('.col-respuesta').append('<p>Por favor intente dentro de unos minutos.</p>');
        }

    });
    return false;
}
function validaRepuestos(form) {
    let nombre = $('#nombre_cotizar').val();
    let correo = $('#correo_cotizar').val();
    let telefono = $('#telefono_cotizar').val();
    let marca = $('#marca_cotizar').val();
    let modelo = $('#modelo_cotizar').val();
    let anio = $('#anio_cotizar').val();
    let placa = $('#placa_cotizar').val();
    let mensaje = $('#mensaje_cotizar').val();
    if (nombre == '' || nombre == null) {
        alert('Debe ingresar su nombre');
        return false;
    }
    if (correo == '' || correo == null || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo)) {
        alert('Debe ingresar un correo válido');
        return false;
    }
    if (telefono == '' || telefono == null) {
        alert('Debe ingresar su telefono');
        return false;
    }
    if (marca == '' || marca == null) {
        alert('Debe ingresar una marca');
        return false;
    }
    var formData = new FormData(document.getElementById('form-repuestos'));
    formData.append("section", "repuestos");
    $.ajax({
        url: url_web + "ajax.php",
        type: "post",
        dataType: "html",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function () {
            $('.col-respuesta').html('');
            $('.col-respuesta').append('<h2>Consulta</h2>');
            $('.col-respuesta').append('<p>Enviando ...</p>');
        },
        success: function (respuesta) {
            if (respuesta == '1') {
                $('.col-respuesta').html('');
                $('.col-respuesta').append('<h2>Mensaje Enviado</h2>');
                $('.col-respuesta').append('<p>Gracias por escribirnos!. Te responderemos a la brevedad posible.</p>');
                $('.col-respuesta').append('<div class="py-5 text-center"><i class="text-info fas fa-envelope-open-text fa-7x"></i></div>');
            } else {
                $('.col-respuesta').html('');
                $('.col-respuesta').append('<h2>No se pudo realizar el envío</h2>');
                $('.col-respuesta').append('<p>Por favor intente dentro de unos minutos.</p>');
            }
            console.log(respuesta);
        },
        error: function (request, status, error) {
            $('.col-respuesta').html('');
            $('.col-respuesta').append('<h2>No se pudo realizar el envío</h2>');
            $('.col-respuesta').append('<p>Por favor intente dentro de unos minutos.</p>');
        }

    });
    return false;
}
function validaServicio(form) {

    let nombre_servi = $('#nombre_servi').val();
    let correo_servi = $('#correo_servi').val();
    let telefono_servi = $('#telefono_servi').val();
    let mensaje_servi = $('#mensaje_servi').val();
    let servicio_titulo = $('#servicio_titulo').val();
    if (nombre_servi == '' || nombre_servi == null) {
        alert('Debe ingresar su nombre');
        return false;
    }
    if (correo_servi == '' || correo_servi == null || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo_servi)) {
        alert('Debe ingresar un correo válido');
        return false;
    }
    if (telefono_servi == '' || telefono_servi == null) {
        alert('Debe ingresar su telefono');
        return false;
    }
    if (mensaje_servi == '' || mensaje_servi == null) {
        alert('Debe ingresar un mensaje');
        return false;
    }
    $.ajax({
        url: url_web + "ajax.php",
        type: "post",
        dataType: "json",
        data: { nombre: nombre_servi, correo: correo_servi, telefono: telefono_servi, mensaje: mensaje_servi, titulo: servicio_titulo, section: 'servicio' },
        beforeSend: function () {
            $('.col-respuesta').html('');
            $('.col-respuesta').append('<h2>Consulta</h2>');
            $('.col-respuesta').append('<p>Enviando ...</p>');
        },
        success: function (respuesta) {
            if (respuesta == '1') {
                $('.col-respuesta').html('');
                $('.col-respuesta').append('<h2>Mensaje Enviado</h2>');
                $('.col-respuesta').append('<p>Gracias por escribirnos!. Te responderemos a la brevedad posible.</p>');
                $('.col-respuesta').append('<div class="py-5 text-center"><i class="text-info fas fa-envelope-open-text fa-7x"></i></div>');
            } else {
                $('.col-respuesta').html('');
                $('.col-respuesta').append('<h2>No se pudo realizar el envío</h2>');
                $('.col-respuesta').append('<p>Por favor intente dentro de unos minutos.</p>');
            }
            console.log(respuesta);
        },
        error: function (request, status, error) {
            $('.col-respuesta').html('');
            $('.col-respuesta').append('<h2>No se pudo realizar el envío</h2>');
            $('.col-respuesta').append('<p>Por favor intente dentro de unos minutos.</p>');
        }

    });
    return false;
}
$('.panel-action').click(function () {
    $(".PanelMenu").toggleClass('is-active');
})
