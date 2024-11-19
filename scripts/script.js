
function checkName(){
    var name = document.getElementById("name_new").value;
    var regex = /^[а-яА-ЯёЁa-zA-Z\s]{2,18}$/;

    if (regex.test(name)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Input correct";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Please, enter 2-18 characters";
        return false;
    }

}

function checkEmail(){
    var email = document.getElementById("e-mail_new").value;
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regex.test(email)) { // if testing of first is true
        document.getElementById("second_Check").style.color = "green";
        document.getElementById("second_Check").innerHTML = "Input correct";
        return true;
    }
    else {// if it's not
        document.getElementById("second_Check").style.color = "red";
        document.getElementById("second_Check").innerHTML = "Please, enter correct email";
        return false;
    }


}

function outputData() {
    var name = document.getElementById("name_new").value;
    var email = document.getElementById("e-mail_new").value;

    if(name != "" && email != ""){
        if(confirm("Подтвердите подписку на новости \n" + "Имя: " + name + "\n" + "Почта: " + email)){
            alert("Вы подписались на новости)))")
        }

    }
    else{
        alert("Не все данные ввведены");
    }

}


document.querySelectorAll('.block_img').forEach(image => {
    image.addEventListener('click', function() {
        this.classList.add('rotating');

        void this.offsetWidth;
        
        setTimeout(() => {
            this.classList.remove('rotating');
        }, 1000);

    });
});

function change_color(){
    const button = document.getElementById("button");
    button.style.backgroundColor = "deepskyblue";
}
