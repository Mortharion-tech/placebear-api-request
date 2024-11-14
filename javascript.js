const bear1 = document.getElementById("bear1");
const bear2 = document.getElementById("bear2");
const bear3 = document.getElementById("bear3");

async function getData(params) {
    let img1, img2, img3;
    try {
        img1 = await fetch('https://placebear.com/200/300');
        img2 = await fetch('https://placebear.com/300/450', { mode: 'no-cors' });
        img3 = await fetch('https://placebear.com/500/750', { mode: 'no-cors' });
        console.log(img1);
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