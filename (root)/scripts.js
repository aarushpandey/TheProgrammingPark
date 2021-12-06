function signup() {
        let username = document.getElementById("username")
        let password = document.getElementById("password")
        let email = document.getElementById("email")
        let checkBox = document.getElementById("accept")
        let usernameVal = username.value
        let passwordVal = password.value
        let emailVal = email.value
        // console.log(usernameVal, passwordVal)    


        if (checkBox.checked == true) {

                if (usernameVal == localStorage.getItem("Username") || emailVal == localStorage.getItem("Email")) {
                        alert("User already exists")
                        return undefined

                } else if (localStorage.getItem("Username") == undefined || localStorage.getItem("Email") == undefined) {
                        localStorage.setItem("Username", usernameVal)
                        localStorage.setItem("Password", passwordVal)
                        localStorage.setItem("Email", emailVal)
                        alert("Successfully signed up!")

                }

                else {
                        alert("Only one account on one device")
                        return undefined
                }

        }

        else if (checkBox.checked == false) {
                alert("You must accept our terms and conditions")
                return undefined
        }


}

function login() {
        let username = document.getElementById("username")
        let password = document.getElementById("password")

        if (username.value == localStorage.getItem("Username")) {
                if (password.value == localStorage.getItem("Password")) {
                        alert("Welcome! " + username.value)
                } else {
                        alert("The password does not match.")
                }


        } else {
                alert("No such user!")

        }
}

function contact() {
        window.location.href = "mailto: theprogrammingpark@gmail.com"
}