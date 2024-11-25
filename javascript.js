const bearUrls = [
    'https://placebear.com/200/300',
    'https://placebear.com/300/450',
    'https://placebear.com/500/750'
];

const bearContainer = document.getElementById('bearContainer');

const proxyUrl = 'https://api.allorigins.win/raw?url=';

async function getImage(url) {
    try {
        const response = await fetch(proxyUrl + encodeURIComponent(url));
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return proxyUrl + encodeURIComponent(url);
    } catch(err) {
        if (err.message.includes('Failed to fetch') || err.message.includes('CORS')) {
            console.error('CORS error or network issue: ', err);
        } else {
            console.error('Failed to fetch image: ', err);
        }
        throw err;
    }
}

async function getData() {
    try {
        const imgUrls = await Promise.all(bearUrls.map(url => getImage(url)));
        console.log(imgUrls);
        return imgUrls;
    } catch(err) {
        console.log('Failed to get data: ', err);
        bearContainer.classList.add('error');
        return [];
    }
}

async function showData() {
    try {
        const imgUrls = await getData();
        imgUrls.forEach((url, index) => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Bear image ${index + 1}`;
            bearContainer.appendChild(img);
        });
    } catch(err) {
        console.log('Failed to show data: ', err);
        bearContainer.classList.add('error');
    }
    
}

if (!bearContainer) {
    console.error('Bear container element not found');
} else {
    showData();
}