import React, {useState} from 'react';
import PropTypes from 'prop-types';


const AddCategories = ({setCategories}) => {

    //si dejamos el useState() vacio nos saldra un warning
    //porque es undefined y digamos que eso a react no le gusta xD
    //si queremos dejarlo vacio lo ponemos como string vacio y fiesta
    const[inputValue, setInputValue] = useState("");


    const handleInputChange = (e) => {
        //Esto me permite cambiar el valor del input, es
        //porque de otra manera se quedaria estatico con 
        //el valor por defecto ("Categories")
        setInputValue(e.target.value);
        
    }


    const handleSubmit = (e) => {
        //Esto evita que se recargue la pagina al darle enter
        e.preventDefault();
        if(inputValue.trim().length>2){

            setCategories(categories => [inputValue,...categories]);
            setInputValue("");

        }
    }

    return(

        <form onSubmit={handleSubmit}>

            <input 
                type="text"
                value={inputValue}
                placeholder="Search all you need"
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategories.propTypes={
    setCategories: PropTypes.func.isRequired,
}
export default AddCategories;