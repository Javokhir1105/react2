import Button from '../button/button'
import './end.css'

function End() {
    return (
        <>
            <div className="container5">
                <div className="end">
                    <ul className="ending">
                        <h2 className="endh2">Quality cleaning for your home</h2>
                        <p className="endp">Quality cleaning for your home</p>
                        <li className="squeze">
                            <li className="sq"></li>
                            <li className="sq"></li>
                            <li className="sq"></li>
                            <li className="sq"></li>
                            <li className="sq"></li>
                        </li>
                    </ul>
                    <ul className="ending2">
                        <h3 className="endh3">Contact us</h3>
                        <p className="endp2">1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                        <p className="endp2">(414) 567 - 2109</p>
                        <p className="endp2">contact@cleaning.com</p>
                    </ul>
                    <ul className="ending3">
                        <h3 className="endh3">Hours</h3>
                        <h3 className="endh3">Monday to Friday</h3>
                        <p className="endp3">6:00 AM - 9:00 PM</p>
                        <h3 className="endh3">Saturday to Sunday</h3>
                        <p className="endp3">8:00 AM - 8:00 PM</p>
                    </ul>
                    <ul className="ending4">
                        <h3 className="endh3">Get a free estimate</h3>
                        <b className='endb'>(414)-512-2197</b>
                        <p className="endp3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, placeat.</p>
                        <Button name={"Request a free quote"} color={"green"}  />
                    </ul>
                </div>
            </div>
        </>
    )
}
export default End  