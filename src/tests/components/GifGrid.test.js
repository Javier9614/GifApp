import React from 'react';
import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';

//Esto va a simular la llamada a la api para el test
jest.mock("../../hooks/useFetchGifs")

describe('Pruebas en <GifGrid>',()=>{

    
    const category = "Bleach";
    test("Debe mostrar <GifGrid/> correctamente", ()=>{
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true,
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();

    })

    test("Debe mostrar items cuando se cargan gifs UseFetchGifs",()=>{

        const gifs = [{
            id: '123',
            url: 'http://localhost/bgdyhsua.gif',
            title:'Cualquier cosa'
        },
        {
            id: '321',
            url: 'http://localhost/bgdyhsua.gif',
            title:'Cualquier cosa'
        }
    ]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false,
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").lenght).toBe(gifs.lenght);
        

    })
})