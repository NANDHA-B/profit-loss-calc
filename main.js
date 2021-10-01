var intialPrice= document.querySelector("#intial-price");
var noofStocks= document.querySelector("#noof-stocks");
var currentPrice= document.querySelector("#current-price");
var buttonClick= document.querySelector("#button-click");
var outputBox= document.querySelector("#output-box");

function calculate(){
    var intial=Number(intialPrice.value)
    var stocks=Number(noofStocks.value)
    var current=Number(currentPrice.value)
    if (current>intial)
    {
        var profit= (current-intial)*stocks;
        var profitPercent= (profit/(intial*stocks))*100;
        if(profitPercent>50){
            document.getElementById("down").style.visibility="hidden";
            document.getElementById("up").style.visibility="visible";
            }
        else{
        document.getElementById("up").style.visibility="hidden";
        document.getElementById("down").style.visibility="hidden";}
        showOutput(`your profit is ${profit} and profit percentage is ${profitPercent}%`.fontcolor("green"))
    }
    else if(current<intial){
        var loss=(intial-current)*stocks;
        var lossPercent=(loss/(intial*stocks))*100;
        if(lossPercent>50){
            document.getElementById("up").style.visibility="hidden";
            document.getElementById("down").style.visibility="visible";
        }
        else{
        document.getElementById("up").style.visibility="hidden";
        document.getElementById("down").style.visibility="hidden";}
        showOutput(`your loss is ${loss} and loss   percentage is ${lossPercent}%`.fontcolor("red"))
    }
    else{
        document.getElementById("up").style.visibility="hidden";
        document.getElementById("down").style.visibility="hidden";
        showOutput("no loss no gain")
    }
}
function showOutput(message)
{
    var result=message
    outputBox.innerHTML=result
}


buttonClick.addEventListener("click",calculate)

