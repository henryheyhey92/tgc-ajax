//Q1.
let load = document.querySelector('#load-btn');

load.addEventListener('click', async function(){
    //alert("hello");
    let content = document.querySelector('#content');
    let response = await axios.get('contact.txt');
    console.log(response.data);
    content.innerHTML = response.data;

});


