import './button.css'

function Button({name,color,word}) {

    return (
        <div>
           <button style={{background: color,color: word }}>{name}</button>
        </div>
    )
}
export default Button