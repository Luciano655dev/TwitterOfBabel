# Twitter de Babel
<img align="left" src="https://user-images.githubusercontent.com/83819836/223575174-41d4acf4-9909-48df-882a-23bd830d4fde.png"></img>

## Conceito
### Baseado no site <a href="https://libraryofbabel.info">Biblioteca de Babel</a>, o <a href="https://twitter.com/BabelTw1tter">Twitter of Babel</a> é um bot do Twitter que visa criar todas as possibilicades de letras possíveis, consequentemente formando palavras e frases inteiras de forma aleatória dentro do Twitter.
### Atualmente, o Bot está no início de seu desenvolvimento, portanto sinta-se livre para mandar novas Issues e Pull Requests, colaborando com o projeto

</br>
</br>
</br>
</br>

# Instalação
#### Pre-requisitos: <a href="https://nodejs.org/en/">NodeJS</a>, <a href="https://git-scm.com">Git</a> e <a href="https://code.visualstudio.com">Visual Studio Code</a> (Opicional)
### No seu terminal, crie um clone do repositório com

```
git clone https://github.com/Luciano655dev/TwitterOfBabel.git
```

### E depois, instale as dependências necessárias com

```
git install
```

# Como usar
### Primeiramente, você precisar criar um **Bot no Twitter**
#### Como o intuito deste pequeno tutorial não é te ensinar a criar um bot, recomendamos seguir a <a href="https://developer.twitter.com/en/docs/platform-overview">documentação oficial do Twitter</a>
### Na pasta `./src`, crie um arquivo no formato `.env` e coloque as seguintes informações sobre seu bot:

```js
NODE_ENV="development"
API_KEY="..."
API_SECRET="..."
ACCESS_TOKEN="..."
ACCESS_SECRET="..."
BEARER_TOKEN="..."

APP_ID="..."
```
## IMPORTANTE
### Antes de iniciar o servidor, execute o comando `npm run tweet`, isso irá postar um tweet e criar o arquivo .json, essencial para o servidor funcionar

### Logo depois, é só usar esse comando para iniciar o servidor:
```
npm start
```

### Você também pode usar o <a href="https://www.npmjs.com/package/nodemon">Nodemon</a> com o comando
```
npm install nodemon
```
### E depois, mudando o comando `start` no `package.json` para
```
{
  ...
  "scripts": {
    "start": "node ./src/index.js" -> "start": "nodemon ./src/index.js"
  }
  ...
}
```
### e só usar o comando `npm start` para rodar com nodemon

# Contribua com o projeto!
### Como contribuir:
1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

### Por enquanto, estou trabalhando sozinho neste projeto, então fique a vontade para contribuir da forma que desejar!

