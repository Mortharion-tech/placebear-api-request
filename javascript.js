const bear1 = document.getElementById("bear1");
const bear2 = document.getElementById("bear2");
const bear3 = document.getElementById("bear3");

let proxyUrl = 'https://api.allorigins.win/raw?url=';

async function getImage(url) {
    try {
        const response = await fetch(proxyUrl + encodeURIComponent(url));
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return proxyUrl + encodeURIComponent(url);
    } catch(err) {
        console.error('Failed to fetch image: ', err);
        throw err;
    }
}

async function getData() {
    let img1, img2, img3;
    try {
        img1 = await getImage('https://placebear.com/200/300');
        img2 = await getImage('https://placebear.com/300/450');
        img3 = await getImage('https://placebear.com/500/750');
        console.log(img1);
        console.log(img2);
        console.log(img3);
        return { img1, img2, img3 };
    } catch(err) {
        console.log('Failed to get data: ', err);
    }
}

async function showData() {
    try {
        const { img1, img2, img3 } = await getData();
        bear1.src=img1;
        bear2.src=img2;
        bear3.src=img3;
    } catch(err) {
        console.log(err);
    }
    
}

showData();