import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente_1 = new Cliente("Ricardo", "11122233309");
const cliente_2 = new Cliente("Alice", "88822233309");

const cc_1 = new ContaCorrente(cliente_1, 1001);
const cp_2 = new ContaPoupanca(50, cliente_2, 2030);

cc_1.depositar(500);
cc_1.transferir(200, cp_2)

console.log(cc_1);
console.log(cp_2);