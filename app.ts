import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const minhaConta = new PeopleAccount(123456789, 'Dio', 123456)
const contaEmpresa = new CompanyAccount('Dio Enterprises', 654321)

console.log(minhaConta)

minhaConta.deposit(100)

minhaConta.getBalance()

minhaConta.withdraw(100)

minhaConta.getBalance()

console.log('-='.repeat(20))

console.log(contaEmpresa)

contaEmpresa.getLoan(1000)

console.log(contaEmpresa)

