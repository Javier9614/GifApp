import React from 'react';
import { shallow } from "enzyme";
import GifApp from "../GifApp";

describe("Pruebas en <GifApp>",()=>{

    test("Comprobamos que <GifApp> se muestra correctamente",()=>{

        const wrapper = shallow(<GifApp/>);
        expect(wrapper).toMatchSnapshot();
    })

    test("Debe mostrar una lista de categorias",()=>{

        const  categories = ["Konosuba", "Bleach"];
        const wrapper = shallow(<GifApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);

    })

})