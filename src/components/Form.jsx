import Meme from "./Meme"
import {useState, useEffect} from 'react'

export default function Form() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imgUrl: ''
    })
    const [allMemes, setAllMemes] = useState([])

    function displayMeme() {
        const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)]
        setMeme(prevState => ({
            ...prevState,
            imgUrl: randomMeme.url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (
        <div className='form'>
            <div className='form-textfields'>
                <input 
                    className='form-text' 
                    type='text' 
                    placeholder='top text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                    />
                <input 
                    className='form-text' 
                    type='text' 
                    placeholder='bottom text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button className='form-button' onClick={displayMeme}>
                Get a new meme image
            </button>
            <Meme 
                imgUrl={meme.imgUrl} 
                topText={meme.topText}
                bottomText={meme.bottomText}
                />
        </div>
    )
}