let isim =prompt("Adınız Nedir?") // Kullanıcıdan isim bilgisi aldık.

let ad=document.querySelector("#myName") //3. ve 4. satırda yazılanlar yardımıyla ismin html dosyasında bulunduğu id'yi kullanarak, kullanıcıdan aldığımız ismin ekranda görünmesini sağladık. 
ad.innerHTML=`${isim}` 


// saat bilgisi ekleme
function saat(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const g= new Date();
    let gun  = gunler[g.getDay()];

    // saatin/dakikanın/saniyenin 10'dan küçük olduğu durum ? doğruysa : değilse
    // burada amaç tek basamaklı değerleri sıfır ile göstermek

    hours = (hours<10) ? "0" + hours :hours;
    minutes = (minutes<10) ? "0" + minutes :minutes;
    seconds = (seconds<10) ? "0" + seconds :seconds;

    // saat bilgisini ekranda gösterme
    let time = hours + ":"+ minutes + ":" + seconds + " " + gun 
    let zaman = document.querySelector('#myClock')
    zaman.innerHTML = `${time}`

}

    
setInterval(saat, 1000);


