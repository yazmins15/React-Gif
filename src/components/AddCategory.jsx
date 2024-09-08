import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState(['']);

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const valor = String(inputValue).trim();
        console.log("inputvalue: "+valor);
        if(valor.length <= 1) return;
        //setCategory(categories => [inputValue,...categories]);
        onNewCategory(valor);
        setInputValue('');
    }

    return (
            <form onSubmit = {(event) => onSubmit(event)}>        
                <input 
                    type = "text"
                    placeholder="Buscar gifs"
                    value={ inputValue }
                    // onChange= {(event) => onInputChange(event)}
                    onChange= {onInputChange}
                />
            </form>
        )
}




