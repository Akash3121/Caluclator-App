let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector("input");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(document.querySelector('input').value);
        string = document.querySelector('input').value;
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'M+') {
            string = string + 100;
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        // console.log('Enter key pressed')
        string = document.querySelector('input').value;
        console.log(string+"input");
        string = eval(string);
        document.querySelector('input').value = string;
    }
});
