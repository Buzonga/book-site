import './style.css'
import logo from '../../images/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img 
            src={logo} 
            alt='logo' 
            className='logo-img'
            ></img>
            <p><strong>Books</strong>Website</p>
      </div>
    );
}

export default Logo