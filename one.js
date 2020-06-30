module.exports = {
  run() {
    const aluno = {
      nome: "joao",
      idade: 25,
      endereco: {
        logradouro: "RUA X",
        numero: 99,
        complemento: "",
        bairro: "Vila Santan Cecilia",
        cidade: "VR",
        uf: "RJ",
      },
    };
    
    const {nome, idade, endereco} = aluno;
    const {logradouro, numero, complemento, bairro, cidade, uf} = endereco
    
    console.log(`Aluno: ${nome}`)
    console.log(`Idade: ${idade}`)
    
    console.log(`Endereco: ${logradouro}, ${numero}, ${bairro}. ${cidade}/${uf}`)
    
    if (complemento) {
      console.log(`Endereço (complemento): ${complemento}`)
    }    
  }
}
