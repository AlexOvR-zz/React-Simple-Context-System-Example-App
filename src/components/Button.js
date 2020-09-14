import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value) }
                </LanguageContext.Consumer>
            </button>
        )
    }

    //2: Adding a Consumer Comp -- To access data from LanguageContext (Best Approach to access multiple context objects inside a single comp)
    render() {
        return (
            <ColorContext.Consumer>
                { (color)=> this.renderButton(color) }
            </ColorContext.Consumer>
        )
    }

};

export default Button;