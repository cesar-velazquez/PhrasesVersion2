import { useState } from 'react'
import './App.css'
import quotesGalaxies from './database/quotesGalaxies.json'
import quotesCelebres from './database/quotesCelebres.json'
import quotesFortun from './database/quotesFortune.json'
import { getRandom } from './utils/random'
import { QuoteBox } from './components/QuoteBox'


const bgSpace = ["bg1", "bg2", "bg3", "bg4"]
const bgCelebre = ["bg1opt2", "bg2opt2", "bg3opt2", "bg4opt2"]
const bgFortun = ["bg1opt3", "bg2opt3", "bg3opt3", "bg4opt3"]

function App() {
  const [topic, setTopic] = useState(1)

  // estados para frases del espacio
  const [phrasesGalaxies, setPhrasesGalaxies] = useState(getRandom(quotesGalaxies))
  const [currentBg, setCurrentBg] = useState(getRandom(bgSpace))

  // estados para frases celebres
  const [bgtruty, setBgtruty] = useState(getRandom(bgCelebre))
  const [phrasesCelebres, setPhrasesCelebres] = useState(getRandom(quotesCelebres))

  // estados para frases de la fortuna
  const [bgFortune, setBgFortune] = useState(bgFortun)
  const [phrasesFortune, setPhrasesFortune] = useState(getRandom(quotesFortun))

  // const handleChangeMode = () => {
  //   setIsModeSpace(!isModeSpace)
  //   if (isModeSpace === true) {
  //     setCurrentBg(getRandom(bgSpace))
  //   } else {
  //     setBgtruty(getRandom(bgCelebre))
  //   }
  // }

  const handleChangeQuote = (e) => {
    if (topic === 1) {
      setBgtruty(getRandom(bgCelebre))
      setPhrasesCelebres(getRandom(quotesCelebres))
    } else if (topic === 2) {
      setCurrentBg(getRandom(bgSpace))
      setPhrasesGalaxies(getRandom(quotesGalaxies))
    } else if (topic === 3) {
      setBgFortune(getRandom(bgFortun))
      setPhrasesFortune(getRandom(quotesFortun))
    }
  }

  const handleSelect = (e) => {
    e.preventDefault();
    const valor = e.target.value
    if (valor === "famous") {
      setBgtruty(getRandom(bgCelebre))
      setPhrasesCelebres(getRandom(quotesCelebres))
      setTopic(1)
      // console.log(setTopic(1))
    } else if (valor === "space") {
      setCurrentBg(getRandom(bgSpace))
      setPhrasesGalaxies(getRandom(quotesGalaxies))
      setTopic(2)
      // console.log(setTopic(2))
    } else if (valor === "fortune") {
      setBgFortune(getRandom(bgFortun))
      setPhrasesFortune(getRandom(quotesFortun))
      setTopic(3)
    }
    // else {
    //   setBgtruty(getRandom(bgCelebre))
    //   setPhrasesCelebres(getRandom(quotesCelebres))
    //   setTopic(2)
    // }
    // console.log(topic)
  }

  return (
    <main className={`App 
    ${topic !== 1 ? (
        topic !== 2 ? (
          bgFortune
        ) : (
          currentBg
        )
      ) : (
        bgtruty
      )} `} >
      <select onClick={handleSelect} name="" id="select">
        <option value="space">Buscar</option>
        <option value="famous">Search Famous Phrases</option>
        <option value="space">Search Space</option>
        <option value="fortune">Search Fortune</option>
      </select>
      {/* {isModeSpace ? 
      <div className='divchangeMode bx-burst-hover'>
        <button onClick={handleChangeMode} className='changeMode' >Change to Phrases Celebres</button>
      </div>
    :
    <div className='divbtn'>
      <button onClick={handleChangeMode} className='changeModeCelebre' >Change to Space</button>
    </div>
    } */}
      <QuoteBox
        handleSelect={handleSelect}
        phrasesCelebres={phrasesCelebres}
        phrasesFortune={phrasesFortune}
        phrasesGalaxies={phrasesGalaxies}
        topic={topic}
        handleChangeQuote={handleChangeQuote} />
    </main>
  )
}

export default App
