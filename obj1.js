accounts = [
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'reacharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'nrft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'reacharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'reacharge',mode:'phonePay'
            },
        ]
    },

]
console.log(accounts.reduce((ac1,ac2)=>ac1.balance>ac2.balance?ac1:ac2).balance);


// let transactionHistory = {
//     credit:accounts.map((item)=>item.transaction).flat().filter((item)=>item.to==1002),
//     debit:accounts.find((item)=>item.acno==1002).transaction
// }
// console.log(transactionHistory);

// accounts.find((ac)=>ac.acno==1002).transaction.forEach((item)=>console.log(item))
// accounts.map((item)=>item.transaction).flat().filter((ac)=>ac.acno==1002).forEach((item)=>console.log(item))
// accounts.map((item)=>item.transaction).flat().filter((ac)=>ac.to==1002).forEach(item=>console.log(item))

// accounts.map((item)=>item.transaction).flat().filter((ac)=>ac.amount>5000).forEach(item=>console.log(item))

// accounts.map((item)=>item.transaction).flat().filter((mo)=>mo.mode=='gpay').forEach(mo=>console.log(mo))

// total number of accounts

// console.log(accounts.length);

// ac_type savings

// accounts.filter((type)=>type.ac_type=='savings').forEach(num=>console.log(num.acno))

// balance of account number 1000

// console.log(accounts.find((ac)=>ac.acno==1000).balance);