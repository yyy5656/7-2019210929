    let ry={
        "name":"ryy",
        "id":166565656
    }    
    const xhr = new XMLHttpRequest();
                xhr.open("get","http://39.107.142.107:3000/mock/25/getText",true);
                xhr.send();
                xhr.onreadystatechange = function () {
               if (xhr.readyState === 4) {
                     if (xhr.status === 200) {
                         console.log(JSON.parse(xhr.responseText))
                         console.log('请求成功');
                    }else{
                         console.log("请求失败");
                    }
                }
                }


    const xhr1= new XMLHttpRequest();
                xhr1.open("post","http://39.107.142.107:3000/mock/25/testPost",true);
                xhr1.setRequestHeader("Content-type","applicationg/json");
                xhr1.send(JSON.stringify(ry));
                xhr1.onreadystatechange = function () {
               if (xhr1.readyState === 4) {
                     if (xhr1.status === 200) {
                        console.log(JSON.parse(xhr.responseText))
                        console.log(JSON.parse(xhr1.responseText))
                        console.log('请求成功');
                    }else{
                         console.log("请求失败");
                    }
                }
                }