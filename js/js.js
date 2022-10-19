function loadBg(id, path=""){
    $.ajax({
        url: path+"design/background.html",
        //context: document.body
    }).done(function(data) {
        $(id).html(data);
        //$( this ).addClass( "done" );
    });
}
function changeNivel(id, nivel=1, path=""){
    var link = "";
    var source = "";
    switch (nivel){
        case 0:
            link = "modules/levels/n/n0.php";
            break; 
        case 1:
            link = "modules/levels/n/n1.php";
            break; 
        case 2:
            link = "modules/levels/n/n2.php";
            break;
        case 3:
            link = "modules/levels/n/n3.php";
            break;
        case 4:
            link = "modules/levels/n/n4.php";
            break;
        case 5:
            link = "modules/levels/n/n5.php";
            break;
        // case 6:
        //     link = "modules/levels/n/n6.php";
        //     break;
        case 6:
            link = "modules/levels/n/n7.php";
            break;
        case 7:
            link = "modules/levels/n/n8.php";
            break;
        case 8:
            link = "modules/levels/n/n9.php";
            break;
        case 9:
            link = "modules/levels/n/n10.php";
            break;
        case 10:
            link = "modules/levels/n/n11.php";
            break;
        default:
            // alert("No hay más niveles");
            $("#modalFinish").modal();
            return null;
    }
    source = path+""+link;
    
    $.ajax({
        url: source,
    }).done(function(data) {
        $(id).html(data);
    });
}
function changeNexSlevel(id, nivel=1, path="../"){
    var link = "";
    var source = "";
    switch (nivel){
        case 1:
            link = "modules/levels/n/n5.php";
            break; 
        case 2:
            link = "modules/levels/n/n6.php";
            break;
        default:
            alert("No hay más niveles");
            return null;
    }
    source = path+""+link;
    $.ajax({
        url: source,
    }).done(function(data) {
        $(id).html(data);
    });
}
function playSong(source="levels/audio/1.mp3", v=1){
    var sound = new Audio(source);
    sound.play();
    sound.volume = v;
    return sound;
}
function nexLevel(id, nivelActual, path=""){
    var n = nivelActual*1;
    changeNivel(id, nivel=n+1, path)
}
function changeDatas(tag, cant=4, m=[]){
    count = 1;
    ////
    var randDataDis = randDistinct(cant, m.length);
    $(tag).html("");

    ///
    var circulo = [
        "formaCircular/4180.png",
        "formaCircular/aro.png",
        "formaCircular/galletacircular.png",
        "formaCircular/llantadelcarro.png",
        "formaCircular/llavercircular.png",
        "formaCircular/manzana.png",
        "formaCircular/naranja.png",
        "formaCircular/pan.png",
        "formaCircular/pelotadetenis.png",
        "formaCircular/prohibido.png",
        "formaCircular/semaforo.png",
        "formaCircular/sol.png",
        "formaCircular/tapa.png",
        "formaCircular/tierra.png",
    ]
    var cuadrado = [
        "formaCuadrada/almohada.png",
        "formaCuadrada/candado.png",
        "formaCuadrada/galleta.png",
        "formaCuadrada/libro.png",
        "formaCuadrada/señalizacion.png",
        "formaCuadrada/ventanacuadrada.png",
        "formaCuadrada/ventana2.png",
    ]
    var rectangulos = [
        "formaRectangular/celular.png",
        "formaRectangular/puerta.png",
        "formaRectangular/semafor2.png",
        "formaRectangular/televisor.png",
    ]
    var rombo = [
        "formaRombo/1(1).png",
        "formaRombo/1(3).png",
        "formaRombo/1(2).png",
        "formaRombo/cometa.png",
        "formaRombo/EstandarteNacional.png",
        "formaRombo/trompo.png",
    ]
    var triangulo = [
        "formaTrinagular/arbolnavideño.png",
        "formaTrinagular/arbol.png",
        "formaTrinagular/cerro.png",
        "formaTrinagular/piramide.png",
        "formaTrinagular/reglaescuadra.png",
        "formaTrinagular/sandillatriangular.png",
        "formaTrinagular/señalizacion(2).png",
        "formaTrinagular/señalizacion.png",
        "formaRectangular/tringularventana.png"
    ]
    var ovalo = [
        "ovalo/Babolat-Boost-Aero-Racchetta-Tennis-.png",
        "ovalo/caramelo.png",
        "ovalo/espejo.png",
        "ovalo/globo.png",
        "ovalo/huevo.png",
        "ovalo/pelotass.png",
        "ovalo/sandias.png",
    ]
    for (var i = 0; i < cant; i++) {
        var figRand = Math.floor(Math.random() * m.length);
        //circulo
        if(m[figRand].symbol=="circulo"){
            var rnd = randDistinct(1, circulo.length);
            $(tag).append('<div onclick="selectDEl(this)" id="a'+i+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "circulo"}\'><img src="../images/formas/'+circulo[rnd[0]]+'" alt="_" width="100" height="100"></div>');
        }
        //cuadrado
        if(m[figRand].symbol=="cuadrado"){
            var rnd = randDistinct(1, cuadrado.length);
            $(tag).append('<div onclick="selectDEl(this)" id="a'+i+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "cuadrado"}\'><img src="../images/formas/'+cuadrado[rnd[0]]+'" alt="_" width="100" height="100"></div>');
        }
        //rectangulos
        if(m[figRand].symbol=="rectangulo"){
            var rnd = randDistinct(1, rectangulos.length);
            $(tag).append('<div onclick="selectDEl(this)" id="a'+i+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "rectangulo"}\'><img src="../images/formas/'+rectangulos[rnd[0]]+'" alt="_" width="100" height="100"></div>');
        }
        //rombo
        if(m[figRand].symbol=="rombo"){
            var rnd = randDistinct(1, rombo.length);
            $(tag).append('<div onclick="selectDEl(this)" id="a'+i+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "rombo"}\'><img src="../images/formas/'+rombo[rnd[0]]+'" alt="_" width="100" height="100"></div>');
        }
        //triangulo
        if(m[figRand].symbol=="triangulo"){
            var rnd = randDistinct(1, rombo.length);
            $(tag).append('<div onclick="selectDEl(this)" id="a'+i+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "triangulo"}\'><img src="../images/formas/'+triangulo[rnd[0]]+'" alt="_" width="100" height="100"></div>');
        }
        //ovalo
        if(m[figRand].symbol=="ovalo"){
            var rnd = randDistinct(1, rombo.length);
            $(tag).append('<div onclick="selectDEl(this)" id="a'+i+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "ovalo"}\'><img src="../images/formas/'+ovalo[rnd[0]]+'" alt="_" width="100" height="100"></div>');
        }
    }
}
function changeDatasC(tag, cant=4, m={}){
    count = 1;
    ////
    var randDataDis = randDistinct(cant, 6);
    //var randDataDis = randDistinct(cant, m.length);
    $(tag).html("");

    ///
    var circulo = [
        "formaCircular/4180.png",
        "formaCircular/aro.png",
        "formaCircular/galletacircular.png",
        "formaCircular/llantadelcarro.png",
        "formaCircular/llavercircular.png",
        "formaCircular/manzana.png",
        "formaCircular/naranja.png",
        "formaCircular/pan.png",
        "formaCircular/pelotadetenis.png",
        "formaCircular/prohibido.png",
        "formaCircular/semaforo.png",
        "formaCircular/sol.png",
        "formaCircular/tapa.png",
        "formaCircular/tierra.png",
    ]
    var cuadrado = [
        "formaCuadrada/almohada.png",
        "formaCuadrada/candado.png",
        "formaCuadrada/galleta.png",
        "formaCuadrada/libro.png",
        "formaCuadrada/señalizacion.png",
        "formaCuadrada/ventanacuadrada.png",
        "formaCuadrada/ventana2.png",
    ]
    var rectangulos = [
        "formaRectangular/celular.png",
        "formaRectangular/puerta.png",
        "formaRectangular/semafor2.png",
        "formaRectangular/televisor.png",
    ]
    var rombo = [
        "formaRombo/1(1).png",
        "formaRombo/1(3).png",
        "formaRombo/1(2).png",
        "formaRombo/cometa.png",
        "formaRombo/EstandarteNacional.png",
        "formaRombo/trompo.png",
    ]
    var triangulo = [
        "formaTrinagular/arbolnavideño.png",
        "formaTrinagular/arbol.png",
        "formaTrinagular/cerro.png",
        "formaTrinagular/piramide.png",
        "formaTrinagular/reglaescuadra.png",
        "formaTrinagular/sandillatriangular.png",
        "formaTrinagular/señalizacion(2).png",
        "formaTrinagular/señalizacion.png",
        "formaRectangular/tringularventana.png"
    ]
    var ovalo = [
        "ovalo/Babolat-Boost-Aero-Racchetta-Tennis-.png",
        "ovalo/caramelo.png",
        "ovalo/espejo.png",
        "ovalo/globo.png",
        "ovalo/huevo.png",
        "ovalo/pelotass.png",
        "ovalo/sandias.png",
    ]
    for (var i = 0; i < randDataDis.length; i++) {
        if (count == cant) return null;
        //circulo
        if(randDataDis[i]==0){
            var rand = Math.floor((Math.random() * cant) + 1);
            var rnd = randDistinct(rand, circulo.length);
            for(var i=0;i<rnd.length;i++){
                $(tag).append('<div id="a'+count+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "circulo"}\'><img src="../images/formas/'+circulo[rnd[i]]+'" alt="_" width="100" height="100"></div>');
                count++;
            }
        }
        //cuadrado
        if(randDataDis[i]==1){
            var rand = Math.floor((Math.random() * cant) + 1);
            var rnd = randDistinct(rand, cuadrado.length);
            for(var i=0;i<rnd.length;i++){
                $(tag).append('<div id="a'+count+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "cuadrado"}\'><img src="../images/formas/'+cuadrado[rnd[i]]+'" alt="_" width="100" height="100"></div>');
                count++;
            }
        }
        //rectangulos
        if(randDataDis[i]==2){
            var rand = Math.floor((Math.random() * cant) + 1);
            var rnd = randDistinct(rand, rectangulos.length);
            for(var i=0;i<rnd.length;i++){
                $(tag).append('<div id="a'+count+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "rectangulo"}\'><img src="../images/formas/'+rectangulos[rnd[i]]+'" alt="_" width="100" height="100"></div>');
                count++;
            }
        }
        //rombo
        if(randDataDis[i]==3){
            var rand = Math.floor((Math.random() * cant) + 1);
            var rnd = randDistinct(rand, rombo.length);
            for(var i=0;i<rnd.length;i++){
                $(tag).append('<div id="a'+count+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "rombo"}\'><img src="../images/formas/'+rombo[rnd[i]]+'" alt="_" width="100" height="100"></div>');
                count++;
            }
        }
        //triangulo
        if(randDataDis[i]==4){
            var rand = Math.floor((Math.random() * cant) + 1);
            var rnd = randDistinct(rand, rombo.length);
            for(var i=0;i<rnd.length;i++){
                $(tag).append('<div id="a'+count+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "triangulo"}\'><img src="../images/formas/'+triangulo[rnd[i]]+'" alt="_" width="100" height="100"></div>');
                count++;
            }
        }
        //ovalo
        if(randDataDis[i]==5){
            var rand = Math.floor((Math.random() * cant) + 1);
            var rnd = randDistinct(rand, rombo.length);
            for(var i=0;i<rnd.length;i++){
                $(tag).append('<div id="a'+count+'" class="btn2 d-flex justify-content-center align-items-center m-2 animate__animated animate__bounce" style="width: 100px; height: 100px;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "ovalo"}\'><img src="../images/formas/'+ovalo[rnd[i]]+'" alt="_" width="100" height="100"></div>');
                count++;
            }
        }
        console.log(count);
    }
}
function desordenar(tag){
    var t = $(tag).children();
    var rand = 0;
    var rand2 = 0;
    for(var i=0;i<t.length;i++){
        rand = Math.floor((Math.random() * t.length) + 0);
        rand2 = Math.floor((Math.random() * t.length) + 0);

        var tmpTag = t[rand];
        t[rand] = t[rand2];
        t[rand2] = tmpTag;
    }
    $(tag).html("");
    for(var i=0;i<t.length;i++){
        $(tag).append(t[i]);
    }
}

function activeBtn(el, target){
    var element = $(el);
    var chi = element.children();

    $(chi).removeClass("btnActive");
    $(target).addClass("btnActive");
}
function activeBtn2(el, target){
    var element = $(el);
    var chi = element.children();

    $(chi).removeClass("filledContainer");
    $(target).addClass("filledContainer");
}
function activeBtnSVG(el, target){
    var element = $(el);
    var chi = element.children();

    $(chi).removeClass("filledGrey");
    $(target).addClass("filledGrey");
}
function activeBtnSVG2(el, target){
    var element = $(el);
    var chi = element.children();

    $(chi).removeClass("filledGreen");
    $(target).addClass("filledGreen");
}

function distribuirFiguras(container, cantidad, d=[]){
    var n = 0;
    var fig = d.length==0?["circulo", "cuadrado", "rectangulo"]:d;

    for (let index = 0; index < cantidad; index++) {
        var rand = Math.floor((Math.random() * fig.length));
        if(fig[rand] == "circulo"){
            $(container).append('<svg onclick="selectDragEl(this)" id="c'+index+'" data-name="Capa 2" class="animate__pulse animate__infinite animate__animated" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100px; height: 100px;cursor: move;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "circulo", "color": "#00f"}\'><defs><linearGradient spreadMethod="pad" id="fillGradientBlue" x1="0%" y1="84%" x2="100%" y2="16%"><stop offset="0%" style="stop-color:rgb(0,0,255);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(5,193,255);stop-opacity:1" /></linearGradient></defs><circle class="stW" cx="50" cy="50" r="38" fill="url(#fillGradientBlue)"/></svg>');//#00f
        }else if(fig[rand] == "cuadrado"){
            $(container).append('<svg onclick="selectDragEl(this)" id="c'+index+'" data-name="Capa 1" class="animate__pulse animate__infinite animate__animated" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100px; height: 100px;cursor: move;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "cuadrado", "color": "#0f0"}\'><defs><linearGradient spreadMethod="pad" id="fillGradientGreen" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(0,128,0);stop-opacity:1" /><stop offset="50%" style="stop-color:rgb(0,255,0);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(0,128,0);stop-opacity:1" /></linearGradient></defs><rect class="stW" x="16.33" y="16.33" width="67.33" height="67.33" fill="url(#fillGradientGreen)"/></svg>');//#0f0
        }else if(fig[rand] == "rectangulo"){
            $(container).append('<svg onclick="selectDragEl(this)" id="c'+index+'" data-name="Capa 3" class="animate__pulse animate__infinite animate__animated" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width:100px; height: 100px;cursor: move;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "rectangulo", "color": "#f00"}\'><defs><linearGradient spreadMethod="pad" id="fillGradientRed" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0%" style="stop-color:rgb(77,0,0);stop-opacity:1" /><stop offset="50%" style="stop-color:rgb(255,0,0);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(77,0,0);stop-opacity:1" /></linearGradient></defs><rect class="stW" x="5.33" y="23.65" width="89.33" height="52.69" fill="url(#fillGradientRed)"/></svg>');//#f00
        }
    }
}

function distribuirFiguras2(container, cantidad){
    var n = 0;
    var fig = ["circulo", "cuadrado", "triangulo"];//["circulo", "cuadrado", "rectangulo", "triangulo"];
    var sizes = [1, 0.5, 1.5];
    var colors = ["#ffe0e0", "#fff", "#e6e6e6"];
    var rand = Math.floor((Math.random() * fig.length));

    for (let index = 0; index < cantidad; index++) {
        var rand2 = Math.floor((Math.random() * sizes.length));
        if(fig[rand] == "circulo"){
            $(container).append('<div onclick="selectDragEl(this)" id="c'+index+'" style="width:100px; height: 100px;cursor: move;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "circulo", "color": "'+colors[rand2]+'", "size": '+sizes[rand2]+'}\' class="animate__pulse animate__infinite animate__animated figuresSizes m-3"><svg data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="transform: scale('+sizes[rand2]+');"><circle class="st0" cx="50" cy="50" r="38" fill="'+colors[rand2]+'"/></svg></div>');
        }else if(fig[rand] == "cuadrado"){
            $(container).append('<div onclick="selectDragEl(this)" id="c'+index+'" style="width:100px; height: 100px;cursor: move;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "cuadrado", "color": "'+colors[rand2]+'", "size": '+sizes[rand2]+'}\' class="animate__pulse animate__infinite animate__animated figuresSizes m-3"><svg data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="transform: scale('+sizes[rand2]+');"><rect class="st0" x="16.33" y="16.33" width="67.33" height="67.33" fill="'+colors[rand2]+'"/></svg></div>');
        }else if(fig[rand] == "rectangulo"){
            $(container).append('<div onclick="selectDragEl(this)" id="c'+index+'" style="width:100px; height: 100px;cursor: move;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "rectangulo", "color": "'+colors[rand2]+'", "size": '+sizes[rand2]+'}\' class="animate__pulse animate__infinite animate__animated figuresSizes m-3"><svg data-name="Capa 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="transform: scale('+sizes[rand2]+');"><rect class="st0" x="5.33" y="23.65" width="89.33" height="52.69" fill="'+colors[rand2]+'"/></svg></div>');
        }else if(fig[rand] == "triangulo"){
            $(container).append('<div onclick="selectDragEl(this)" id="c'+index+'" style="width:100px; height: 100px;cursor: move;" draggable="true" ondragstart="dragstart(this, event)" ondrag="drag(this, event)" ondragend="dragend(this, event)" data-simbol=\'{"symbol": "triangulo", "color": "'+colors[rand2]+'", "size": '+sizes[rand2]+'}\' class="animate__pulse animate__infinite animate__animated figuresSizes m-3"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="transform: scale('+sizes[rand2]+');" xml:space="preserve"><polygon  class="st0" points="50,12.5 6.7,87.5 93.3,87.5 " fill="'+colors[rand2]+'"/></svg></div>');
        }
    }
}

function changeSymbolsCount(el=".figuresCount"){
    var container = $(el);
    var fig = ["fa-circle", "fa-star", "fa-heart", "fa-square-full", "fa-mountain"];
    var rand = Math.floor((Math.random() * fig.length));
    var rand2 = Math.floor((Math.random() * fig.length));

    var cant1 = Math.floor((Math.random() * 10));
    var cant2 = Math.floor((Math.random() * 10));

    var color1 = getColor();
    var color2 = getColor();

    do{
        rand2 = Math.floor((Math.random() * fig.length));
        console.log("==", rand, rand2);
    }while (rand == rand2);
    //equal simbols
    rand = rand2;
    color1 = color2;
    // end equals

    clearInputs();

    $(container[0]).html("");
    $(container[0]).attr("data-count", cant1);
    $(container[1]).html("");
    $(container[1]).attr("data-count", cant2);

    for(let i=0;i<cant1;i++) $(container[0]).append('<i class="fa animate__bounce animate__infinite animate__animated '+fig[rand]+' fa-2x m-1" style="color: '+color1.select+'"></i>');
    for(let i=0;i<cant2;i++) $(container[1]).append('<i class="fa animate__bounce animate__infinite animate__animated '+fig[rand2]+' fa-2x m-1" style="color: '+color2.select+'"></i>');
}

function getColor(){
    var colors = [
        "#F44336",
        "#E91E63",
        "#9c27b0",
        "#2196f3",
        "#00bcd4",
        "#673ab7",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#ff9800",
        "#ff5722",
        "#795548",
        "#607d8b",
        "#007bff",
    ];
    var rand2 = Math.floor((Math.random() * colors.length));
    return {//JSON.parse(
        "colors": colors,
        "select": colors[rand2]
    };
}

function randDistinct(cant=3, size=5){
    var dataR = size;
    var rand;
    var listFigures = [];
    var ne;
    var n = cant>dataR?dataR:cant;

    for (var i = 0; i < n; i++) {
        rand = Math.floor((Math.random() * dataR));
        ne = listFigures.find((e)=>e==rand);
        if(listFigures.length==0){
            listFigures.push(rand);
        }else{
            do{
                rand = Math.floor((Math.random() * dataR));
                ne = listFigures.find((e)=>e==rand);
            }while(ne!=undefined);
            listFigures.push(rand);
        }
    }
    return listFigures;
}