let userArray = [];

(()=>{

    let userInfo = localStorage.getItem('userData')
    console.log(userInfo)

    if(userInfo){
       userArray = JSON.parse(userInfo)
    }

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)

    if(userLogged){
    window.location.href = 'index.html'
    }
})()

// ()();


// let validation 

let signUp = (e) => {
    e.preventDefault();

    let firstName = document.getElementById('username').value;
   
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    



    for(let i =0; i < userArray.length; i++){

        if(email === userArray[i].email){
        document.getElementById('emailError').textContent = `Your email is already exist`;
        setTimeout(() => {
            document.getElementById('emailError').textContent = ``;
        }, 3000)
        return;
        }
    }



    const userObj = {
        firstName,
        email,
        password,
        
    }



    userArray.push(userObj)

    let stringified = JSON.stringify(userArray);

    localStorage.setItem('userData', stringified)


    console.log(userArray);


    e.target.reset();

}