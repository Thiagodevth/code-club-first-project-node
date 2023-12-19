# DESAFIO NODE.js


Projeto na parte de Back-End onde trabalhei os metodos GET, POST PUT e DELETE, e cada um desse tem uma função especifica, (GET)=> Buscar informações no back-end e mostra, (POST)=> Criar informações no back-end,  e para este projeto uso um Framework bastante conhecido, chama-se (Express.JS), é um framework para Node.js que fornece recursos mínimos para construção de servidores web (PUT / PATCH)=> Alterar / Atualizar informações no back-end, (DELETE)=> Deletar informaçõs no back-end, esse projeto é voltado para back-end, também uso uma API que cria  ID de usuario unico , o (UUID) Um Identificador Único Universal, que é um número de 128 bits usado para identificar informações em sistemas de computação.
 usei o middleware para mostrar o método e a url de cada requisição, e mais outro middleware para verificar a existência do id passado na requisição.
 
<h1>Dsafio NODE</h1>
POST /order: A rota deve receber o pedido do cliente, o nome do clientee o valor do pedido,essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: 
{ 
 id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
 order: "X- Salada, 2 batatas grandes, 1 coca-cola", 
 clientName:"José", price: 44.50, 
 status:"Em preparação" 
 }.
  Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido for criado, você deve sempre colocar o status como "Em preparação".

GET /order: Rota que lista todos os pedidos já feitos.

PUT /order/:id: Essa rota deve alterar um pedido feito já. Pode alterar um ou todos os dados do pedido. idO pedido deve ser enviado nos intervalos da rota.

DELETE /order/:id: Essa rota deve excluir um pedido já feito com o idenviado nos parâmetros da rota.

GET /order/:id: Essa rota recebe os idparâmetros e deve retornar um pedido específico.

PATCH /order/:id: Essa rota recebe o id nas configurações e assim que ela para chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

<br>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="logo-js">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)"  alt="logo-js">
<br>
<br>
<h2>Rota (POST) Cria</h2>
<img src="./assets/Captura de Tela (51).png">
<br>
<h2>Rota (GET) Busca</h2>
<img src="./assets/Captura de Tela (52).png">
<br>
<h2>Rota (DELETE) Deleta </h2>
<img src="./assets/Captura de Tela (54).png">
<br>
<h2>Rota (PUT) GET mostra usuario atualizado por PUT</h2>
<img src="./assets/Captura de Tela (55).png">
<br>
<h2>Rota (DELETE) GET mostra usuario deletado por DELETE</h2>
<img src="./assets/Captura de Tela (56).png">
<br>
<h2>Rota (POST) <h3>usuario está com o pedido e o status está em preparação</h3></h2>
<img src="./assets/Captura de Tela (61).png">
<br>
<h2>Rota (PATCH) <h3>PATCH atualiza o status do pedido para pronto</h3></h2>
<img src="./assets/Captura de Tela (62).png">
<br>
<h2>uso um Middleware que é chamado em todas as rotas e tem um console que mostra o método da requisição(GET/POST/PUT/DELETE) e também a URL da requisição </h2>
<img src="./assets/Captura de Tela (63).png">
<br>
