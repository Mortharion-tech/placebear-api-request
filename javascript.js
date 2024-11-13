const bear1 = document.getElementById("bear1");
console.log(bear1);

async function getData(params) {
    let img1, img2, img3;
    try {
        img1 = await fetch('https://placebear.com/200/300', { mode: 'no-cors' });
        img2 = await fetch('https://placebear.com/300/450', { mode: 'no-cors' });
        img3 = await fetch('https://placebear.com/500/750', { mode: 'no-cors' });
        console.log(img1);
    } catch(err) {
        console.log(err);
    }
}

async function showData(params) {
    await getData();
    bear1.src='';
}

showData();