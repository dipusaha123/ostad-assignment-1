class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount} into account ${this.accountNumber}.`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn $${amount} from account ${this.accountNumber}.`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Withdrawal amount must be greater than zero.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Create two instances of BankAccount class
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 2000);

// Demonstrate functionality
account1.displayAccountInfo();
console.log("After depositing $500:");
account1.deposit(500);
console.log("After withdrawing $200:");
account1.withdraw(200);
console.log("Current balance:");
console.log(account1.getBalance());
console.log();

account2.displayAccountInfo();
console.log("After depositing $1000:");
account2.deposit(1000);
console.log("After trying to withdraw $5000:");
account2.withdraw(5000);
console.log("Current balance:");
console.log(account2.getBalance());
