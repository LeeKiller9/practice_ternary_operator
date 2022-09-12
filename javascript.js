function check_sum(){
    let a = +prompt("a: ");
    let b = +prompt("b: ");
    let result = (a + b < 4) ? 'Below' : 'Over';
    document.write(result);
}

function login(){
    let login = prompt("Enter:");
    let message = (login === 'Employee') ? 'Hello' :  (login === 'Director') ? 'Greetings' : (login === '') ? 'No login' :  '';
    alert(message);
}