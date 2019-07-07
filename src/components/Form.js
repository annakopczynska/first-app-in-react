import React from 'react';


const Form = props => {
    return (
        <nav className="search">
            <form >
                <input
                    type="text"
                    placeholder="wpisz miasto"
                    value={props.value}
                    onChange={props.change}
                />
            </form>
        </nav>
    );
}

export default Form;