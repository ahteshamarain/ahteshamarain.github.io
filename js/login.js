let userArray = [];

(() => {

    let userInfo = localStorage.getItem('userData')
    console.log(userInfo)

    if (userInfo) {
        userArray = JSON.parse(userInfo)
    }

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)

    if(userLogged){
    window.location.href = 'index.html'
    }

})()



let login = (e) => {
    


    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPass').value;


    let isEmailValid = false;

    for (let i = 0; i < userArray.length; i++) {

        // ******************for reference*********************

        // if(email === userArray[i].email && password === userArray[i].password){
        //     alert('valid email and password');
        // }else{

        //     document.getElementById('emailError').textContent = `Invalid Username or Password`;
        //     setTimeout(() => {
        //         document.getElementById('emailError').textContent = ``;
        //     }, 3000)
        //     return;
        // }

        if (email === userArray[i].email) {

            isEmailValid = true;

            if (password === userArray[i].password) {
                window.location.href = 'index.html'
                localStorage.setItem('loggedUser', JSON.stringify(userArray[i]));
            }
            else {
                document.getElementById('passError').textContent = `Invalid Password`;
                setTimeout(() => {
                    document.getElementById('passError').textContent = ``;
                }, 3000)
            }
        }
    }


    if (!isEmailValid) {


        document.getElementById('emailError').textContent = `Invalid Email`;
        setTimeout(() => {
            document.getElementById('emailError').textContent = ``;
        }, 3000)

    }




}