import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)

        }
    })
})


test("Should load restaurant menu component", async ()=>{
    await act(async ()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
         <RestaurantMenu/>
         </Provider>
         </BrowserRouter>))


    const accordianHeader = screen.getByText("Recommended (19)");
    console.log(accordianHeader);

    fireEvent.click(accordianHeader);

    const number = screen.getAllByTestId("foodItems");

    expect(number.length).toBe(19);

    const addBtns = screen.getAllByRole("button",{name: "Add +"});
    // console.log(addBtns.length)
    fireEvent.click(addBtns[0]);

    const cartAdded = screen.getByText("🛒 (1 items)");

    expect(cartAdded).toBeInTheDocument();
})