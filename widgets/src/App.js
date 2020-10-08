import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
    // const [colorText, setColor] = useState('black');
    return (
        <div>
            {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>*/}
            {/*{showDropdown ?*/}
            {/*    <Dropdown*/}
            {/*    selected={selected}*/}
            {/*    onSelectedChange={setSelected}*/}
            {/*    options={options}*/}
            {/*    colorText={colorText}*/}
            {/*    colorTextChange={setColor}*/}
            {/*/> : null*/}
            {/*}*/}
            <Translate/>
        </div>
    )
};