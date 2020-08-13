var API_KEY = '17871523-f4f6157e2d841a83f82aeeb38';
var korlátozoltán = 20;
console.log('CONSOLE-OZOLTÁN?')
class Zoltán{
    constructor(string, keyword){
        this.string = string;
        this.keyword = keyword.replace(" ","+");
    };

    getImageUrl(){
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(this.keyword);
        var imageUrl = "";

        $.ajax({
            url: URL,
            dataType: 'json',
            async: false,
            success: function(data) {
                if (parseInt(data.totalHits) < korlátozoltán){
                    korlátozoltán = parseInt(data.totalHits) -1;
                }
                var sorszámozoltán = Math.floor(Math.random() * korlátozoltán);
                imageUrl =  data.hits[sorszámozoltán].webformatURL;
            }
          });
          return imageUrl;
    }
}

var listázoltán = [
    new Zoltán("Unatkozoltán", "bored")
    ,new Zoltán("Talicskázoltán?", "wheelbarrow")
    ,new Zoltán("Kávézoltán?", "coffee")
    ,new Zoltán("Hugyozoltán?", "pee")
    ,new Zoltán("Hallgatózóltán?", "listening")
    ,new Zoltán("Dolgozoltán?", "working")
    ,new Zoltán("Táplálkozoltán?", "eat")
    ,new Zoltán("Korcsolyázoltán?","ice skate")
    ,new Zoltán("Napozoltán?","sunshine")
    ,new Zoltán("Fikázoltán?","phlegm")
    ,new Zoltán("Programozoltán?","programming")
    ,new Zoltán("Phpzoltán?","php")
    ,new Zoltán("Szülinapozoltán?","birthday")
    ,new Zoltán("Dohányzoltán?","smoke")
    ,new Zoltán("Coca-Colázoltán?","coca cola")
    ,new Zoltán("Sziesztázoltán?","taking nap")
    ,new Zoltán("HómOffizoltán?","home office")
    ,new Zoltán("Pofázoltán?","arguing")
    ,new Zoltán("Csajozoltán?","party girl")
    ,new Zoltán("Pálinkázoltán?","rakija")
    ,new Zoltán("Vacsorázoltán?","last dinner")
    ,new Zoltán("Biliárdozoltán?","8 ball pool")
    ,new Zoltán("Zsebhokizoltán?","pocket")
    ,new Zoltán("Betonozoltán?","concreting")
    ,new Zoltán("Pancsizoltán?","tub")
    ,new Zoltán("Macskázoltán?","cat")
    ,new Zoltán("Kutyázoltán?","dog")
    ,new Zoltán("Nyomozoltán?","FBI")
    ,new Zoltán("Hazudozoltán?","lying")
    ,new Zoltán("Bulizoltán?","party")       
    ,new Zoltán("Homokozoltán?","sand")       
    ,new Zoltán("Légkondizoltán?","air conditioning")       
];

var sorszámozoltán = Math.floor(Math.random() * (listázoltán.length));
document.getElementById('title').innerHTML = listázoltán[sorszámozoltán].string;

imageUrl =  listázoltán[sorszámozoltán].getImageUrl();
console.log(imageUrl);
document.getElementById("imgzoltan").src = imageUrl;
setTimeout(function(){ location.reload(); }, 2500);
