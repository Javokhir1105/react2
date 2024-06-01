import Button from '../button/button'
import './contact.css'

function Contact() {
    return (
        <>
            <div className="container4">
                <div className="item6">
                    <h1 className="conh1">Contact us</h1>
                    <p className="conp">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                    <ul className='li2'>
                        <p className="conp2">
                            Call us now
                        </p>
                        <b className='conb'>(414)-512-2197</b>
                    </ul>
                    <h2 className="conh2">Not convinced yet?</h2>
                    <p className="conp">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                    <li className="conli"><a href="#" className="cona">Browse our packages</a></li>
                </div>
                <div className="item7">
                    <div className="last">
                        <ul className="conul">
                            <li className="conli2">
                                <p className="conp3">Full name</p>
                                <label>
                                    <input type="text" />
                                </label>
                            </li>
                            <li className="conli2">
                                <p className="conp3">Phone number</p>
                                <label>
                                    <input type="number" />
                                </label>
                            </li>
                        </ul>
                        <ul className="conul">
                            <li className="conli2">
                                <p className="conp3">Address</p>
                                <label>
                                    <input type="text" />
                                </label>
                            </li>
                            <li className="conli2">
                                <p className="conp3">Email</p>
                                <label>
                                    <input type="text" />
                                </label>
                            </li>
                        </ul>
                        <ul className="conul">
                            <li className="conli2">
                                <p className="conp3">Requested service</p>
                                <label>
                                    <input type="text" />
                                </label>
                            </li>
                            <li className="conli2">
                                <p className="conp3">Data of service</p>
                                <label>
                                    <input type="text" />
                                </label>
                            </li>
                        </ul>
                        <p className="conp3">Add</p>
                        <label>
                            <input className='input2' type="text" />
                        </label>
                        <Button name={"Submit massege"}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact