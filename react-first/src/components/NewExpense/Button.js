import styles from './Button.module.css';
const Button = props => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
// import styled from "styled-components";
//
// const Button = styled.button`
// color:red;
// background:#8b005d;
// cursor:pointer;
// &:hover{
// background-color:white !important;
// color:blue;
// }
// @media(min-width:768px){
// width:auto;
// }
// `;
export default Button;