import {useFetchGifs} from"../../hooks/useFetchGifs";
import{renderHook} from "@testing-library/react-hooks";

describe('Pruebas en useFetchGifs',()=>{

    const category="Bleach";

    test('Debe retornar el estado incial', async()=>{

        const { result,waitForNextUpdate } = renderHook( ()=>useFetchGifs(category))
        const {data,loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test("Debe retornar un array de imagenes y el load en false",async ()=>{

        const { result, waitForNextUpdate } = renderHook( ()=>useFetchGifs(category));
        await waitForNextUpdate();

        const {data,loading} = result.current;

        expect(data.length).toBe(20);
        expect(loading).toBe(false);

    })

})