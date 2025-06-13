let input= document.getElementById("inputbox");
input.addEventListener("input",validate);
function validate(){
    let form=document.querySelector(".mainForm");
    let pattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|srmist\.edu\.in|yahoo\.com|yahoo\.co\.in|outlook\.com)$/;
    if(input.value.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
    }else{
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}
