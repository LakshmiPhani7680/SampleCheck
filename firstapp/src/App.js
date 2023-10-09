// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Footer from './components/Footer';
import Card from './components/Card';
// function Heading(){
//   let title = "Hello World This is phani";
//   return(
//     <h1>{title}</h1>
//   )
// }
function App() {
  const cardStyle = {
    border: "10px black solid",
    borderRadius: "4px",
    height:"50%",
    width:"50%", 
    position:"absolute",
    left:"24em",
    top: "10em"
  }
  const childCards = {
    width:"90%",
    height:"31%",
    border: "4px solid blue",
    borderRadius: "2px",
    // position: "absolute",
    marginLeft:"2em"
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <Heading heading="my first app" />
      <div style={cardStyle}>
        <Card style={childCards} h1="first card heading 1" h2="first card heading 2" />
        <Card style={childCards} h1="first card heading 2" h2="first card heading 2" />
        <Card style={childCards} h1="first card heading 3" h2="first card heading 3" />
      </div>
      <Footer footer="This is footer" />
    </div>
  );
}

export default App;
