import {getGifs} from '../../helpers/getGifs';
describe('Pruebas con getGifs fetch',()=>{

    test('Debe de traer 20 elementos',async ()=>{

        const gifs = await getGifs("Waifu");
        
        expect(gifs.length===20).toBe(true);
        //expect(gifs.length).toBe(20);

    })
    test('Debe de traer 0 elementos',async ()=>{

        const gifs = await getGifs("");
        
        expect(gifs.length === 0).toBe(true);
        //expect(gifs.length).toBe(0);

    })
})