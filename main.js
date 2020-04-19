
 $(document).ready(function(){

   $(".griglia").on("click",".square", function(){
   var squareActive = $(this);

   $.ajax({
     url : "https://flynn.boolean.careers/exercises/api/random/int",
     method : "GET",
     success : function (data,stato){
       if (squareActive.data("active") == true) {

       }else{
         squareActive.find("span").html(data.response);
         if (data.response < 5) {
           squareActive.addClass("yellow");
         }else{
           squareActive.addClass("green");
         }
       }
       squareActive.data("active", true);
     },
     error : function ( richiesta, stato, errori){
       alert("errore " + errori, stato)
     }
   })
   console.log(squareActive.data("active"));
 })





















});
