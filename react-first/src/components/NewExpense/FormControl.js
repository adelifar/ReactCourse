import styled from "styled-components";

const FormControl=styled.div`
&.invalid label{
    color: red;
}
&.invalid input{
    border-color: red;
}
& label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color:${props => (props.invalid)?'red':'black'} 
}

& input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    /*border: 1px solid #ccc;*/
    border: 1px solid ${props => (props.invalid)?'red':'#ccc'};
    width: 20rem;
    max-width: 100%;
}
`;

export  default FormControl;