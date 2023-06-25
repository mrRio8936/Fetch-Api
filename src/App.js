// import logo from './logo.svg';
import './App.css';
import React from 'react';



class StarWars extends React.Component{

  constructor(){
    super()
    this.state ={
      loadedCharacter:false,
      name:null,
      height:null,
      image:null,
      gender : null,

    }
  }

  getcharacters(){
    console.log("Get a new charact from a button")
    const randomNumber = Math.round(Math.random()*50)

    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
    .then(response =>response.json())
    .then(data=>{
      // const imgsrc = data.image
      this.setState({
        name:data.name,
        height:data.height,
        image:data.image,
        gender:data.gender,
        loadedCharacter:true,
      })
    })
    
  }

  render(){
    return (
      <div>
        
        {  
        
         this.state.loadedCharacter &&
          <div>
              <img src = {this.state.image} alt = "something" className='img'></img>
              <h2>Name: {this.state.name}</h2>
              <h2>Height: {this.state.height} m</h2>
              <h2>Gender: {this.state.gender}</h2>
              
          </div>

        }
        <button type= "button" onClick = {()=>this.getcharacters()} className = "btn">Randomize</button>
        
        
      </div>
    )
  }
  
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
