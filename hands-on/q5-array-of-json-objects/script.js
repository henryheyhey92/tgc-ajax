let btnClick = document.querySelector('#load-users-btn');
let allUsers = [];


btnClick.addEventListener('click', async function(){
    let response = await axios.get('users.json');
    let dp = document.querySelector('#all-users');
    allUsers = response.data.users;

    for(let u of response.data.users){
        dp.innerHTML += `<li>${u.firstName} ${u.lastName} 
        (${u.emailAddress})</li>`
    }
   
});

// document.querySelector('#btnFind').addEventListener('click', async function(){
//     let find = document.querySelector('#search').value;
//     let target = null;
//     for(let s of arr.firstName)
//     {
//         if(s.userId == find){
//             target = s;
//         }
//     }
//     alert(target.firstName +" "+ target.lastName);
// })

document.querySelector('#btnFind')
    .addEventListener('click', function () {
        let searchBy = document.querySelector('#search').value;
        let targetUser = null;
        for (let u of allUsers) {
            if (u.firstName == searchBy) {
                targetUser = u;
            }
        }
        alert(targetUser.firstName + " " + targetUser.lastName);
    })

