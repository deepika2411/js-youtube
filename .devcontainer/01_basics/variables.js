const account_Id = 8376
let account_City = 'Delhi'
var account_State = 'Bengaluru'
account_type = 'saving'
let account;

// account_Id=1234
account_City = 'hyderabad'
account_State = 'jaipur'
account_type = 'fd'

/* Prefer to use const and let only. We can change the value of let var but we 
can never change the vslue of const*/

console.log([account_City, account_Id, account_State, account_type, account]);
console.table([account_City, account_Id, account_State, account_type, account]);