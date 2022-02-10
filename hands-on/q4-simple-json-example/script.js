let btn = document.querySelector('#load-image-btn');
let content = document.querySelector('#artwork');

btn.addEventListener('click', async function(){
    let response = await axios.get('artwork.json');
    content = response.data
    document.querySelector('#title').innerHTML = content.title;
    document.querySelector('#image').src = content.image_url;

    // console.log(response.data);
    // let h1 = document.createElement('h1');
    // let img = document.createElement('div');
    // h1.innerHTML = response.data.title;
    // img.innerHTML = `<img src=${response.data.image_url} width=\"400px\" height=\"400px\">`;
    // img.className = response.data.class;

    // content.appendChild(h1);
    // content.appendChild(img);

})