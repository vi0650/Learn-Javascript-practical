const accountId = 123456;                       // 1. (const) constant values you can not use this variable again
var accountGmail = "john.doe@gmail.com";        // 2. not preffered to use because of their past problems
let accountCity = "chennai";                    // 3. use it in project you can change dynamicaly
let accountName;                                // 4. you can use variable without assign a value - just run it

// accountId = 1167;
accountGmail = "jane.dock@gmail.com";
accountCity = "Bangalore";

/*
prefer not to use var
because of issue on block scope functional scope
*/

console.table([accountId, accountGmail, accountCity,accountName]);       // console.table make table format view