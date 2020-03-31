import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register(){
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [whatsapp, setWhatsapp] =useState('');
    const [address_1, setAddress_1] =useState('');
    const [address_2, setAddress_2] =useState('');
    const [address_3, setAddress_3] =useState('');
    const [neighborhood, setNeighborhood] =useState('');
    const [city, setCity] =useState('');
    const [uf, setUf] =useState('');
  
    const history=useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            address_1,
            address_2,
            address_3,
            neighborhood,
            city,
            uf,
        };

        try{

            const response = await api.post('ongs',data);

            alert(`Seu ID do acesso: ${response.data.id}`);

            history.push('/bank');

        } catch{

            alert('Erro no cadastro, tente novamente.');

        }
    }
    
    return (
    <div className="register-conteiner">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem sua Instituição.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#fd9119"/>
                        Não tenho cadastro
                </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input 
                    placeholder="CNPJ / CPF"
                    value={address_3}
                    onChange={e => setAddress_3(e.target.value)}
                />

                <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input 
                    placeholder="WhatsApp" 
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                />

                <input 
                    placeholder="Logradouro"
                    value={address_1}
                    onChange={e => setAddress_1(e.target.value)}
                />

                <input 
                    placeholder="Numero"
                    value={address_2}
                    onChange={e => setAddress_2(e.target.value)}
                />

                <input 
                    placeholder="bairro"
                    value={neighborhood}
                    onChange={e => setNeighborhood(e.target.value)}
                />

                <div className="input-group">

                    <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}

                    />

                    <input 
                        placeholder="UF" 
                        style={{ width:90}}
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