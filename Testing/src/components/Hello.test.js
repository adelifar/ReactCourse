import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Hello component test suit", () => {
  test("Should have Hello tosinso in text", () => {
    //AAA
    //Arrange
    render(<Hello />);
    //Act

    //Assert
    const element = screen.getByText("Hello tosinso", { exact: false });
    expect(element).toBeInTheDocument();
  });
  test("Should have react course text", () => {
    //Assert
    render(<Hello />);
    //Act

    //Assert
    const element = screen.getByText(/react course/i);
    expect(element).toBeInTheDocument();
  });
  test('should show "changed" when button was clicked',()=>{
    //arrange
    render(<Hello/>)
    //act
    act(()=>{
        const buttonElement=screen.getByRole('button');
        userEvent.click(buttonElement);
    })
    

    //assert
    const element = screen.getByText('changed',{exact:false});
    expect(element).toBeInTheDocument();

  })

  test('shoud not show "react course" when button was clicked',()=>{
     //arrange
     render(<Hello/>)
     //act
     act(()=>{
         const buttonElement=screen.getByRole('button');
         userEvent.click(buttonElement);
     })
     
 
     //assert
     const element = screen.queryByText('react course',{exact:false});
     expect(element).not.toBeInTheDocument();
  })
});
