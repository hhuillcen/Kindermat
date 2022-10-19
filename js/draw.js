// Seleccionamos el id del elemento 
var canvas; //const, let
// Contexto del canva para operaciones 2d 
var ctx; 
// Colocamos el curos en su posición inicial 
var coordenadas; 
// Con esta variable se inicia deshabilitado el dibujado en el Canvas 
var dibujar;
var changeColor;
var datos;

// Esperamos el contenido del elemento de ventana para hacer las operaciones 
function drawInit(tag="canvasDrawPen"){ 
    redimensionar(); // Redimensionamos el tamaño del canvas al cargar la Página 
    document.getElementById(tag).addEventListener('mousedown', iniciarDibujado); 
    document.getElementById(tag).addEventListener('mouseup', detenerDibujado); 
    document.getElementById(tag).addEventListener('mousemove', dibujo); 

    document.getElementById(tag).addEventListener('touchstart', iniciarDibujado, false);
    document.getElementById(tag).addEventListener('touchmove', dibujo, false);
    document.getElementById(tag).addEventListener('touchend', detenerDibujado, false);

    window.addEventListener('resize', redimensionar); 
} 
function starDatasCanvas(){
    // Seleccionamos el id del elemento 
    canvas = document.querySelector('#drawCanvas'); 

    // Contexto del canva para operaciones 2d 
    ctx = canvas.getContext('2d'); 

    // Colocamos el curos en su posición inicial 
    coordenadas = {x:0 , y:0}; 

    // Con esta variable se inicia deshabilitado el dibujado en el Canvas 
    dibujar = false;
    changeColor = "#fff";
    datos = {
        "color": {},
        "figura": {}
    }
}
// Redimensionamos el tamaño del canvas según el tamaño de la ventana 
function redimensionar(){ 
    //ctx.canvas.width = window.innerWidth; 
    //ctx.canvas.height = window.innerHeight; 
} 

// Actualizamos las coordenadas del cursor cuando un evento se dispara
function obtenerPosicion(event){
    event.preventDefault();
    //event.stopPropagation();
    if (event.changedTouches == undefined) {
        coordenadas.x = event.clientX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft); 
        coordenadas.y = event.clientY - (canvas.offsetTop + canvas.offsetParent.offsetTop);
    }else{
        coordenadas.x = event.changedTouches[0].pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
        coordenadas.y = event.changedTouches[0].pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop);
    }
    
} 

// Habilitamos el dibujado en el Canvas  
function iniciarDibujado(event){ 
    event.preventDefault();
    //event.stopPropagation();
    dibujar = true;
    obtenerPosicion(event);

    if(!datos.color.symbol){
        detenerDibujado();
        playSong("levels/incorrect.mp3");
        $("#resultTxt").html("Seleccione los colores adecuados para la figura");
    }else if(!datos.figura.symbol){
        detenerDibujado();
        playSong("levels/incorrect.mp3");
        $("#resultTxt").html("Seleccione los colores adecuados para la figura");
    }else if(datos.color.symbol!=datos.figura.symbol){
        detenerDibujado();
        playSong("levels/incorrect.mp3");
        $("#resultTxt").html("Seleccione los colores adecuados para la figura");
    }else{
        console.log(datos.figura.symbol, datos.color.symbol);
        playSong("levels/correct.mp3");
        $("#resultTxt").html("");
    }
} 

// Detenemos el dibujado 
function detenerDibujado(){
    //event.preventDefault();
    dibujar = false; 
}

function dibujo(event){
    //if (event.cancelable) {
    event.preventDefault();
    //event.stopPropagation();
    if (!dibujar) return;

    ctx.beginPath(); 

    ctx.lineWidth = 5; 

    // Trazo redondeado 
    ctx.lineCap = 'round'; 

    // Color del trazo del dibujo en el Canvas 
    ctx.strokeStyle = changeColor;

    // El cursor para comenzar a dibujar se mueve a esta coordenada 
    ctx.moveTo(coordenadas.x, coordenadas.y); 

    // La posición del cursor se actualiza a medida que movemos el mouse alrededor del Canvas 
    obtenerPosicion(event); 

    // Se traza una línea desde el inicio 
    ctx.lineTo(coordenadas.x , coordenadas.y); 

    // Dibujamos las líneas  
    ctx.stroke();
    ctx.fill();
    return true;
}


///////////////////////////
function dibujarCirculo(el="drawCanvas"){
    var canvas = document.getElementById(el);
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.setLineDash([2, 10]);
    context.lineCap = 'butt'; 
    context.strokeStyle = "#fff";
    context.fillStyle = "#000000";
    context.lineWidth = 10;
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.stroke();
    //context.fill();
}
function dibujarTriangulo(el="drawCanvas"){
    var canvas = document.getElementById(el);
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(centerX, canvas.height*.1);
    context.lineTo(canvas.width*.1, canvas.height*.9);
    context.lineTo(canvas.width*.95, canvas.height*.9);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.lineCap = 'butt';
    context.strokeStyle = '#fff';
    context.stroke();

    // the fill color
    //context.fillStyle = "#FFCC00";
    //context.fill();
}
function dibujarRectangulo(el="drawCanvas"){
    var canvas = document.getElementById(el);
    var context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(canvas.width*.1, canvas.height*.25, canvas.width*.8, canvas.height*.5);
    context.lineCap = 'butt'; 
    context.strokeStyle = "#fff";
    context.fillStyle = "#000000";
    context.lineWidth = 10;
    context.stroke();
}
function dibujarCuadrado(el="drawCanvas"){
    var canvas = document.getElementById(el);
    var context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(canvas.width*.1, canvas.height*.1, canvas.width*.8, canvas.width*.8);
    context.lineCap = 'butt'; 
    context.strokeStyle = "#fff";
    context.fillStyle = "#000000";
    context.lineWidth = 10;
    context.stroke();
}