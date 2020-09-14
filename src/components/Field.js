import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext; //1: Define context type -- To access data from LanguageContext on ( this.context ) 

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
};

export default Field;