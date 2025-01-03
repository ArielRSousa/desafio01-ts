export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount
      console.log(`Você depositou ${amount}. Seu novo saldo é de R$${this.balance}.`)
    }else{
      console.log('Conta inválida')
    }
  }

  withdraw = (amount: number): void => {
    if(!this.validateStatus()){
      console.log('Conta inválida')
      return;
    }if(amount <= 0){
      console.log('Valor inválido')
      return;
    }if(amount > this.balance){
      console.log('Saldo insuficiente')
      return;
    }
    this.balance -= amount;
    console.log(`Você sacou ${amount}. Seu novo saldo é de R$${this.balance}.`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
