const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePassword(length) {
    const passwordLength = document.getElementById('passwordLength').value;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function renderPassword() {
    const password1 = generatePassword();
    const password2 = generatePassword();
    document.getElementById('passwordOne').textContent = password1;
    document.getElementById('passwordTwo').textContent = password2;

    let isPassword1Copied = false;
    let isPassword2Copied = false;

    // Check if passwords are copied manually
    const checkCopyInterval = setInterval(() => {
        const copiedText = document.getSelection().toString();
        if (copiedText === password1 && !isPassword1Copied) {
            isPassword1Copied = true;
            showNotification();
        }

        if (copiedText === password2 && !isPassword2Copied) {
            isPassword2Copied = true;
            showNotification();
        }

        if (isPassword1Copied && isPassword2Copied) {
            clearInterval(checkCopyInterval);
        }
    }, 500);

    function showNotification() {
        const toast = document.getElementById('toast');
        toast.classList.remove('hidden');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hidden');
        }, 2000);
    }
}

let isDarkMode = false;

function toggleMode() {
    const app = document.getElementById('app');
    const headOne = document.getElementById('headOne');
    const message = document.getElementById('message');

    if (isDarkMode) {
        app.classList.remove('dark-mode');
        app.classList.add('light-mode');
        headOne.style.color = '#273549';
        message.style.color = '#273549';
        isDarkMode = false;
    } else {
        app.classList.remove('light-mode');
        app.classList.add('dark-mode');
        headOne.style.color = '#FFFFFF';
        message.style.color = '#FFFFFF';
        isDarkMode = true;
    }
}






// let passwordOne = document.querySelector(".passwordOne");
// let passwordTwo = document.querySelector(".passwordTwo");


// let button = document.querySelector("#generate-pass");

// button.addEventListener("click", function() {
//     // console.log(getRandomCharacter());
//     passwordOne.textContent = generateRandomPassword();
// })

// function getRandomCharacter() {
//     let randomChar = Math.floor(Math.random() * characters.length);
//     return characters[randomChar]; 
// }

// function generateRandomPassword() {
//     let randomPassword = "";
//     for (let i = 0; i < passwordLength.length; i++) {
//         randomPassword += getRandomCharacter();
//     }
//     return randomPassword;
// }
