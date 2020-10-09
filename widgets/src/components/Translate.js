import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Russian',
        value: 'ru'
    }
];
const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');
    return (
        <div className='ui form'>
            <div className="field">
                <label htmlFor="">Enter Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <Dropdown
                label='Select a language'
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
};

export default Translate;