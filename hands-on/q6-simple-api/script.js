
let url = "https://programming-quotes-api.herokuapp.com/quotes/random"

document.querySelector('#btn').addEventListener('click', async function(){
    let response = await axios.get(`${url}`);
    console.log(response);
    let dp = document.querySelector('#quote');
    dp.innerHTML = response.data.en;


})