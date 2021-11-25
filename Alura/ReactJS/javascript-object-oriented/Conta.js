export class Conta {
    constructor (saldoInicial, cliente, agencia) {
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }

    depositar (valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    sacar (valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar (valor, taxa) {
        const valorSacado = taxa * valor;
        
        if (valorSacado <= this._saldo) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    get saldo () { return this._saldo; }

    get cliente () { return this._cliente; }

    set cliente (novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

}