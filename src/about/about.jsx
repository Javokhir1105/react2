import './about.css'
import rasm4 from '../about/image4.png'
import rasm5 from '../about/image5.png'
import rasm6 from '../about/image6.png'
import Button from '../button/button'
function About() {

    return (
        <div>
            <div className="about">
                <h1 className="abouth1">About us</h1>
                <p className="abp">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                <ul className="box1">
                    <li className="list">
                        <img className='img5'  src={rasm4} />
                        <h2>1. Schedule online</h2>
                        <p className="p5">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                    </li>
                    <li className="list">
                        <img className='img5' src={rasm5} />
                        <h2>2. Pay online easily</h2>
                        <p className="p5">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc..</p>
                    </li>
                    <li className="list">
                        <img className='img5'   src={rasm6} />
                        <h2>3. Get your house cleaned</h2>
                        <p className="p5">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                    </li>
                </ul>
                <li className="list2" >
                    <Button  name={"Get a free quote"} />
                    <Button name={"Explore service"} color={"white"} word={"black"} />
                </li>
            </div>
        </div>
    )
}
export default About