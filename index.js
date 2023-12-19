
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
const express = require('express')
const uuid = require('uuid')// bibioteca (id) unico
const port = 3000
const app = express()
app.use(express.json()) // estou avisando que o (express) vai usar por padrão (json)

const users = [] //array de pedidos

/* => O Middleware recebe 3 parametros, request, response, next
  middleware para verificar a existência do id passado na requisição
*/
const checkUserId = (request, response, next) => {
    const { id } = request.params // id do usuario

    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ error: 'Pedido não encontrado' })
    }

    request.userIndex = index
    request.userId = id
    next() // o next continua o fluxo da aplicação
}

//middleware para mostrar o método e a url de cada requisição
const requestType = (request, response, next) =>{
    console.log(`method: ${request.method}, URL: http://localhost:3000${request.url}`)
    
    next()
}

/*
POST /order: A rota deve receber o pedido do cliente, o nome do cliente e o valor do pedido, essas informações devem 
ser passadas dentro do corpo (body) da requisição, e com essas informações você deve registrar o novo 
pedido dentro de um array no seguinte formato:

 { id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
  order: "X- Salada, 2 batatas grandes, 1 coca-cola", 
  clientName:"José", 
  price: 44.50, 
  status:"Em preparação" 
}.

Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4,
 assim que o pedido for criado, você deve sempre colocar o status como "Em preparação".
*/

//  1º Criando rota com metodo =>post
app.post('/order', requestType, (request, response) => {
    const { order, clienteName, price, status } = request.body

    const user = { id: uuid.v4(), order, clienteName, price, status }

    users.push(user)

    return response.status(201).json(user)
})

//  2º Criando rota com metodo =>get, endereço da rota('/users')
app.get('/order', requestType, (request, response) => {

    // pardão json / forma do front-end se conectar com o back-end
    return response.json(users) // quando a chave e o valor são iguais posso fazer assim, o js entende 
    //   return response.json({ name: name, age: age })
})

//  3º Criando rota com metodo =>put
app.put('/order/:id', checkUserId, requestType, (request, response) => {
    
    const { order, clienteName, price, status } = request.body
    const index = request.userIndex
    const id = request.userId

    const updateUser = { id, order, clienteName, price, status }// atualiza usuario

    users[index] = updateUser

    return response.json(updateUser)
})

app.patch('/order/:id', checkUserId, requestType, (request, response) => {
    
    const { id } = request.params
    const { status } = request.body

    //const up = {id, order, clienteName, price, status }
    const index = users.findIndex(order => order.id === id)
    if (index === -1) {
        return response.status(404).json({error: "Pedido não encontrado"})
    }
    
    users[index].status = status || "Pronto"

    return response.json(users)
})

//  4º Criando rota com metodo =>delete
app.delete('/order/:id', requestType, (request, response) => {
    const index = request.userIndex
    users.splice(index, 1)

    return response.status(204).json()
})

//app.listen(3000) // porta 3000 posso fazer assim ou👇
app.listen(port, () => {
    console.log(`🚀 Server 😀Started On Port ${port} 🚀`)
})