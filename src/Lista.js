import React from 'react';
import Select from './Select';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        }
    
    render() {
   
    return (
            <>
                <h1>Seleccione persona</h1>
                <Select addr="http://localhost:8100/getlista.php" switchpage={this.props.switchpage}/>
            </>
            );
    }
}

export default Lista;





