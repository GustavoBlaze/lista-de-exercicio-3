module.exports = {
  run() {
    const [a,b,c,d] = [10, 2, 6, 9]
    console.log(`Adição (a,b,c,d): ${a+b+c+d}`)
    console.log(`Subtração (a,b): ${a - b}`)
    console.log(`Multiplicação (a,b,c): ${a * b * c}`)
    console.log(`Divisão (c,d): ${c/d}`)
  }
}
