let body = {
    "name": 'ry',
    "id": 16555565
}
fetch('http://39.107.142.107:3000/mock/25/testPost', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (myJson) {
        console.log(myJson);

    });

fetch('http://39.107.142.107:3000/mock/25/getText', {
        method: 'GET',
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (myJson) {
        console.log(myJson);

    });