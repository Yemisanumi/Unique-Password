function getUniquePassword (length) {
    let password = "";
    const characters = "abcdEHGTYULMGedsrtukvbt156789@#$%^";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor (Math.random () * characters.length);
        password += characters.charAt (randomIndex);
    }

    return password;
}
const uniquePassword = getUniquePassword (7)


console.log ("My Password:", uniquePassword);