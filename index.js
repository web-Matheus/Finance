var ibovespa = document.getElementById('ibovespa')
var nasdaq =document.getElementById('nasdaq')
var cac =document.getElementById('cac')
var nikkei = document.getElementById('nikkei')
var dollar = document.getElementById('dollar')
var dolvaria = document.getElementById('dolvaria')
var euro = document.getElementById('euro')
var eurovaria = document.getElementById('eurovaria')




fetch('https://api.hgbrasil.com/finance?format=json-cors&key=54251203')
.then(function(res){
    return res.json()
}).then(function(data){
    console.log(data.results.currencies)
  
    const ibovespavalue = (data.results.stocks.IBOVESPA.variation)
    const nasdaqvalue = (data.results.stocks.NASDAQ.variation)
    const cacvalue = (data.results.stocks.CAC.variation)
    const nikkeivalue = (data.results.stocks.NIKKEI.variation)
// moedas
    const dollarvalue = (data.results.currencies.USD.buy)
    const dv = (data.results.currencies.USD.variation)
    const eurovalue = (data.results.currencies.EUR.buy)
    const euv = (data.results.currencies.EUR.variation)

    ibovespa.innerText = `${ibovespavalue}%`;
    nasdaq.innerText = `${nasdaqvalue}%`;
    cac.innerText = `${cacvalue}%`;
    nikkei.innerText = `${nikkeivalue}%`;
    // moedas
    dollar.innerText=`R$ ${dollarvalue}`
    dolvaria.innerText=dv
    euro.innerText=`R$ ${eurovalue}`
    eurovaria.innerText= euv;

    if(ibovespavalue < 0.00){
       ibovespa.style.color="red"
    }else{
        ibovespa.style.color="green"  
    }
    if(nasdaqvalue < 0.00){
        nasdaq.style.color="red"
     }else{
         nasdaq.style.color="green"  
     }
     if(cacvalue < 0.00){
        cac.style.color="red"
     }else{
         cac.style.color="green"  
     }
     if(nikkeivalue < 0.00){
        nikkei.style.color="red"
     }else{
         nikkei.style.color="green"  
     }
    //  moedas
    if(euv < 0.00){
        eurovaria.style.color="red";
     }else{
         eurovaria.style.color="green";
     }
     if(dv < 0.00){
        eurovaria.style.color="red";
     }else{
         dolvaria.style.color="green";
     }
})


