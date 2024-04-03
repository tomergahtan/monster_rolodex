

import './card.style.css';
const Card  = ({monster}) =>
    {
        
        const{name, id, email} = monster;
        
        return (
                <div
                    className={`card-container ${name}`}
                    key={id}
                    >
                    <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    />
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>


        );



    }


export default Card;