import style from './card.module.css'

export default function Cards({name}){
    return(
        <div className={style.body}>
            <h3 className={style.title}>
                hello {name},how are you?
            </h3>
            <button>
                How Old Are You
            </button>
            
            <HowOldAreYou age={"20"}></HowOldAreYou>
        </div>
    )
}

function HowOldAreYou(props){
    return(
        <h4>my age is, {props.age}</h4>
    )
}