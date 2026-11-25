import style from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
function Header() {

    return (
        <header className={style.header}>
            <h1>Travel Agency</h1>
            <nav className ={style.nav}>
                <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? style.active : '')}>
                    Accueil
                </NavLink>
                
                <NavLink to="/apropos" className={({ isActive }) => (isActive ? style.active : '')}>
                    À propos
                </NavLink>
                
                <NavLink to="/destinations" className={({ isActive }) => (isActive ? style.active : '')}>
                    Destinations
                </NavLink>
               
                <NavLink to="/login" className={({ isActive }) => (isActive ? style.active : '')}>
                    Connexion
                </NavLink>
            </nav>
             <Link to="/reservation">
                    Réservation
                </Link>
        </header>
    );
}
export default Header;