const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345" 
// don't use var(it is old now)
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
