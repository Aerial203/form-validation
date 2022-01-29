const form = document.querySelector("#form")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const password_confirmation = document.querySelector("#password-confirmation")
const term = document.querySelector("#terms")
const error_list = document.querySelector(".errors-list")
const error = document.querySelector(".errors")

form.addEventListener("submit", e => {
    const error_msgs = []
    clear_errors()
    if(username.value.length < 6) {
        error_msgs.push("Username should have atleast 6 character")
    }
    if (password.value.length < 10) {
        error_msgs.push("Password should have atleast 10 character")
    } else {
        if (password.value !== password_confirmation.value) {
            error_msgs.push("Password must be same")
        }
    }

    if (!term.checked) {
        error_msgs.push("Terms and condition must be accepted")
    }

    if(error_msgs.length > 0) {
        e.preventDefault()
        show_error(error_msgs)
    }
    
})


function show_error(error_msgs) {
    error_msgs.forEach(e => {
        const li = document.createElement("li")
        li.innerText = e
        error_list.appendChild(li)
    })
    error.classList.add("show")
}


function clear_errors() {
    document.querySelectorAll(".errors-list li").forEach(e => { e.remove() })
    error.classList.remove("show") 
}