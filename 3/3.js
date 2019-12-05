const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", "http://39.107.142.107:3000/mock/25/getText");
    client.onreadystatechange = handler;
    //client.responseType = "json";
    //client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
};
getJSON("/post.json").then(function(json){
    console.log('Contents:'+json);
},function(error){
    console.log('出错了',error);
});


let ry={
    "name":"ry",
    "id":1666666
    }
const getJSON1 = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("POST", "http://39.107.142.107:3000/mock/25/testPost");
    client.onreadystatechange = handler;
    //client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send(JSON.stringify(ry));
  });
  return promise;
};
getJSON("/post.json").then(function(json){
    console.log('Contents:'+json);
},function(error){
    console.log('出错了',error);
});