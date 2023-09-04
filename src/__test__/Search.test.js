import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RES_DATA from "../mocks/resListMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";



global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_RES_DATA);
        }
    })
})

test("Should search res list for burger text input", async ()=>{
    await act(async ()=>{
        <BrowserRouter> 
        <Body/>
        </BrowserRouter>
        
        
    });
    
    // const searchBtn = screen.getByTestId("searchButton");
    // console.log(searchBtn);
    // const searchInput = screen.getByTestId("searchInput");

    // fireEvent.change(searchInput, {target:{value: "burger"}});

    // fireEvent.click(searchBtn);

    // await screen.findAllByTestId("resCard");

    // const cardsAfterSearch = screen.getAllByTestId("resCard");

    // expect(cardsAfterSearch.length).toBe(2);


    
})