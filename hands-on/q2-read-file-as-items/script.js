let load = document.querySelector('#load-btn');
let content = document.querySelector('#content');


load.addEventListener('click', async function(){
    let response = await axios.get('items.txt');
    console.log(response.data.split(","));
    
    let fruitList = document.querySelector('#content');
    let fruits = response.data.split(",");
    for(let s of fruits)
    {
        let unOrderElement = document.createElement('li');
        unOrderElement.innerHTML = s;
        fruitList.appendChild(unOrderElement);
    }
   
})