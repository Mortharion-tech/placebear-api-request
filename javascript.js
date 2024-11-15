const bear1 = document.getElementById("bear1");
const bear2 = document.getElementById("bear2");
const bear3 = document.getElementById("bear3");

let proxyUrl = 'https://cors-proxy.com/';

async function getImage(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.url;
    } catch(err) {
        console.error(err);
        throw err;
    }
}

async function getData(params) {
    let img1, img2, img3;
    try {
        img1 = await getImage('https://placebear.com/200/300');
        img2 = await getImage('https://placebear.com/300/450');
        img3 = await getImage('https://placebear.com/500/750');
        console.log(img1);
        console.log(img2);
        return { img1, img2, img3 };
    } catch(err) {
        console.log(err);
    }
}

async function showData(params) {
    try {
        const { img1, img2, img3 } = await getData();
        bear1.src=img1.url;
        bear2.src=img2.url;
        bear3.src=img3.url;
    } catch(err) {
        console.log(err);
    }
    
}

showData();