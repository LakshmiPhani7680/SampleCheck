function Heading(props) {
    const styles = {
        backgroundColor: "red",
        // height: "20vh",
        width: "95.85%",
        padding: "2em",
        fontWeight: "bold"
    }
    return (
        <div style={styles}>
            {props.heading}
            <p>{Math.floor(Math.random() * 10) + 1}</p>
        </div>

    )
}

export default Heading;