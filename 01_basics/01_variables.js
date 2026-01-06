const accountId = 12345
let accountEmail = "tejalbadgujar6@gmail.com"
var accountPassword = "12344"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed


accountEmail = "jjf@v.com"
accountPassword = "12345"
accountCity = "Bengluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
