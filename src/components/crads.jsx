import style from './card.module.css'

export default function Cards({name}){
    return(
        <div className={style.body}>
            <h3 className={style.title}>
                hello {name},how are you?
            </h3>
        </div>
    )
}