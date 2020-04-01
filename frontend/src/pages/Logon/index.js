import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });
            

            localStorage.setItem('ongId', id);  // quando é feito o login, os dados de ID e NOME ficam salvos no storage do navegador, assim nas outras paginas
            localStorage.setItem('ongName', response.data.name); // é possivel pegar os dados do storage e usar o nome e o id da ONG que acessou

            history.push('/profile');
       } catch {
           alert('Falha no login. Tente novamente');
       }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register"> 
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}