'use strict';

function getQRinfo(merchant, order) {
    let url = `https://apisandbox.dev.clover.com/v3/merchants/${merchant}/orders/${order}/line_items?expand=taxRates`;
    console.log('Fetching URL: ', url);
    return fetch(url, {
      headers: {
      'Authorization': 'Bearer eab450a5-c750-e309-836c-f668ecb67d92'
      }})
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.elements.map(function(lineitem){
          return {name: lineitem["name"], price: lineitem.price/100} 
          });
       })
      .catch((error) => {
        console.error(error);
      });
}
export { getQRinfo };

function getTaxAndTip(merchant, order) {
    return fetch(`https://apisandbox.dev.clover.com/v3/merchants/${merchant}/orders/${order}/payments`,{
      headers: {
      'Authorization': 'Bearer eab450a5-c750-e309-836c-f668ecb67d92'
      }})
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.elements.map(function(moreitems){ 
         return {tax: (moreitems["taxAmount"] || 0)/100, tip: (moreitems["tipAmount"] || 0)/100}
          });
         })
      .catch((error) => {
        console.error(error);
      });
}
export { getTaxAndTip };
