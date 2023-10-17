

let container =document.querySelector(".container");
let generateBtn =document.querySelector(".generate-btn");
let qrInput =document.querySelector(".qr-input");
let qrImg=document.querySelector(".qr-image");

generateBtn.onclick= function(){       
 if(qrInput.value.length>0){
    generateBtn.innerText="Generating the QR ";
    qrImg.src=" https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=" + qrInput.value;
   qrImg.onload= function(){
    container.classList.add("active");
      generateBtn.innerText="Generate QR";
   }
}
}