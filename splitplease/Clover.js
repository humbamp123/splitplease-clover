'use strict';

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDAHTfc0ea2keRQqtb7MDlIeasattpr58A",
    authDomain: "splitplease-2dcdd.firebaseapp.com",
    databaseURL: "https://splitplease-2dcdd.firebaseio.com",
    projectId: "splitplease-2dcdd",
    storageBucket: "",
    messagingSenderId: "417291829385"
};

const myapp = firebase.initializeApp(config);

var database = firebase.database();

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
            return {tax: (moreitems["taxAmount"] || 0)/100, tip: (moreitems["tipAmount"] || 0)/100};
          });
         })
      .catch((error) => {
        console.error(error);
      });
}
export { getTaxAndTip };

function writeReceiptData(receipt) {
    receipt.forEach((item, index) => {
        firebase.database().ref('orderId/' + 12345 + "-" + index).set({
            merchantID: "testmerchant",
            userName: "testuser",
            itemName: item.name,
            itemPrice: item.price,
            itemWhoPays: ""
        });
    });
}
export { writeReceiptData };

function getReceiptData(item) {
    console.warn(item);
    var ref = database.ref('orderId/12345-0/');
    return (ref.orderByChild("itemName").equalTo(item).on("child_added", function(snapshot) {
        console.warn(snapshot)
    }))
}

export { getReceiptData }
