class BankAccount {
    // Private fields: they cannot be accessed from outside the class
    private owner: string;
    private balance: number;
    private accountNumber: number;

    constructor(owner: string, balance: number, accountNumber: number) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    // Public methods
    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0.");
        }
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0.");
        }

        if (this.balance < amount ) {
            throw new Error("Insufficient funds.");
        }

        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }

    
}

const myAccount = new BankAccount("John Doe", 1000, 123456789);
myAccount.deposit(500); // Outputs: Deposited $500. New balance: $1500
myAccount.withdraw(200); // Outputs: Withdrew $200. New balance: $1300
// console.log(myAccount.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// console.log(myAccount.owner); // Error: Property 'owner' is private and only accessible within class 'BankAccount'.
// Puntos clave de este ejemplo:
// La clase BankAccount encapsula los detalles de la cuenta bancaria, como el propietario. Esto evita que se acceda a ellos directamente o se modifiquen desde fuera de la clase, protegiendo así la integridad de los datos.
// La clase proporciona métodos públicos (depositar, retirar y obtener Saldo) para interactuar con los datos. Este acceso controlado garantiza que el saldo no se pueda establecer directamente, sino que se pueda modificar de forma controlada a través de estos métodos.
// Métodos como depósito y retiro incluyen controles para garantizar que solo se permitan operaciones válidas, protegiendo aún más la integridad de los datos.
// Esta encapsulación garantiza que la clase BankAccount tenga control total sobre cómo se accede y modifica sus campos, aplicando las reglas o restricciones necesarias. Esto no sólo mantiene los datos seguros sino que también hace que el código sea más modular y más fácil de mantener.