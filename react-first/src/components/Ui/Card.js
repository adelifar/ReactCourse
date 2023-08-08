import './Card.css';
function Card(props){
    let classes=props.className+' card';
    return <div className={classes}>{props.children}</div>
}
export default Card;