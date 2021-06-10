import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';
import backgroundImage from './assets/foto.jpg';

import Header from './components/Header';

 //usestate retorna um array com 2 posiçoes
    //1 variavel com o seu valor inicial
    //2 funçao para atualizar esse valor

function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        //setProjects([...projects, `Novo Projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Diego"
        });
        
        const project = response.data;

        setProjects([...projects, project]);
        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />
            
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;