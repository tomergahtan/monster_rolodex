
import '../card-list/card-list.css'
import  Card from '../card/card.component'
const Cardlist = (props,forwardRef) => 
    {
        const {monsters} = props;
        
        return (
        <div className='card-list'>
            {monsters.map(monster => {
                
                return (
                <Card
                monster={monster}
                key={monster.id}
                />
                

                );
            }
            
            )};


        </div>
        
        )
    }



export default Cardlist;