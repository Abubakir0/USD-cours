const api_url = 'https://api.cryptonator.com/api/ticker/btc-usd';

function addLeadingZero(num) {
  return (num <= 9) ? ("0" + num) : num;
}

function makeHttpObject() {
  try {
    return new XMLHttpRequest();
  } catch (error) {}
}

function bitcoinGetData() {
var request = makeHttpObject();
request.open("GET", api_url, false);
request.send(null);
return request.responseText;
}

function bitcoinDataHandler() {
var raw_data_string = bitcoinGetData();
var data = JSON.parse(raw_data_string);
var price = data.ticker.price;
return price;
}

function update(i) {
    if (2  > i) {
        setInterval(function() {
            document.getElementById("asdf").innerHTML = "$" + bitcoinDataHandler();
        }, 10000);
    } 
}
document.getElementById("asdf").innerHTML = "$" + bitcoinDataHandler();
update(0);