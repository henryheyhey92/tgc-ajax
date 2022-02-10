let dp = document.querySelector('#load-btn');

dp.addEventListener('click', async function(){
    // let res1 = await axios.get('file1.txt');
    // let res2 = await axios.get('file2.txt');

    let req1 = axios.get('file1.txt');
    let req2 = axios.get('file2.txt');

    let res1 = await req1;
    let res2 = await req2;

    let textArea = document.querySelector('#content');
    textArea.innerHTML = res1.data +`\n`+ res2.data;
    //console.log(res1.data.split('\n'));
    //console.log(res2.data.split('\n')); 
    // let outPutText = document.createElement('p');
    // outPutText.innerHTML = `test`;
    // console.log(res1.data + res2.data);
    // textArea.appendChild(outPutText);


})