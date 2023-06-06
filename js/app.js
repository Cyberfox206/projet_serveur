// const lancer = document.getElementById("send_b");

// const httpRequest = new XMLHttpRequest();

// function reqlisener(event) {
//     console.log("onload: ", event);
//     console.log(httpRequest.response);
// }

// httpRequest.onload = reqlisener;
// httpRequest.onabort = (event) => {
//     console.log(`onabort: `, event);
// }

// httpRequest.onerror = (event) => {
//     console.log(`onerror: `, event);
// }

// httpRequest.onloadend = (event) => {
//     console.log(`onloadend: `, event);
// }

// httpRequest.onloadstart = (event) => {
//     console.log(`onloadstart: `, event);
// }

// httpRequest.onprogress = (event) => {
//     console.log(`onprogress: `, event);
// }

// httpRequest.onreadystatechange = (event) => {
//     console.log(`onreadystatechange: `, event);
// }

// httpRequest.ontimeout = (event) => {
//     console.log(`ontimeout: `, event);
// }

// httpRequest.open('GET', '', true);
// httpRequest.send();


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => { return res.json() })
    .then((data) => {
        console.log(data[0]);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name)
            console.log(data[i].email)
        }
    })


