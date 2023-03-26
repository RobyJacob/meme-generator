export default function Meme(props) {
    return (
        <div className='meme'>
            <h1 className='meme-text top'>{props.topText}</h1>
            <img src={props.imgUrl} className='meme-img' />
            <h1 className='meme-text bottom'>{props.bottomText}</h1>
        </div>
    )
}