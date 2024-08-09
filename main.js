
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
const div2 = document.getElementById('informacion2');
const url = 'https://script.google.com/macros/s/AKfycbzcFLaYL2ZccIQbv0hYI2pczL5MxHHB9dT3yiJlJdiW9YB5hluqYGdhSUhkDXb_8SXgHQ/exec';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let contenido = data.data;
//
    return contenido.map(function(radio) {
        //creamos un div de clase card
        let div1 = document.createElement('div');
        div1.classList.add("bg-success", "card", "m-1");
        div1.style.width ="7.5rem";
        div1.style.padding ="0";
        //creamos otro div de clase card body
        let div = createNode('div');
        div.classList.add("card-body");
        div.style.padding ="0";
        //agregamos la imagen
        let img = createNode('img');
        img.src = radio.LOGO;
        img.classList.add("card-img-top");

        //creamos h5 para el nombre de la estacion
        let h5 = createNode('h5');
        h5.classList.add("card-title", "text-center", "font-weight-bold");
        h5.textContent = radio.ESTACION;

        let div3 = document.createElement('div');
        div3.classList.add("d-flex","justify-content-center","hola");
        let a = createNode('a');
        a.classList.add("btn", "btn-primary");
        a.textContent= radio.ESTACION;
        a.id = radio.ESTACION;
        
        a.onclick = function (){
            const videoPlayer = document.getElementById('videoPlayer');
            const img_radio = document.getElementById('imgEst');
            const nom_est = document.getElementById('nomEst');
            img_radio.src = radio.LOGO;
            nom_est.textContent = radio.ESTACION;
            a.href="#inicio";
      
            // URL del archivo de video o URL del flujo en vivo
            const videoURL = radio.ENLACE;

            // Configuración del tipo de reproducción
            const canPlayType = videoPlayer.canPlayType('video/mp4');
            if (canPlayType) {
                videoPlayer.src = videoURL;
                } else {
                    console.error('No se puede reproducir el video en este formato.');
                    }

        }                
        append(div, img);
        append(div, h5);
        append(div,div3);
        append(div3, a);
        append(div1, div);
        append(div2,div1);
            
        })
    

})
.catch(function(error) {
    console.log(error);
});
