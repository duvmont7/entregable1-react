import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"
  
const images = ["image1, image2", "image3", "image4"]

function App() {

  const getRandomItem = (listItem) => {
    const randomIndex = Math.floor(Math.random() * listItem.length)
    return listItem[randomIndex]
  }

  const [quote, setquote] = useState(getRandomItem(db))
  const [imageImage, setImageImage] = useState(getRandomItem(images))

  const handledNewQuote = () => {
    setquote(getRandomItem(db))
    setImageImage(getRandomItem(images))
  }

  return (
    <div className={`App ${imageImage}`}>
      
    <ContainerInfo quote={quote} handledNewQuote={handledNewQuote}/>

    <img src="" alt="" />

    </div>
  )
}

export default App
