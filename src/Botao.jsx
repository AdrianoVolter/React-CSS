import "./Botao.css"

function Botao({ativo}) {
    return ( <button className={ativo ? 'botao-ativo' : 'botao-inativo'}>Ativo</button> );
}

export default Botao;
