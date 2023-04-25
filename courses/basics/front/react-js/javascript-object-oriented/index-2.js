import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 123456789);
const gerente = new Gerente("Ricardo", 5000, 987654321);
const cliente = new Cliente("Lais", 4567, "123456789");

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("123456789");

const diretoEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456789");

console.log(diretoEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);