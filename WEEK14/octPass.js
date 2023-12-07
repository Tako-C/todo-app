const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkPass(password) {
    let result = true; // Initialize result to true
    if(password === null || password === undefined) {
        result = false;
    }
    

    if (password.length < 8) {
        result = false;
    } else {
        let b = 0;

        for (let i = 0; i < password.length; i++) {
            if (number.includes(Number(password[i]))) {
                b++;
            }
        }

        if (b < 1) {
            result = false;
        }
    }

    return result;
}

console.log(checkPass(''));
