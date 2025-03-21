import './style.css'

import Logo from '../../components/logo'
import OptionsHeader from '../../components/optionsHeader'
import IconsHeader from '../../components/iconsHeader'


function Header() {
    return(
        <header className='App-header'>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </header>
    )
}

export default Header