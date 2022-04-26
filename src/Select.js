import {useState, useEffect} from 'react';

export default function Select(props) {
        
    let optionlist=[{id: "x", nombre: "..."}];
    const [lista, changeLista] = useState(optionlist);

    useEffect( function (){
        
        fetch(props.addr, {method: "POST"})
        .then( resp => resp.json() )
        .then(lista => {
            changeLista(lista);
            console.log(lista);
            }
        );

    },[]);
    
    function changeHandler(e){
        
        let headers = new Headers();
        headers.set("Content-Type", "application/x-www-form-urlencoded");
        
        fetch("http://localhost:8100/getdata.php",
            {method: "POST",
            headers: headers,
            body: `pos=${Number(e.target.value)}`})
        .then( resp => resp.json() )
        .then(perfil => {
            props.switchpage(perfil);
            //console.log(perfil);
            }
        );
        /*
        let xhttp = new XMLHttpRequest();

        xhttp.onload = function () {

            let lista = JSON.parse(this.responseText);
            props.switchpage(lista);

        };

        xhttp.open("POST", "http://localhost:8100/getdata.php");
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(`pos=${Number(e.target.value)}`);
        */
        console.log(e.target.value);
    } 
    
    let Optionlist = lista.map( x => <option key={x.id} value ={x.id}> {x.nombre} < /option>);
    
    Optionlist.unshift(<option key={"in"} value ={"in"}> Choose a Person: < /option>)
    return (
            <select id="persons" name="persons" onChange={changeHandler}>
                 {Optionlist}   
            </select>
    );
}
