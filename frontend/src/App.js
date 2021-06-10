import React, {useState} from 'react';

import './App.css';
import backgroundImage from './assets/foto.jpg';

import Header from './components/Header';

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front end web']);

    //usestate retorna um array com 2 posiçoes
    //1 variavel com o seu valor inicial
    //2 funçao para atualizar esse valor

    function handleAddProject(){
        //projects.push(`Novo Projeto ${Date.now()}`);

        setProjects([...projects, `Novo Projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />
            <img width={200} src={backgroundImage} />
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;