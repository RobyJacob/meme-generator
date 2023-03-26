export default function Meme(props) {
    return (
        <div className='meme'>
            <img src={props.imgUrl} className='meme-img' />
        </div>
    )
}