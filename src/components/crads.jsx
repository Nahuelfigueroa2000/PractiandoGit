import style from './card.module.css'
import React , {useState} from 'react';



export default function Cards({name}){

    const [age,setAge] = useState(0);

    function PushTheButton(event){
        setAge(age + 1);
        event.preventDefault();
    }

    return(
        
        <div className={style.body}>
            <h3 className={style.title}>
                hello {name},how are you?
            </h3>
            <button onClick={PushTheButton}>
                How Old Are You
            </button>
            <HowOldAreYou age ={age}></HowOldAreYou>
        </div>
    )
}

function HowOldAreYou(props){
    return(
        <h4>my age is, {props.age}</h4>
    )
}

