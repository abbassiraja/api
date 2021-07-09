var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var nom = document.querySelector('.nom');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click' ,function(){


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
'&appid=c0754afadc0f58a3156d76b41217e962')
.then(response => response.json())
.then(data => {
    var nomValue = data['nom'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    nom.innerHTML = nomValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;


})

.catch(err => alert("wrong city nom!"))
})






//card annimation




$('.card-deck').hover(function(){
    if($(this).hasClass("active")){
        $('.card-deck .card').slideUp(function(){
            $('.card-deck').removeClass("active");
        }
        );
    }else{
        $('.card-deck').addClass("active");
        $('.card-deck.card').stop().slideDown();
    }
}

);


function verif()
{
    if(f.mail.value == "")
            { 
                alert("champ mail est obligatoire");
                return false ;
            }
}







  