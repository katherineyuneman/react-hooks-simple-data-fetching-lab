// create your App component here
import React, {useState, useEffect} from "react";

function App (){
  const [dogImage, setDogImage] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(data => {
      setDogImage(data.message)
    });
  }, [])


  if (!dogImage) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

 return (
   <div>
  <img src={dogImage} alt="A Random Dog" />
  </div>
 )
}

export default App;