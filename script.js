//#region Variables
let table = document.getElementById('filtro');
let table_complete =  table.outerHTML;
var wdn = document.getElementById('Seleccion_bayas');
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

//#region Calcular Tiempo
function CalcularTime(type){
    let img = document.getElementById('baya_calc');

    let hr_actual = new Date();
    let hr = hr_actual.getHours();
    let min = hr_actual.getMinutes();
    
    let time_grow = 0;
    let baya = '';
    let txt_encabezado = '';
    
    if(type == 'Semillas' || type == 'atania' || type == 'meloc' || type == 'perasi' || type == 'safre' || type == 'zreza')
    {
        time_grow = 16;
        
        if(type == 'Semillas'){
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
        } else { 
            baya = type; 
            event.stopPropagation();
        }
        
        txt = 'Farmeo de semillas';
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';

        table.innerHTML = txt_encabezado + encabezado + semillas;
    }
    
    if(type == 'Evs' || type == 'algama' || type == 'grana' || type == 'ispero' || type == 'meluce' || type == 'tamate' || type == 'uvav')
    {
        time_grow = 44;
        
        if(type == 'Evs'){
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
        } else {
            baya = type;
            event.stopPropagation();
        }

        txt = "Cambio de Ev's";
        txt_encabezado = '<tr><td class="filt_sub" colspan="5">' + 'Mostrando bayas para ' + txt + '</td></tr>';

        table.innerHTML = txt_encabezado + encabezado + evs;
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
        var time = document.getElementById('baya_crecimiento');
        time.innerHTML = time_grow + ' horas';
        img.innerHTML = '<img src="assets/baya_' + baya + '.png" class="baya_icon">';

        var usage = document.getElementById('uso_baya');
        usage.innerHTML = '<p>' + txt + '</p>';
        
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
        table.innerHTML = table_complete;
        
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
//#endregion

//#region Cambiar Color
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