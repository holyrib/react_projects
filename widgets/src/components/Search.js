import React, {useState, useEffect} from "react";

const Search = () => {
    const [term, setTerm] = useState('');

    console.log('I run with every render');

    useEffect(() => {
        console.log('I run after every render and at initial render');
    } );

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        type="text"
                        onChange={event => setTerm(event.target.value)}
                        className="input"/>
                </div>
            </div>
        </div>
    );
};

export default Search;