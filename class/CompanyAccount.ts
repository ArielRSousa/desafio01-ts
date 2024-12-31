import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus()){
      if (amount > 0){
        this.balance += amount
        console.log(`Você recebeu um empréstimo de R$${amount}. Seu novo saldo é de R$${this.balance}.`)
      }else{
        console.log('Valor inválido')
      }
    }else{
      console.log('Conta inválida')
    }
  }
}
