const ele = document.getElementById("ele1"); //requerimiento 3.1

const wallpaper = document.querySelector('.wallpaper');
const boxOver =document.querySelector('.boxOver');

let count = 2;



function pintar(color){ //  3.2 funcion con parametro de color
   if(color == 'yellow'){
    
    count % 2 != 0? 
    ele.style.backgroundImage = 'url(https://i.ibb.co/8NpD8Zh/1516327.jpg)':
    ele.style.backgroundImage = 'url(https://i.ibb.co/C5t48PS/b-Ys-AFl-2.webp)'; 
    
     
    count % 2 != 0?
    wallpaper.style.backgroundImage = 'url(https://i.ibb.co/L5W7fng/wp5156000.webp)':
    wallpaper.style.backgroundImage = 'url(https://i.ibb.co/jJDmTCF/1902550.webp)';

    count % 2 != 0?
    boxOver.style.backgroundImage = 'url(https://i.ibb.co/L5W7fng/wp5156000.webp)':
    boxOver.style.backgroundImage = 'url(https://i.ibb.co/jJDmTCF/1902550.webp)'; 
    
    count ++;
    
   } 
}
boxOver.addEventListener("click", function() {
    pintar('yellow');   
}); 
  
/* fin desafio */


boxOver.addEventListener('mouseover', ()=> {
    wallpaper.style.filter = 'blur(5px)';
})

boxOver.addEventListener('mouseleave', ()=>{
    wallpaper.style.filter = 'blur(0)';
})