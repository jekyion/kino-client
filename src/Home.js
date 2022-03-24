import logo from './media/logo.jpg';
import popcorn from './media/popcorn.jpg'
import './css/home.css';


function Home() {
  return (
    <header className="App-header">
      <div className="first_pic">
        <div style={{width: "600px"}}>
        <h1>A TRULY</h1>
        <h1>CINEMATIC</h1>
        <h1 >EXPIERENCE</h1>
        </div>
        <img  src={logo} className="App-logo" alt="logo" />
      </div>
      <div id="second_pic">
      <img  src={popcorn} className="popcornPhoto" alt="logo" />
        <div style={{width: "600px"}}>
        <h1> WITHIN </h1>
        <h1> REACH FOR </h1>
        <h1 > EVERYONE </h1>
        </div>
        
      </div>

    </header>

  );
}

export default Home;
