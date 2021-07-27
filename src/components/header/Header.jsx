import './header.scss'
import YouTubeIcon from '@material-ui/icons/YouTube';

const Header = ({menuOpen, setMenuOpen}) => {
    return (
        <div className='header'>
            <div className='title'>
                <h1>Hashtag the Cannons</h1>
            </div>
            <div class='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                <span class='line1'></span>
                <span class='line2'></span>
                <span class='line3'></span>
            </div>
        </div>
    )
}

export default Header
