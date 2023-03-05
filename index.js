alert("Hi! Welcome to my Calculator")

let ans = ""
let but = document.querySelectorAll('.buttons')
Array.from(but).forEach((b) => {
    b.addEventListener('click', (e) => {
        if (e.target.innerHTML== "=") {
            ans = eval(ans)
            document.querySelector("input").value = ans;
        }
        else if ((e.target.innerHTML== "C")){
            ans=""
            document.querySelector("input").value = ans;

        }
        else if ((e.target.innerHTML== "Delete")){
            ans = ans.slice(0,ans.length-1)
            document.querySelector("input").value = ans;

        }

        else {
            ans = ans + e.target.innerHTML;
            document.querySelector("input").value = ans;
        }
    })
})