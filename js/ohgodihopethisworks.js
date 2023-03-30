let n = $(window).height();
let scrheights=n-105;
let h = document.getElementById('head');
h.style.height=(scrheights + "px");
let hbox=document.getElementById('hbox')
let num= scrheights/8;
hbox.style.height=(num+"px");


function cataloguelink()
{
    document.getElementById('Cbox').scrollIntoView();
}

function shoplink()
{
    document.getElementById('shopBox').scrollIntoView();
}

function aboutuslink()
{
    document.getElementById('ABtitle').scrollIntoView();
}
