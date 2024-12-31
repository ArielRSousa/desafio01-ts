import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const minhaConta = new PeopleAccount(123456789, 'Dio', 123456)
const contaEmpresa = new CompanyAccount('Dio Enterprises', 654321)
const minhaContaBonus = new BonusAccount('Cliente Bônus', 123456)

// People Account
console.log('-='.repeat(20))
console.log(minhaConta)
minhaConta.deposit(100)
minhaConta.getBalance()
minhaConta.withdraw(100)
minhaConta.getBalance()

// Company Account
console.log('-='.repeat(20))
console.log(contaEmpresa)
contaEmpresa.getLoan(1000)
console.log(contaEmpresa)

// Bonus Account
console.log('-='.repeat(20))
console.log(minhaContaBonus)
minhaContaBonus.deposit(100)
console.log(minhaContaBonus)