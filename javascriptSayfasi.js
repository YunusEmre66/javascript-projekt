document.querySelector("h1").innerText="Selam Suat";

//Prompt tan girilen 3 sayidan en büyügünü bulma

/*var a=prompt("Sayi giriniz: ");
var b=prompt("Sayi giriniz: ");
var c=prompt("Sayi giriniz: ");
var sayilar=[a,b,c];
let buyuk=0;
for(let i in sayilar){
if(sayilar[i]>buyuk){
buyuk=sayilar[i];
}
}
console.log(buyuk);*/

//Girilen dogum yilina göre ehliyet alinip alinamayacagini hesaplama.Eger 18 yasindan kücükse kac yil sonra ehliyet alabilir?
let ehliyetYasi=18;
let d=new Date().getFullYear();
let dogYil=prompt("Dogum yilinizi giriniz: ");
let yas=d-Number(dogYil);
console.log(yas);
if(yas>=ehliyetYasi){
    console.log("Ehliyet alabilirsiniz")
    document.getElementById("mesaj1").innerHTML="Ehliyet alabilirsiniz";
}else{
    console.log("Ehliyet alabilmeniz icin : " +(ehliyetYasi - yas) + " yil beklemelisiniz")
    document.getElementById("mesaj1").innerHTML="Ehliyet alabilmeniz icin : " + (ehliyetYasi - yas) + " yil beklemelisiniz"
}
//Girilen ay degerine göre mevsim ifadesi
let ay=12;
console.log(ay);
switch(ay){
    case 0:case 1:case 2:
        console.log("Mevsim KIS");
    break;
    case 3:case 4:case 5:
        console.log("Mevsim ILKBAHAR");
    break;
    case 6:case 7:case 8:
        console.log("Mevsim YAZ");
    break;
    case 9:case 10:case 11:
        console.log("Mevsim SONBAHAR");
    break;
    default:
        console.log("Yanlis deger"); 
}