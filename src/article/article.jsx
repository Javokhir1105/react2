import './article.css'
import Button from '../button/button'
import arcrasm1 from '../article/arcimg1.png'
import arcrasm2 from '../article/arcimg2.png'

function Article() {

    return (
        <div>
            <div className="container2">
                <div className="arc">
                    <h1 className="arch1">Articles & resources</h1>
                    <li className="arcli1">
                        <Button name={"Get a free quote"} color={"black"}/>
                        <Button name={"Browse article"} color={"white"} word={"black"}/>
                    </li>
                </div>
                <div className="arc2">
                    <ul className="item2">
                        <img src={arcrasm1} className="rasm" />
                        <li className="listt">
                            <h2 className="arch2">8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                            <p className="arcp">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <b className="arcb">Jan 28, 2022</b>
                        </li>
                    </ul>
                    <ul className="item2">
                        <img src={arcrasm2} className="rasm" />
                        <li className="listt">
                            <h2 className="arch2">How to properly disinfect your phone and other electronics</h2>
                            <p className="arcp">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <b className="arcb">Feb 1, 2022</b>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Article