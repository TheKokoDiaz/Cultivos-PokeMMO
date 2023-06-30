function verPanel(opc){
    var Panel = document.getElementById('panel');

    if(opc == true)
    {
        Panel.style.left = '0%';
    }
    else
    {
        Panel.style.left = '-40%';
    }
}

function CalcularTime(type){
    var img = document.getElementById('baya_calc');

    var hr_actual = new Date();
    var hr = hr_actual.getHours();
    var min = hr_actual.getMinutes();
    
    var time_grow = 0;
    var baya = '';
    var txt_encabezado = '';
    var table = document.getElementById('filtro');

    var encabezado = '<tr><td class="filt_sub" style="width:15%;">Nombre</td><td class="filt_sub" style="width:30%;">Se crea con:</td><td class="filt_sub" style="width:30%;">Usos</td><td class="filt_sub" style="width:10%;">TC</td><td class="filt_sub" style="width:10%;">BC</td></tr>';

    if(type == 'Semillas')
    {
        time_grow = 16;
        baya = Math.round(Math.random() * (5 - 1) + 1);

        switch(baya){
            case 1:
                baya = 'zreza';
                break;
                
            case 2:
                baya = 'atania';
                break;

            case 3:
                baya = 'meloc';
                break;

            case 4:
                baya = 'safre';
                break;

            case 5:
                baya = 'perasi';
                break;
        }
        
        txt = 'Farmeo de semillas';
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';

        table.innerHTML = txt_encabezado + encabezado + '<tr><td><img src="assets/baya_zreza.png" class="berrie_table"><br> Zreza</td><td>3 semillas picantes <img src="assets/picante.png" class="seed_table"></td><td>Cura la paralisis <hr> Farmeo de semillas picantes</td><td rowspan="5">16 hrs</td><td rowspan="5">2 - 6</td></tr><tr><td><img src="assets/baya_atania.png" class="berrie_table"><br> Atania</td><td>3 semillas secas <img src="assets/seca.png" class="seed_table"></td><td>Despierta al Pok&eacute;mon <hr> Farmeo de semillas secas</td></tr><tr><td><img src="assets/baya_meloc.png" class="berrie_table"><br> Meloc</td><td>3 semillas dulces <img src="assets/dulce.png" class="seed_table"></td><td>Cura el envenenamiento <hr> Farmeo de semillas dulces</td></tr><tr><td><img src="assets/baya_safre.png" class="berrie_table"><br> Safre</td><td>3 semillas amargas <img src="assets/amarga.png" class="seed_table"></td><td>Cura las quemaduras <hr> Farmeo de semillas amargas</td></tr><tr><td><img src="assets/baya_perasi.png" class="berrie_table"><br> Perasi</td><td>3 semillas &aacute;cidas <img src="assets/acida.png" class="seed_table"></td><td>Cura el congelamiento <hr> Farmeo de semillas &aacute;cidas</td></tr>';
    }
    
    if(type == 'Evs')
    {
        time_grow = 44;
        baya = Math.round(Math.random() * (6 - 1) + 1);

        switch(baya){
            case 1:
                baya = 'grana';
                break;
                
            case 2:
                baya = 'algama';
                break;

            case 3:
                baya = 'ispero';
                break;

            case 4:
                baya = 'meluce';
                break;

            case 5:
                baya = 'uvav';
                break;
            
            case 6:
                baya = 'tamate';
                break;
        }

        txt = "Cambio de Ev's";
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';

        table.innerHTML = txt_encabezado + encabezado + '<tr><td><img src="assets/baya_grana.png" class="berrie_table"><br> Grana</td><td>1 semilla picante <img src="assets/picante.png" class="seed_table"><br>+ 1 semilla amarga  <img src="assets/amarga.png" class="seed_table"><br>+ 1 semilla muy picante <img src="assets/muy_picante.png" class="seed_table"></td><td>Resta 10 Ev´s de PS <hr> Aumenta la felicidad</td><td rowspan="6">44 hrs</td><td rowspan="6">7 - 9</td></tr><tr><td><img src="assets/baya_algama.png" class="berrie_table"><br> Algama</td><td>1 semilla seca <img src="assets/seca.png" class="seed_table"><br>+ 1 semilla &aacute;cida <img src="assets/acida.png" class="seed_table"><br>+ 1 semilla muy seca <img src="assets/muy_seca.png" class="seed_table"></td><td>Resta 10 Ev´s de Atk <hr> Aumenta la felicidad</td></tr><tr><td><img src="assets/baya_ispero.png" class="berrie_table"><br> Ispero</td><td>1 semilla picante <img src="assets/picante.png" class="seed_table"><br>+ 1 semilla dulce <img src="assets/dulce.png" class="seed_table"><br>+ 1 semilla muy dulce <img src="assets/muy_dulce.png" class="seed_table"></td><td>Resta 10 Ev´s de Def <hr> Aumenta la felicidad</td></tr><tr><td><img src="assets/baya_meluce.png" class="berrie_table"><br> Meluce</td><td>1 semilla seca <img src="assets/seca.png" class="seed_table"><br>+ 1 semilla amarga <img src="assets/amarga.png" class="seed_table"><br>+ 1 semilla muy amarga <img src="assets/muy_amarga.png" class="seed_table"> </td><td>Resta 10 Ev´s de Sp. Atk <hr> Aumenta la felicidad</td></tr><tr><td><img src="assets/baya_uvav.png" class="berrie_table"><br> Uvav</td><td>1 semilla dulce <img src="assets/dulce.png" class="seed_table"><br>+ 1 semilla &aacute;cida <img src="assets/acida.png" class="seed_table"><br>+ 1 semilla muy &aacute;cida <img src="assets/muy_acida.png" class="seed_table"></td><td>Resta 10 Ev´s de Sp. Def <hr> Aumenta la felicidad</td></tr><tr><td><img src="assets/baya_tamate.png" class="berrie_table"><br> Tamate</td><td>1 semilla picante <img src="assets/picante.png" class="seed_table"><br>+ 1 semilla seca <img src="assets/seca.png" class="seed_table"><br>+ 1 semilla muy picante <img src="assets/muy_picante.png" class="seed_table"></td><td>Resta 10 Ev´s de Velocidad <hr> Aumenta la felicidad</td></tr>';
    }
    
    if(type == 'PPs')
    {
        time_grow = 20;
        baya = 'zanama';
        txt = "Recuperar PP's";
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';

        table.innerHTML = txt_encabezado + encabezado + '<tr><td><img src="assets/baya_zanama.png" class="berrie_table"> Zanama</td><td>1 semilla muy picante <img src="assets/picante.png" class="seed_table"><br>+ 1 semilla dulce <img src="assets/dulce.png" class="seed_table"><br>+ 1 semilla amarga <img src="assets/amarga.png" class="seed_table"></td><td>Restaura 10 PP de un movimiento</td><td>20 hrs</td><td>5 - 7</td></tr>';
    }

    if(type != 'All'){
        var time = document.getElementById('baya_crecimiento');
        time.innerHTML = time_grow + ' horas';
        img.innerHTML = '<img src="assets/baya_' + baya + '.png" class="baya_icon">';

        var usage = document.getElementById('uso_baya');
        usage.innerHTML = txt + '<br><br>';
        
        var days = '';
        var tot = time_grow + hr;
        var recolect = document.getElementById('baya_lista');
        
        if(tot > 48) //Para quitarle 2 días
        {
            tot -= 48;
            days = 'En 2 días, ';
        }
        
        if(tot > 24) //Para quitarle 1 día
        {
            tot -= 24;
            days = 'Mañana, ';
        }

        if(min < 10){min = '0' + min;}
        
        if(days != '')
        {
            if(tot >= 12)
            {
                tot -= 12;
                if(tot == 0){tot = 12;}
                recolect.innerHTML = days + ' a las ' + tot + ':' + min + ' PM';
            }
            else
            {
                recolect.innerHTML = days + ' a las ' + tot + ':' + min + ' AM';
            }
        }
        else
        {
            if(tot >= 12)
            {
                tot -= 12;
                if(tot == 0){tot = 12;}
                recolect.innerHTML = 'A las ' + tot + ':' + min + ' PM';
            }
            else
            {
                recolect.innerHTML = 'A las ' + tot + ':' + min + ' AM';
            }
        }
    }

    if(type == 'All')
    {
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando todas las bayas' + '</td></tr>';

        table.innerHTML = txt_encabezado + encabezado + '<tr><td><img src="assets/baya_zreza.png" class="berrie_table"><br> Zreza</td><td>3 semillas picantes <img src="assets/picante.png" class="seed_table"></td><td>Cura la paralisis <hr> Farmeo de semillas picantes</td><td rowspan="5">16 hrs</td><td rowspan="5">2 - 6</td></tr><tr><td><img src="assets/baya_atania.png" class="berrie_table"><br> Atania</td><td>3 semillas secas <img src="assets/seca.png" class="seed_table"></td><td>Despierta al Pok&eacute;mon <hr> Farmeo de semillas secas</td></tr><tr><td><img src="assets/baya_meloc.png" class="berrie_table"><br> Meloc</td><td>3 semillas dulces <img src="assets/dulce.png" class="seed_table"></td><td>Cura el envenenamiento <hr> Farmeo de semillas dulces</td></tr><tr><td><img src="assets/baya_safre.png" class="berrie_table"><br> Safre</td><td>3 semillas amargas <img src="assets/amarga.png" class="seed_table"></td><td>Cura las quemaduras <hr> Farmeo de semillas amargas</td></tr><tr><td><img src="assets/baya_perasi.png" class="berrie_table"><br> Perasi</td><td>3 semillas &aacute;cidas <img src="assets/acida.png" class="seed_table"></td><td>Cura el congelamiento <hr> Farmeo de semillas &aacute;cidas</td></tr>' + '<tr><td><img src="baya_grana.png" class="berrie_table"><br> Grana</td><td>1 semilla picante <img src="picante.png" class="seed_table"><br>+ 1 semilla amarga  <img src="amarga.png" class="seed_table"><br>+ 1 semilla muy picante <img src="muy_picante.png" class="seed_table"></td><td>Resta 10 Ev´s de PS <hr> Aumenta la felicidad</td><td rowspan="6">44 hrs</td><td rowspan="6">7 - 9</td></tr><tr><td><img src="baya_algama.png" class="berrie_table"><br> Algama</td><td>1 semilla seca <img src="seca.png" class="seed_table"><br>+ 1 semilla &aacute;cida <img src="acida.png" class="seed_table"><br>+ 1 semilla muy seca <img src="muy_seca.png" class="seed_table"></td><td>Resta 10 Ev´s de Atk <hr> Aumenta la felicidad</td></tr><tr><td><img src="baya_ispero.png" class="berrie_table"><br> Ispero</td><td>1 semilla picante <img src="picante.png" class="seed_table"><br>+ 1 semilla dulce <img src="dulce.png" class="seed_table"><br>+ 1 semilla muy dulce <img src="muy_dulce.png" class="seed_table"></td><td>Resta 10 Ev´s de Def <hr> Aumenta la felicidad</td></tr><tr><td><img src="baya_meluce.png" class="berrie_table"><br> Meluce</td><td>1 semilla seca <img src="seca.png" class="seed_table"><br>+ 1 semilla amarga <img src="amarga.png" class="seed_table"><br>+ 1 semilla muy amarga <img src="muy_amarga.png" class="seed_table"> </td><td>Resta 10 Ev´s de Sp. Atk <hr> Aumenta la felicidad</td></tr><tr><td><img src="baya_uvav.png" class="berrie_table"><br> Uvav</td><td>1 semilla dulce <img src="dulce.png" class="seed_table"><br>+ 1 semilla &aacute;cida <img src="acida.png" class="seed_table"><br>+ 1 semilla muy &aacute;cida <img src="muy_acida.png" class="seed_table"></td><td>Resta 10 Ev´s de Sp. Def <hr> Aumenta la felicidad</td></tr><tr><td><img src="baya_tamate.png" class="berrie_table"><br> Tamate</td><td>1 semilla picante <img src="picante.png" class="seed_table"><br>+ 1 semilla seca <img src="seca.png" class="seed_table"><br>+ 1 semilla muy picante <img src="muy_picante.png" class="seed_table"></td><td>Resta 10 Ev´s de Velocidad <hr> Aumenta la felicidad</td></tr>' + '<tr><td><img src="baya_zanama.png" class="berrie_table"> Zanama</td><td>1 semilla muy picante <img src="picante.png" class="seed_table"><br>+ 1 semilla dulce <img src="dulce.png" class="seed_table"><br>+ 1 semilla amarga <img src="amarga.png" class="seed_table"></td><td>Restaura 10 PP de un movimiento</td><td>20 hrs</td><td>5 - 7</td></tr>';

        var time = document.getElementById('baya_crecimiento');
        time.innerHTML = '';

        var usage = document.getElementById('uso_baya');
        usage.innerHTML = '';

        var recolect = document.getElementById('baya_lista');
        recolect.innerHTML = '';

        img.innerHTML = '';

    }

    Cerrar_Ventana();
}

function ChangeColor(a){
    if(a != 'All'){
        var x = a + '_1';
        var y = a + '_2';
        
        obj1 = document.getElementById(x);
        obj2 = document.getElementById(y);

        obj1.className = 'animation';
        obj2.className = 'animation';
    }
    else{
        obj1 = document.getElementById(a);

        obj1.className = 'animation';
    }
}

function ReturnColor(a){
    if(a != 'All'){
        var x = a + '_1';
        var y = a + '_2';
        
        obj1 = document.getElementById(x);
        obj2 = document.getElementById(y);
    }
    else{
        obj1 = document.getElementById(a);
    }

    switch(a)
    {
        case 'Semillas':
            color = 'rgb(150, 255, 150)';
        break;
        
        case 'Evs':
            color = 'rgb(255, 150, 150)';
        break;
        
        case 'PPs':
            color = 'rgb(255, 200, 150)';
        break;

        case 'All':
            color = 'rgba(150, 150, 255, 1)';
            break;
    }

    obj1.className = '';
    obj2.className = '';
}

function Abrir_Ventana(){
    var wdn = document.getElementById('Seleccion_bayas');
    wdn.style.top = '0px';
    Ocultar_Ventana('flex');
}

function Cerrar_Ventana(){
    var wdn = document.getElementById('Seleccion_bayas');
    wdn.style.top = '-200%';
    setTimeout(Ocultar_Ventana, 200, 'none');
}

function Ocultar_Ventana(opc){
    var wdn = document.getElementById('Seleccion_bayas');
    wdn.style.display = opc;
}