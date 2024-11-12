const bear = document.getElementById("bear");
console.log(bear);

async function getData(params) {
    let img;
    try {
        img = await fetch('https://placebear.com/200/300', { mode: 'no-cors' });
        console.log(img);
    } catch(err) {
        console.log(err);
    }
}

async function showData(params) {
    await getData();
}

showData();