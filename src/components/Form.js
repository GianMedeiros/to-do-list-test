import { useState } from 'react';

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Cadastrou o usuário ${name}, com a senha: ${password}`)
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" >Nome: </label>
                    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome"/>
                </div>
                <div>
                    <label htmlFor="password" >Password: </label>
                    <input id='password' name='password' type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                </div>
            </form>
        </div>
    );


}

export default Form