import '../style/Navigation.css'
import App from '../App'


const Navigation = () => {
    return (
        <navbar>
            <div className="wrapper">
                <div className="logo">
                    WhyBintang
                </div>
                <ul>
                    <li><a href="#" className='nav-links'>Home</a></li>
                    <li><a href="#" className='nav-links'>Profile</a></li>
                    <li><a href="#" className='nav-links'>Contact</a></li>
                </ul>
            </div>
        </navbar>
    )
}

export default Navigation