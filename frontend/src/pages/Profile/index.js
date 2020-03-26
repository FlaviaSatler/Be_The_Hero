import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg'
import { useEffect } from 'react';
import api from '../../services/api';
import { useState } from 'react';

export default function Profile(){

    const [incidents, setIncidents] = useState([])

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile',{
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    return(
       <div className="profile-container">
           <header>
               <img src={logoImg} alt="Logo Heroes" />
               <span>Bem Vinda, {ongName}</span>

               <Link to="/incidents/new" className="button">
                   Cadastrar novo caso
               </Link>
               <button type="button">
                 <FiPower size={18} color="#e02041" /> 
               </button>
           </header>

           <h1>Casos cadastrados</h1>
           <ul>
               {incidents.map(incident => (
                   <li key={incident.id}>
                    <strong>CASO: </strong>
                    <p>{incident.title}</p>

                    <strong>Descrição</strong>
                    <p>{incident.description}</p>

                    <strong>Valor</strong>
                    <p>{incident.value}</p>

                    <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                   </li>
               ))}               
           </ul>
       </div>
    )
}