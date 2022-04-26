import './index.css';
import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import Perfil from './Perfil';
import Lista from './Lista';

const lista = false;
const perfil = true;

function Root(props){
    
    const [seeLista, setseeLista] = useState(true);
    const [perPerfil, setPerfil] = useState();
    
    function switchpage(x){
        setseeLista(!seeLista);
        setPerfil(x);
    }
    
    return (
            seeLista ? <Lista switchpage={switchpage} /> : <Perfil person={perPerfil} />
	   );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
		<React.StrictMode>
			<Root />
		</React.StrictMode>
	   );
