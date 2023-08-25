import './Card.css';

//To control the interface/classes of the card/Expenses section
const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;