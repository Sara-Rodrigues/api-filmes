//Declarando o pacote express
const express = require('express')
//Instanciando o express
const app = express()

const bodyParser = require('body-parser')

// aplicando o plugin body parser para trabalhar com JSON
app.use(bodyParser.json())

//Usando o método HTTP GET para listar meus filmes favoritos e declarando como 1° parâmetro uma (rota, endpoint, caminho)
// como 2° parâmetro uma função que recebe um objeto de requisição e resposta
app.get('/api/filmes', (requisicao, resposta) => {
    const filmes = [
        { nome: 'A Hidden Life' },
        { nome: 'Snyder Cut' },
        { nome: 'Monstros sa' },
        { nome: 'Wonder Woman'}
      ]

      resposta.send(JSON.stringify(filmes))
})

//Ouvindo a porta 3000
app.listen(3000, () => console.log('API já está funcionando e aceitando requisições!'))