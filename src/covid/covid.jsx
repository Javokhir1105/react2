import Button from '../button/button'
import './covid.css'
import rasm10 from '../covid/image7.png'

function Covid(){

    return (
    <div>
        <div className="container3">
            <ul className="boxer">
                <h1 className='covidh1'>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                <p className='covp'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                <li className='li22'>
                    <Button name={"Get a free quote"} color={"red"}/>
                    <ul className='li32'>
                        <p className="p3">
                          Call us
                        </p>
                        <b className='covb'>(414)-512-2197</b>
                    </ul>
                </li>
            </ul>
            <img className='img7' src={rasm10} />
        </div>
    </div>
    )
}
export default Covid