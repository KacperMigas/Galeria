var zdjecie = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
var aktywne_zdjecie = 1;
var img = document.getElementById("duzy");

function pokaz_zdj()
{
    img.src = zdjecie[aktywne_zdjecie-1];
}

function prev()
{
    aktywne_zdjecie--;
    if(aktywne_zdjecie==0)
    {
        aktywne_zdjecie=5;
    }
    pokaz_zdj();
}

function next()
{
    aktywne_zdjecie++;
    if(aktywne_zdjecie > 5)
    {
        aktywne_zdjecie = 1;
    }
    pokaz_zdj();
}

function wyswietl_mini(zdjecie)
{
    aktywne_zdjecie = zdjecie;
    pokaz_zdj();
}