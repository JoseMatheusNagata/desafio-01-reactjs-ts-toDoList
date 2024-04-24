import style from './Header.module.css';
import igniteLogo from '../images/toDoLogo.png';


export function Header() {
    return (
        <header className={style.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
            
        </header>

    );
}