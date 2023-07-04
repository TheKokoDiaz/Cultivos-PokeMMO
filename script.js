//#region Variables
let table = document.getElementById('filtro');
let table_complete =  table.outerHTML;
var wdn = document.getElementById('Seleccion_bayas');
let calculadora = document.getElementById('calculadora');
let baya_calc = document.getElementById('baya_calc');
var uso_baya = document.getElementById('uso_baya');
var time = document.getElementById('baya_crecimiento');
var baya_lista = document.getElementById('baya_lista');
//#endregion

//#region Almacenar Objetos HTML
function AlmacenarHTML(nombre_clase){
    table.innerHTML = table_complete;
    let elementosHTML = '';
    let elementosClase = document.getElementsByClassName(nombre_clase);
    for(var n = 0 ; n < elementosClase.length ; n++){
        elementosHTML += elementosClase[n].outerHTML;
    }
    
    return elementosHTML;
}
//#endregion

//#region Variables creadas con la función anterior (son fragmentos de la tabla 'filtro')
let encabezado = AlmacenarHTML('encabezado');
let semillas = AlmacenarHTML('semillas');
let evs = AlmacenarHTML('evs');
let pps = AlmacenarHTML('pps');
//#endregion

//#region Destacar Fila de filtro
function DestacarFila(clase){
    let fila = document.getElementsByClassName(clase);
    for(var n = 0 ; n < fila.length ; n++){
        fila[n].classList.add('destacar');
    }
}
//#endregion

//#region Calcular Tiempo 
function CalcularTime(type){
    let hr_actual = new Date();
    let hr = hr_actual.getHours();
    let min = hr_actual.getMinutes();
    
    let time_grow = 0;
    let baya = '';
    let txt = '';
    let txt_encabezado = '';
    
    if(type == 'Semillas' || type == 'atania' || type == 'meloc' || type == 'perasi' || type == 'safre' || type == 'zreza')
    {
        time_grow = 16;
        txt = 'Curar problemas de estado / Farmeo de semillas';
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';
        table.innerHTML = txt_encabezado + encabezado + semillas;
        
        if(type != 'Semillas'){ 
            baya = type;
            DestacarFila(type);
            event.stopPropagation();
        }
    }
    
    if(type == 'Evs' || type == 'algama' || type == 'grana' || type == 'ispero' || type == 'meluce' || type == 'tamate' || type == 'uvav')
    {
        time_grow = 44;
        txt = "Disminuir Ev's / Aumentar la Felicidad";
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';
        table.innerHTML = txt_encabezado + encabezado + evs;
        
        if(type != 'Evs'){
            baya = type;
            DestacarFila(type);
            event.stopPropagation();
        }
    }
    
    if(type == 'PPs')
    {
        time_grow = 20;
        baya = 'zanama';
        txt = "Recuperar PP's";
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';

        table.innerHTML = txt_encabezado + encabezado + pps;
    }

    if(type != 'All'){
        time.innerHTML = time_grow + ' horas';
        baya_calc.style.display = 'block';
        baya_calc.innerHTML = '<img src="assets/baya_' + baya + '.png" class="baya_icon">';
        

        if(type != 'Evs' && type != 'Semillas' && type != 'PPs'){
            uso_baya.innerHTML = '<b class="nombre_baya">Baya ' + type + '</b>';

            if(type == 'atania'){uso_baya.innerHTML += '<p>Despierta al Pokémon / Farmeo de semillas secas</p>';}
            if(type == 'meloc'){uso_baya.innerHTML += '<p>Cura el envenenamiento / Farmeo de semillas dulces</p>';}
            if(type == 'perasi'){uso_baya.innerHTML += '<p>Cura el congelamiento / Farmeo de semillas ácidas</p>';}
            if(type == 'safre'){uso_baya.innerHTML += '<p>Cura las quemaduras / Farmeo de semillas amargas</p>';}
            if(type == 'zreza'){uso_baya.innerHTML += '<p>Cura la paralisis / Farmeo de semillas picantes</p>';}
            if(type == 'algama'){uso_baya.innerHTML += '<p>Resta 10 Ev´s de Ataque / Aumenta la felicidad</p>';}
            if(type == 'grana'){uso_baya.innerHTML += '<p>Resta 10 Ev´s de PS / Aumenta la felicidad</p>';}
            if(type == 'ispero'){uso_baya.innerHTML += '<p>Resta 10 Ev´s de Defensa / Aumenta la felicidad</p>';}
            if(type == 'meluce'){uso_baya.innerHTML += '<p>Resta 10 Ev´s de Ataque Esp. / Aumenta la felicidad</p>';}
            if(type == 'tamate'){uso_baya.innerHTML += '<p>Resta 10 Ev´s de Velocidad / Aumenta la felicidad</p>';}
            if(type == 'uvav'){uso_baya.innerHTML += '<p>Resta 10 Ev´s de Defensa Esp. / Aumenta la felicidad</p>';}

        } else {
            if(type == 'PPs'){ uso_baya.innerHTML = '<b class="nombre_baya">Baya zanama</b><p>Restaura 10 PP de un movimiento</p>'; }
            else {
                uso_baya.innerHTML = '<p>' + txt + '</p>';
                baya_calc.style.display = 'none';
            }
        }
        
        var days = '';
        var tot = time_grow + hr;
        
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
                baya_lista.innerHTML = days + ' a las ' + tot + ':' + min + ' PM';
            }
            else
            {
                baya_lista.innerHTML = days + ' a las ' + tot + ':' + min + ' AM';
            }
        }
        else
        {
            if(tot >= 12)
            {
                tot -= 12;
                if(tot == 0){tot = 12;}
                baya_lista.innerHTML = 'A las ' + tot + ':' + min + ' PM';
            }
            else
            {
                baya_lista.innerHTML = 'A las ' + tot + ':' + min + ' AM';
            }
        }

        calculadora.scrollIntoView({ behavior: 'smooth' });
    }

    if(type == 'All')
    {
        table.innerHTML = table_complete;
        time.innerHTML = '';
        uso_baya.innerHTML = '';
        baya_lista.innerHTML = '';
        baya_calc.style.display = 'none';

        table.scrollIntoView({ behavior: 'smooth' });
    }

    Cerrar_Ventana();
}
//#endregion

//#region Cambiar Color de Celdas en Tabla Selección
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

    obj1.className = '';
    obj2.className = '';
}
//#endregion

//#region Mostrar/Ocultar Ventana
function Abrir_Ventana(){
    Cambio_Ventana('flex');
    setTimeout(function(){
        wdn.style.top = '0';
    }, 300);
}

function Cerrar_Ventana(){
    wdn.style.top = '-100%';
    setTimeout(Cambio_Ventana, 300, 'none');
}

function Cambio_Ventana(opc){
    wdn.style.display = opc;
}
//#endregion