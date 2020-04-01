import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault(); // PEGA O EVENTO DE CADASTRO COMO PARAMETRO E PREVINE QUE A PAGINA FAÇA O PROCESSO PADRAO DE RECARREGAR A PAGINA QUANDO ELE DA SUBMIT

        const data = {   // guarda todas informações numa variavel data
            name, email, whatsapp, city, uf
        };

        try{
            const response = await api.post('ongs', data); // aqui faz o envio dos dados que o usuario colocou para o backend. Junto ele aguarda uma resposta pra mostra uma msg
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/'); // foi importado o useHistory, ai usou essa variavel history pra que apos ser feito o cadstro o usuario voltar pra tela de login

        }catch(err){
            alert('Erro no cadastro, tente novamente');
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#e02041" />
                        Volte para o Logon
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}            // e.taget.value = isso representa o valor do input, e está sendo colocado dentro da variavel name lá no estado. Pois
                        onChange={e => setName(e.target.value)} // a variavel setName atualiza a variavel name.
                                 // Arrow Function = função no formato reduzido, o "e" é o parametro que ela recebe e o depois da flecha "=>" é o corpo da função
                    />            
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}            
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}            
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}            
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}            
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );

}