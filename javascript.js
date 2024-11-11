async function getData(params) {
    let img;
    try {
        img = await fetch('https://placebear.com/200/300', { mode: 'no-cors' });
        console.log(img);
    } catch(err) {
        console.log(err);
    }
}

getData();