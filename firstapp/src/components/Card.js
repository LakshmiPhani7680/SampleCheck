function Card(props){
    return(
        <div className="Card" style={props.style}>
            <h1>{props.h1}</h1>
            <h2>{props.h2}</h2>
        </div>
    )
}

export default Card;