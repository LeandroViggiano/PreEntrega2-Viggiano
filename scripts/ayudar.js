window.onload = function() {
    var selectMenu = document.getElementById('ayuda');
    var extraFields = document.getElementById('extraFields');

    selectMenu.onchange = function() {
        if (selectMenu.value == 'economica') {
            extraFields.innerHTML = `
                <input type="text" id="descripcion" name="descripcion" placeholder="Descripción">
                <input type="text" id="monto" name="monto" placeholder="Monto">
                <select name="medioPago" id="medioPago">
                    <option value="debito">Tarjeta de débito</option>
                    <option value="credito">Tarjeta de crédito</option>
                    <option value="mercadoPago">Mercado Pago</option>
                </select>
                <select name="tipoTarjeta" id="tipoTarjeta">
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                </select>
            `;
        } else if (selectMenu.value == 'traslados') {
            extraFields.innerHTML = `
                <p>1) Evento 1: viaje de punto A hacia punto B <button>Participar</button></p>
                <p>2) Evento 2: viaje de punto A hacia punto B <button>Participar</button></p>
            `;
        } else if (selectMenu.value == 'alimento') {
            extraFields.innerHTML = `
                <input type="text" id="animal" name="animal" placeholder="Animal">
                <input type="text" id="tamañoEtapa" name="tamañoEtapa" placeholder="Tamaño y etapa del animal">
                <input type="text" id="marca" name="marca" placeholder="Marca">
                <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad">
            `;
        } else if (selectMenu.value == 'medicamentos') {
            extraFields.innerHTML = `
                <input type="text" id="nombreMedicamento" name="nombreMedicamento" placeholder="Nombre de medicamento">
                <input type="text" id="cantidadMedicamento" name="cantidadMedicamento" placeholder="Cantidad">
                <input type="text" id="funcionMedicamento" name="funcionMedicamento" placeholder="Función del medicamento">
            `;
        } else if (selectMenu.value == 'objetos') {
            extraFields.innerHTML = `
                <input type="file" id="foto" name="foto">
                <input type="text" id="descripcionObjeto" name="descripcionObjeto" placeholder="Descripción">
            `;
        } else {
            extraFields.innerHTML = '';
        }
    }
}
