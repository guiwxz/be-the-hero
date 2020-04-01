import React from 'react';

import Routes from './routes';

import './global.css';

// IMUTABILIDADE: as variaveis nao sao atualizadas sem usar um estado
// ESTADO: é criado um estado sempre que uma seja necessario atualizar uma variavel com o useState
// COMPONENTE NO REACT: Uma função que retorna HTML, CSS
// JSX (JavaScript XML): É quando a linguagem HTML está escrita dentro do JavaScript

// PROPRIEDADES: parecido com um atributo no HTML, por padrão ele se chama "children", o conteúdo que vai ser mostrado
//               é o que é enviado para a função. Nesse caso dentro do header não está usando nenhuma propriedade específica (como um title por ex)
//               então estou passando para a funçao Header a propriedade children, que vai mostrar o valor que eu por dentro.


function App() {
  return (
    <Routes />
  );
}

export default App;