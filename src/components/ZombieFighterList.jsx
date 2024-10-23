const ZombieFightersList = (props) => {
    console.log("zombie fighter list data: ", props)
    return(
        <h2>{props.zombieFighter.name}</h2>
    )
}

export default ZombieFightersList