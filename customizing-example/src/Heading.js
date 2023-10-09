function Heading(props){
    return (
        <div>
             <h1>This is {props.title}</h1>
             <h2>{props.mine}</h2>
        </div>
    )
    // return(
    //     <h2>{props.mine}</h2>
    // );
}

export default Heading;