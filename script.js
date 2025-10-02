// document.querySelector('#center')
// .addEventListener("mousemove", function (dets){
//     // console.log(dets.clientX , dets.clientY);
//     console.log("card banao ");
// })
const btn =document.querySelector("#throttle");

const throttleFunction=(func , delay)=>{
    let prev =0;
    return (...args) => {
        let now =new  Date().getTime();
        if(now- prev> delay){
            prev =now;
            return func(...args);
        }
    }
}

document.querySelector('#center')
.addEventListener("mousemove", throttleFunction((dets)=>{
    // console.log("chala ")
    // your less repeatation code 
    // console.log(document.createElement("div"));
    var div=(document.createElement("div"));
    div.classList.add('imagediv');
    div.style.left = dets.clientX +'px';
    div.style.top = dets.clientY +'px';

    var img=document.createElement("img");
    img.setAttribute("src","Sk.jpg");
    div.appendChild(img);

    gsap.to(img, {
        y:"0",
        ease: Power1,
        duration: .6
    })
    gsap.to(img, {
        y:"100%",
        delay: .3,
        ease: Power2
        // duration: .2
    })

    document.body.appendChild(div);
    setTimeout(function(){
        div.remove();
    },2000)
} ,400));