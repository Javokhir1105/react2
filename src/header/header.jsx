import Button from '../button/button'
import '../header/header.css'

function Header() {

    return (
        <div>
            <div className="container">
                <ul className="header-box1">
                    <h1>Cleaning X</h1>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Service</a>
                    <a href='#'>Articles</a>
                    <a href='#'>contact</a>
                </ul>
                <ul className="header-box2">
                    <Button name={"Get for free quote"}/>
                </ul>
            </div>
        </div>
    )
}
export default Header