import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            const bonus = 10;
            const totalDeposit = amount + bonus;
            this.balance += totalDeposit;
            console.log(`Você depositou R$${amount}. Com o bônus de R$${bonus}, o total depositado foi R$${totalDeposit}. Seu novo saldo é R$${this.balance}.`);
        }else{
            console.log('Conta inválida');
        }
    }
}