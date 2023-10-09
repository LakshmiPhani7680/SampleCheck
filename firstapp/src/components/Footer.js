function Footer(props) {
    const styles = {
        width: "95.85%",
        padding: "2em",
        backgroundColor: "blue",
        position: "absolute",
        bottom: "0"
    }
    const elements = [10,12,14].map(elem => {return <li key={elem}>{elem * 1}</li>});
    return (
        <div style={styles}>
            {props.footer}
            <div>
                {/* <p>{Math.random()}</p> */}
                {/* <p>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</p> */}
                <p>
                  {
                    elements
                  }
                </p>
            </div>
        </div>
    )
}
export default Footer;