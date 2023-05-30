import { render ,screen} from "@testing-library/react"
import Async from "./Async"

describe('Async test suit',()=>{
    test('renders posts if request was successful',async()=>{
        //arrange
        //mocking 
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async ()=>[{id:'i1',title:'first post'},{id:'ii',title:'sdfs'}]
        })
        render(<Async/>)

        //act

        //assert
        const elements=await screen.findAllByRole('listitem');
        expect(elements).not.toHaveLength(0);
    })
})