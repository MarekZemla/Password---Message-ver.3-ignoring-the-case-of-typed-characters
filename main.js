

const input = document.querySelector("input");
const passwords = ['OnE', 'TwO', 'tHRee'];
const messages = ["super !", "works !", "great !"];
let div = document.querySelector('div');
text = "";



const showMessage = (e) => {
    div.textContent = "";
    const text = e.target.value;
    passwords.forEach((item, i) => {
        if (item.toUpperCase() === text.toUpperCase()){
            div.textContent = messages[i];
            e.target.value = "";
        } 
    })  
}
 input.addEventListener("input", showMessage);


input.addEventListener('focus', (e) =>{
e.target.classList.add('active');
});

input.addEventListener('blur', (e) =>{
e.target.classList.remove('active');
});

