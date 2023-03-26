import memesData from "../memesData"
import Meme from "./Meme"
import {useState} from 'react'

export default function Form() {
    const [memImage, setMemeImage] = useState('')

    function displayMeme() {
        const memes = memesData.data.memes
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]
        setMemeImage(randomMeme.url)
    }

    return (
        <div className='form'>
            <div className='form-textfields'>
                <input className='form-text' type='text' placeholder='top text'/>
                <input className='form-text' type='text' placeholder='bottom text'/>
            </div>
            <button className='form-button' onClick={displayMeme}>
                Get a new meme image
            </button>
            <Meme imgUrl={memImage} />
        </div>
    )
}