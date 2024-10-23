const ZombieFightersList = (props) => {
    console.log("zombie fighter list data: ", props)
    return(
        <div>
            <img src={props.zombieFighter.img}></img>
            <h2>{props.zombieFighter.name}</h2>
            <p>{props.zombieFighter.price}</p>
            <p>{props.zombieFighter.strength}</p>
            <p>{props.zombieFighter.agility}</p>
            <button type="submit" >Add to Team</button>
        </div>
    )
}

export default ZombieFightersList