class Bank{
    accountDetails = {
        1000:{ acno:1000, username:"userone", password:"userone", balance:50000},
        1001:{ acno:1001, username:"usertwo", password:"usertwo", balance:5000},
        1002:{ acno:1002, username:"userthree", password:"userthree", balance:10000},
        1003:{ acno:1003, username:"userfour", password:"userfour", balance:6000},
    }

    // validate account number function

    validateAccount(acno){
       return( acno in this.accountDetails? true:false)
    }
    
    // authenticate account(acno, password)

    // authenticateAccount(acno,paws){
    //     if(this.validateAccount(acno)){
    //         if(paws == this.accountDetails[acno].password){
    //             console.log('Successfully authenticated');
    //         }else{
    //             console.log('Incorrect Password');
    //         }
    //     }else{
    //         console.log("Invalid Account Number");
    //     }
    // }
    // // Balance enquiry function

    balanceEnquiry(acno){
        this.validateAccount(acno)?console.log(`${acno} Account balance is ${this.accountDetails[acno].balance}`):console.log('Invalid Account number');
    }

    // fund transfer
    fundTransfer(fromAcno,toAcno,amount){
        if(this.validateAccount(fromAcno)&&this.validateAccount(toAcno)){
            let fromAcnoBalance = this.accountDetails[fromAcno].balance
            let toAcnoBalance = this.accountDetails[toAcno].balance
            console.log(`${fromAcno} current balance is ${fromAcnoBalance}
                        ${toAcno} current balance is ${toAcnoBalance}`);

            if(fromAcnoBalance>=amount){
                let updatedFromAcnoBalance = fromAcnoBalance-amount
                this.accountDetails[fromAcno].balance = updatedFromAcnoBalance
                let updatedToAcnoBalance = toAcnoBalance + amount
                this.accountDetails[toAcno].balance = updatedToAcnoBalance
                console.log('cash transfer successfully');
                console.log(`${fromAcno} new balance is ${ this.accountDetails[fromAcno].balance} `);
                console.log(`${toAcno} new blance is ${this.accountDetails[toAcno].balance}`);
            }else{
                console.log('Insufficient Balance');
            }
        }else{
            console.log('Invalid Account Number');
        }
    }
   
}

acno1 = new Bank()
console.log(acno1.validateAccount(1000)?'Account present in the Bank':'Invalid Account');
// acno1.authenticateAccount(1001,'usertwo')
acno1.balanceEnquiry(1002)
acno1.fundTransfer(1000,1002,50000)

