module.exports = {
  run() {
    const [a,b,c,d] = [true, false, true, false]

    console.log(`a igual b: ${a === b}`)
    console.log(`a ou b and c: ${(a || b) && c}`)
    console.log(`a difente de c: ${a !== c}`)
  }
}