let list = document.querySelector('#book-list');

list.addEventListener('click', async function(){
    let response = await axios.get(`https://anapioficeandfire.com/api/books/`);

    console.log(response.data[1]);
    let display = document.querySelector('#display-book');
    let res = response.data[];
    for(let i = 0; i<response.length; i++)
    {
        display.innerHTML += `<li>book-name: ${res[i].name}</li>`
    }
    // for(let o in response.data)
    // {
    //     display.innerHTML += `<li>book-name: ${o.name}</li>`
    // }
})