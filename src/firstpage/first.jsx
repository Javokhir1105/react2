import Button from '../button/button'
import '../firstpage/first.css'
import rasm2 from '../firstpage/image2.png'

function First(){

    return (
    <div>
        <div className="container">
            <ul className="box">
                <h1 className='firsth1'>Quality cleaning for your home</h1>
                <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                <li className='li12'>
                    <Button name={"Get a free quote"}/>
                    <ul className='li2'>
                        <p className="p2">
                          Call us
                        </p>
                        <b>(414)-512-2197</b>
                    </ul>
                </li>
            </ul>
            <img src={rasm2} alt="" />
        </div>
    </div>
    )
}
export default First