// Your code to validate your form and send the email will go here!
// All Fields are required for submission
// Make sure the Password and Confirm Password Match

// Let the user know if the passwords to not match
// Also let the user know when the email has been successfully sent


const form = document.getElementById('form');
const error_text= document.getElementById("text")

form.addEventListener("submit", function (event) {

    event.preventDefault();
    // Default variable from email.js DON"T DELETE !!! 
    const serviceID = 'default_service';
    const templateID = 'template_z98qu2w';

    // Create variables for passwords
    const password = document.querySelector("#password").value;
    const password2 = document.querySelector("#password2").value;

    if (password === password2) {
        // console.log("hello")
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {

                alert('Sent!');
            }, (err) => {
                //   btn.value = 'Send Email';
                alert(JSON.stringify(err));
            }
            )
    }
    else {
        error_text.textContent += "Passwords don't match ! Please try again. ";
    }

})


