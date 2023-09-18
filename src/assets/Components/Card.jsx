export const Card = (props) => {
    const { card } = props;
    const { image, title, description, price } = card;
    console.log(props)
    return (
        <div className="cardData" style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor : 'lightblue',
            width : '420px',
            height : '520px',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <img 
            className="cardImg" src={image} alt="cardImg"
            style={{
                width: '200px',
                height: '200px',
            }}
            />
            <div className="cardInfo">
                <p className="cardTitle">{title}</p>
                <p className="cardDescription">{description}</p>
                <p className="cardPrice">{price}</p> 
            </div>
            <div className="cardActions">
                <button className="cardRecomend">Recomendar</button>
                <button className="cardBuy">Comprar</button>
            </div>
        </div>
    )
}
