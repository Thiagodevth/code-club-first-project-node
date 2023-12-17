
/*
       - Query Params => meusite.com/users?name=thiago&age=28  / FILTROS
       - ROUTE Params => /users/2  / BUSCAR, DELETAR OU ATUALIZAR ALGO ESPÉCIFICO
       - ROUTE => app.get('/users/:id'(request, response) => {})
       - ROUTE :id vai esperar um valor dinamico
       - Request BODY => { "name":"thiago", "age":}

       - Middleware => INTERCEPTADOR => Tem o poder de parar ou alterar dados

       = GET          => Buscar informações no back-end
       = POST         => Criar informações no back-end
       = PUT / PATCH  => Alterar / Atualizar informações no back-end
       = DELETE       => Deletar informaçõs no back-end

       = Middleware => INTERCEPTADOR => Tem o poder de parar ou alterar dados da requisição

*/
// importar framework (express) para o index.js
const express = require('express')// Framework
const uuid = require('uuid')// bibioteca (id) unico
const port = 3000
const app = express()
app.use(express.json()) // estou avisando que o (express) vai usar por padrão (json)

const users = []
// 5º => O Middleware recebe 3 parametros, request, response, next
const checkUserId = (request, response, next) => {
    const { id } = request.params // id do usuario
    const index = users.findIndex(user => user.id === id)
    if(index < 0){
        return response.status(404).json({error: 'user not found'})
    }

    request.userIndex = index
    request.userId = id
    next() // o next continua o fluxo da aplicação

}
//  1º Criando rota com metodo =>get, endereço da rota('/users')
app.get('/users', (request, response) => {
  
    // pardão json / forma do front-end se conectar com o back-end
    return response.json(users) // quando a chave e o valor são iguais posso fazer assim, o js entende 
//   return response.json({ name: name, age: age })
})
//  2º Criando rota com metodo =>post
app.post('/users', (request, response) => {
    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(users)
})
//  3º Criando rota com metodo =>put
app.put('/users/:id', checkUserId, (request, response) => {
    const { name, age } = request.body // informações do usuario pelo corpo
    const index = request.userIndex
    const id = request.userId
    
    const updateUser = { id, name, age }// atualiza usuario

    users[index] = updateUser

    return response.json(updateUser)
})
//  4º Criando rota com metodo =>delete
app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex
    users.splice(index,1)
    return response.status(204).json()
})









//app.listen(3000) // porta 3000 posso fazer assim ou👇
app.listen(port, () => {
    console.log(`🚀 Server 😀Started On Port ${port} 🚀`)
})