
import style from './card.module.css'
import React , {useState} from 'react';



export default function Cards({name}){

    const [age,setAge] = useState(0);

    function addYearToAge(event){
        setAge(age + 1);
        event.preventDefault();
    }

    function subtractYearToAge(event){
        setAge(age - 1);
        event.preventDefault();
    }

    return(
        
        <div className={style.body}>
            <h3 className={style.title}>
                Hello {name}, how are you?
            </h3>
            <div className={style.buttonsCard}>
                <button onClick={addYearToAge}>
                    Add one year
                </button>
                <button onClick={subtractYearToAge}>
                    Subtract one year
                </button>
            </div>
            <HowOldAreYou age ={age}/>
        </div>
    )
}

function HowOldAreYou(props){
    return(
        <h4>my age is, {props.age}</h4>
    )
}


