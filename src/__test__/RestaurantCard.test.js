import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA_PROMOTED from "../mocks/resCardPromotedMock.json";


test("Should render RestaurantCard component with props data", ()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("Wendy's Burgers");

    expect(name).toBeInTheDocument();
});

// test("Should render RestaurantCard with Promoted Label", ()=>{
//     render(<withPromotedLabel props = {MOCK_DATA_PROMOTED}/>);

//     const name = screen.findByText("Lovely Sweets");

//     expect(name).toBeInTheDocument();
// })