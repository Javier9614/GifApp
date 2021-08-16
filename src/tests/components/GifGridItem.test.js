import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGrid/GifGridItem/GifGridItem";


describe('Puebas en <GifGridItem/>',() =>{

    const title = "Un titulo";
    const url = "https://localhost/gif.gif";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Debe mostrar el componente <GifGridItem/>',()=>{


        expect(wrapper).toMatchSnapshot();

    })

    test('Debe tener un parrafo con el title',()=>{
        const p = wrapper.find('h3');
        expect( p.text().trim() ).toBe(title);

    })

    test('Debe tener una imagen con el url y el title',()=>{
        const img = wrapper.find('img');
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
        

    })

    test('Debe tener animate__rotateInUpRight',()=>{

        //.at es necesario si tuvieseis mas de un div como es mi caso
        //para elegir el div que quieres comprobar que tenga esa clase
        const div = wrapper.find('div').at(0);
        const h3 = div.find('h3');
        expect(div.hasClass(("animate__rotateInUpRight"))).toBe(true);
        expect(h3.hasClass(("animate__rotateInUpRight"))).toBe(true);


    })

})