document.getElementById("loginForm").addEventListener('submit', function(event){
    event.preventDefault();

    let usernameValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;

    if(usernameValue && passwordValue){
        alert('Login successfully!');
    }
    else{
        alert('Fill the both fields!');
    }
});