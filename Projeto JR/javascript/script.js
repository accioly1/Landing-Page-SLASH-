/*Código para abertura da barra de navegação no mobile*/
$(document).ready(function() {
$('#mobile_btn').on('click', function() {
$('#mobile_menu').toggleClass('active')
$('#mobile_btn').find('i').toggleClass('fa-x')
});
});
/*Código para abertura da barra de navegação no mobile*/


    /*Código para rolagem das imagens no Carrossel*/ 
    let count = 1;
    document.getElementById("radio1").checked = true;
    
    setInterval(function() {
    nextImage()
    }, 4000)
    
    function nextImage(){
        count++;
        if(count>4){
            count = 1;
        }
    
        document.getElementById("radio"+count).checked = true;
    }    
    /*Código para rolagem das imagens no Carrossel*/ 
    

    /*Código para abertura das respostas (dúvidas frequentes)*/
    document.addEventListener("DOMContentLoaded", function () {
        const faqs = document.querySelectorAll(".faq");
    
        faqs.forEach((faq) => {
            faq.addEventListener("click", () => {
                faq.classList.toggle("active");
            });
        });
    });
    /*Código para abertura das respostas (dúvidas frequentes)*/

    



   


    
    
    
   


