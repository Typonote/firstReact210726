import React from 'react';
import logo from './logo.svg';
import './App.css';

// JSX언어
function HeaderTag(){
    return (
         <header>
            <h1><a href="index.html">WEB</a></h1>
        </header>
    );
}

function NavTag(){
    return (
        <nav>
            <ol>
                <li><a href="1.html">html</a></li>
                <li><a href="2.html">css</a></li>
                <li><a href="3.html">js</a></li>
                <li><a href="100000001.html">react</a></li>
            </ol>
        </nav>
    );
}

function ArticleTag(){
    return (
        <article>
        <h2>welcome</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis deserunt, dolore aut pariatur repellat assumenda fugiat in laborum excepturi? Quo velit harum consequatur nostrum vitae quas deserunt, ratione iusto veritatis.
        </article>
    );
}


function App() {
  return (
    <div className="App">
    <HeaderTag />
    <NavTag />
    <ArticleTag />
    </div>
  );
}

export default App;