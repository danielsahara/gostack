import React from 'react';

import Header from './components/Header';

function App(){
    return (
        <>
        <Header title="Home Page">
            <ul>
                <li>home</li>
                <li>projects</li>
            </ul>
        </Header>
        <Header title="Projects">
        <ul>
                <li>home</li>
                <li>login</li>
            </ul>
        </Header>
        </>
    );
}

export default App;