class ContaBancaria {
    saldo = 0;
    constructor (titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    verSaldo(){
        console.log(`Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
    }
    depositar(valor){
        if(valor <= 0){
        console.log(`O valor depositado deve ser positivo`)
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso `);
    }
    sacar(valor){
        if(valor <= 0){
            console.log(`O valor saque deve ser positivo`);
        }
        if(valor > this.saldo){
            console.log(`O valor do saldo é insuficiente para saque`);
        }
        this.saldo -= valor;
        console.log(`Saldo atualmente: ${this.saldo.toFixed(2)}`);
    }
}
let conta1 = new ContaBancaria ("Fernando", 1000);

conta1.depositar(500);
conta1.depositar(500);
conta1.sacar(1000);
