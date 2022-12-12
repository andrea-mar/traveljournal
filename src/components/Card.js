import locationPin from '../icons/locationPin.png'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.entry.image} alt="mount fuji" />
            </div>
            <div className='card-info'>
                <span><img src={locationPin} alt="location pin"/></span>
                <span className='card-info-location'>{props.entry.location.toUpperCase()}</span>
                <span><a href="#">View on Google Maps</a></span>
                <h1>{props.entry.name}</h1>
                <p className='card-info-dates'>{props.entry.dates}</p>
                <p className='card-info-description'>{props.entry.description}</p>
            </div>
        </div>
    )
}