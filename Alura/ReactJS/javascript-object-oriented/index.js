import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente_1 = new Cliente("Ricardo", "11122233309");
const cliente_2 = new Cliente("Alice", "88822233309");

const cc_1 = new ContaCorrente(cliente_1, 1001);
const cp_2 = new ContaPoupanca(50, cliente_2, 2030);
const cs_3 = new ContaSalario(cliente_1);

cs_3.depositar(200);
cs_3.sacar(100);

cc_1.depositar(500);
cc_1.transferir(200, cp_2);

console.log(cc_1);
console.log(cp_2);
console.log(cs_3);