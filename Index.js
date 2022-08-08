const homepage = document.getElementById("Home");
const productPage = document.getElementById("Products");
const serviceConatiner = document.getElementById("serviceContainer");
const service_btns = [...document.querySelectorAll("summary .btn")];

var details = [...document.querySelectorAll('details')];
var contact_form_elements1 = [...document.querySelectorAll('input')]
var contact_forms_elements2 = [...document.querySelectorAll('select')].concat(contact_form_elements1)
var contact_forms_elements3 = [...document.querySelectorAll('option')].concat(contact_forms_elements2)

// document.addEventListener('click', function (e) {
//     // console.log(e.target)

//     if ((e.target) && details.some(f => { return !contact_forms_elements3.includes(e.target) && f.contains(e.target).length != 0 })) {
//         details.forEach(f => f.removeAttribute('open'));
//     }
// })






var summaries = [...document.querySelectorAll('summary')];



document.addEventListener('click', function (e) {

    summaries.forEach(
        (f) => {

            if (f.contains(e.target) == true) {
                if (f.parentElement.getAttribute("open") == "true") {
                    f.parentElement.removeAttribute("open")
                }


                else {
                    f.parentElement.setAttribute("open", "true")
                }
            }
            // else if (summaries.includes(e.target)) {
            //     f.parentElement.removeAttribute("open")
            // }
        })



})





var serviceImgs = [...document.getElementsByClassName('service-component')]

window.addEventListener('scroll', function () {
    if (window.scrollY > 0 && window.scrollY < 700) {
        serviceImgs[0].classList.add('highlightImg');
        serviceImgs[1].classList.remove('highlightImg');
        serviceImgs[2].classList.remove('highlightImg');
    }
    if (window.scrollY > 700 && window.scrollY < 1400) {
        serviceImgs[0].classList.remove('highlightImg');
        serviceImgs[1].classList.add('highlightImg');
        serviceImgs[2].classList.remove('highlightImg');
    }
    if (window.scrollY > 1400) {
        serviceImgs[0].classList.remove('highlightImg');
        serviceImgs[1].classList.remove('highlightImg');
        serviceImgs[2].classList.add('highlightImg');
    }

})



document.addEventListener("click", function (e) {
    // var sel = [...document.getElementsByClassName('selected')];
    service_btns.forEach((b) => {

        if (b == e.target) {

            b.classList.add("selected");
            b.parentElement.nextElementSibling.firstElementChild.setAttribute("name", "myForm1")

        }
        else if (service_btns.includes(e.target)) {

            b.classList.remove("selected");
            b.parentElement.parentElement.removeAttribute("open");
            b.parentElement.nextElementSibling.firstElementChild.setAttribute("name", "myForm")
        }
    })

    // sel.ParentElement.nextElementSibling.firstElementChild.setAttribute("name", "myForm1")

})







function submit() {
    console.log("submit")
    const currDate = new Date();
    let date = document.forms["myForm1"]["Date"].value;
    // console.log(date)
    let name = document.forms["myForm1"]["Name"].value;
    let email = document.forms["myForm1"]["Email"].value;
    let phone = document.forms["myForm1"]["Phone"].value;
    let OTP = document.forms["myForm1"]["OTP"].value;
    let Aadhar = document.forms["myForm1"]["Aadhar"].value;



    while (true) {
        console.log(name)
        if (name.length == 0) {
            alert("Please enter valid name ")
            document.forms["myForm1"].elements["Name"].focus();
            break;
        }

        if (!ValidateEmail(email)) break;

        if (!phonenumber(phone)) break;

        if (date) {
            const day = parseInt(date.slice(9, 11));
            const month = parseInt(date.slice(6, 8));
            const year = parseInt(date.slice(0, 3));

            if (year < currDate.getFullYear()) {
                alert("enter valid date")
                document.forms["myForm1"].elements["Date"].focus();
                break;
            }
            else if (year == currDate.getFullYear()) {
                if (month < currDate.getMonth()) {
                    alert("enter valid date")
                    document.forms["myForm1"].elements["Date"].focus();
                    break;
                }
                else if (month == currDate.getMonth() && day <= currDate.getDate()) {
                    alert("enter valid date")
                    document.forms["myForm1"].elements["Date"].focus();
                    break;
                }
            }
        }

        else {
            alert("Please give the date of arrival");
            document.forms["myForm1"].elements["Date"].focus();
            break;
        }

        if (!Aadharnumber(Aadhar)) break;

        if (OTP.length == 0) {
            alert("Please enter OTP");
            break;
        }


        confirm("Are you sure you want to submit?")

        // var sel=[...document.getElementsByClassName("selected")][0];

        document.forms["myForm1"]["Name"].value = null;
        document.forms["myForm1"]["Email"].value = null;
        document.forms["myForm1"]["Phone"].value = null;
        document.forms["myForm1"]["Date"].value = null;
        document.forms["myForm1"]["OTP"].value = null;
        document.forms["myForm1"]["Aadhar"].value = null;

        break;

    }
}


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {

        return true;

    } else {

        alert("Invalid email address!");

        document.forms["myForm1"].elements["Email"].focus();

        return false;

    }

}


function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if ((inputtxt.match(phoneno))) {

        return true;
    }
    else {
        alert("Please enter valid phone number");
        document.forms["myForm1"].elements["Phone"].focus();
        return false;
    }
}

function Aadharnumber(inputtxt) {
    var phoneno = /^\d{12}$/;
    if ((inputtxt.match(phoneno))) {

        return true;
    }
    else {
        alert("Please enter correct Aadhar number");
        document.forms["myForm1"].elements["Aadhar"].focus();
        return false;
    }
}



function submitFeedback() {
    let name = document.forms["myForm"]["Name"].value;
    let email = document.forms["myForm"]["Email"].value;
    let phone = document.forms["myForm"]["Phone"].value;
    let subject = document.forms["myForm"]["Subject"].value;

    while (true) {
        if (name.length == 0) {
            alert("Please enter valid name ")
            document.forms["myForm1"].elements["Name"].focus();
            break;
        }


        if (!ValidateEmail(email)) break;



        if (!phonenumber(phone)) break;

        if (subject.length == 0) {
            alert("Please enter Subject ")
            document.forms["myForm1"].elements["Subject"].focus();
            break;
        }

        confirm("Sure to send the feedback?")

        document.forms["myForm"]["Name"].value = null;
        document.forms["myForm"]["Email"].value = null;
        document.forms["myForm"]["Phone"].value = null;
        document.forms["myForm"]["Subject"].value = null;

        break;
    }


}

function bookKizashi() {
    localStorage.setItem("carName", "c4");
    window.location.href = "http://127.0.0.1:5501/pages/Services.html";
}
function bookSwift() {
    localStorage.setItem("carName", "c3");
    window.location.href = "http://127.0.0.1:5501/pages/Services.html";
}
function bookErtiga() {
    localStorage.setItem("carName", "c2");
    window.location.href = "http://127.0.0.1:5501/pages/Services.html";
}
function bookBrezza() {
    localStorage.setItem("carName", "c1");
    window.location.href = "http://127.0.0.1:5501/pages/Services.html";
}


