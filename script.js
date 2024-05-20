const form = document.querySelector('form')
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = 'Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message ${mess.value}';

    Email.send({
        SecureToken: "0f57fd47-5d9d-4c6f-90cb-bd4a4e01a477",
        Host : "smtp.elasticemail.com",
        Username : "medianista.mandela@mscmarinduque.edu.ph",
        Password : "F87BC7BFE8CE57C361ABFA79C46293E3F742",
        To : 'medianista.mandela@mscmarinduque.edu.ph',
        From : "medianista.mandela@mscmarinduque.edu.ph",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message have been sent successfully!",
                icon: "success"
              });
        }
      }
    );
}
function checkInputs() {
    const item = document.querySelectorAll(".item")

    for (const item of item) {
        if (item.value =="") {
            item.classlist.add("error")
            item.parentElement.classlist.add("error")
        }
        if (item[1].value != "") {
            checkEmail();
        }
        item[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classlist.remove("error")
                item.parentElement.classlist.remove("error")
            }
            else 
            item.classlist.add("error")
            item.parentElement.classlist.add("error")
        })
    }
}
function checkEmail () {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-text.email");

    if (!email.value.match(emailRegex)) {
        item.classlist.add("error")
        item.parentElement.classlist.add("error")
        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address"
        }
        else {
            errorTxtEmail.innerText = "Email Address Can't be blank";
        }
    }
    else {
        item.classlist.remove("error")
        item.parentElement.classlist.remove("error")
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains ("error") && !email.classList.contains
    ("error") && !phone.classList.contains("error") && !subject.classList.
    contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }


});