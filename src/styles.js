
    // Como utilizar styled-components:
    // 1 - crie um arquivo com a extensão .js ou .jsx
    // 2 - importe o styled-components


import styled from "styled-components"


    // 3 - crie um componente com a sintaxe abaixo
    // 4 - utilize o componente criado no arquivo que desejar
    // 5 - para estilizar o componente, utilize template literals (``) e dentro delas, utilize a sintaxe css
    // 6 - para utilizar o componente em mais de um arquivo, exporte-o em cada arquivo que desejar


// Exemplo de componente criado com styled-components 
// Pra a estilização do componente, utilize template literals (``) e dentro delas, utilize a sintaxe css   
export const Titulo = styled.h1`
    color: #f00;
    font-size: 20px;

`;
    
export const Botao = styled.button`
    background: #f00;
    color: #fff;
    font-size: 20px;
    padding: 10px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

`;