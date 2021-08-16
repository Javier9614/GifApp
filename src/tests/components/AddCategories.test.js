import React from 'react';
import { shallow } from "enzyme";
import AddCategories from "../../components/AddCategories/AddCategories";

describe('Pruebas en <AddCategories>',() => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategories setCategories={setCategories} />);

    beforeEach(() => {
        //esta funcion sirve pare reinicializar todo el testeo
        jest.clearAllMocks();
        wrapper = shallow(<AddCategories setCategories={setCategories} />);
        
    })

    test('Debe de mostrarse correctamente',() => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar correctamente los cambios del input',() => {

        const input= wrapper.find("input");

        const value = "hola mundo";
        input.simulate('change', {target:{value:value }});
        
    })

    test('No debe de postear la info con submit',() => {

        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test("Debe llamar el setCategories y limpiar la caja de texto",()=>{

        
        const value = "hola mundo";
        wrapper.find("input").simulate('change', {target:{value}});

        wrapper.find("form").simulate('submit', {preventDefault(){}});

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find("input").prop("value")).toBe("");
        
    })

})