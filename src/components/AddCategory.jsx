import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        console.log(event.target.value);
        
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // setCategories((c) => [...c, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
        
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
