

import Styles from "../Card/card.module.css"

function Card(props){
    return(
        <div className={Styles.card}>

            <img src={props.profilePic} />
            <h2>{props.name}</h2>
            <hr/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ipsam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, molestias!</p>
            
        </div>
        
    );
}
export default Card