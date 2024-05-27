import LuffyIMG from '../assets/luffy.png';

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={LuffyIMG} ></img>
            <h2 className="card-title">Luffy</h2>
            <p className="card-text">King of the Pirates</p>
        </div>
    );
}

export default Card;