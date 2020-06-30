module.exports = {
  run() {
    const saldo = (n) => n > 0 ? 'Saldo Positivo' : 'Insuficiência de Saldo'
    console.log(`1000 - ${saldo(1000)}`)
    console.log(`0 - ${saldo(0)}`)
  }
}