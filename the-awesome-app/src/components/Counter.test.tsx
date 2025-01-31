import {render, screen, fireEvent} from '@testing-library/react';
import { Counter } from './Counter';


it("render Counter", () => {

    render(<Counter initialValue={5}/>);
    const element = screen.getByText("Counter : 5");
    expect(element).toBeInTheDocument();

})

it("render Counter and inc the count", () => {

    render(<Counter initialValue={5}/>);
    const element = screen.getByText("Counter : 5");
    expect(element).toBeInTheDocument();

    const incBt = screen.getByText("Inc");
    fireEvent.click(incBt);
    const updatedelement = screen.getByText("Counter : 6");
    expect(updatedelement).toBeInTheDocument();

})