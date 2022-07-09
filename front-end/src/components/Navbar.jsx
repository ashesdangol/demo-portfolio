import $ from 'jquery'
import React,{useState} from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    function handleBurger(){
        setIsOpen((prevValue) => {
            bodylock();
            return !prevValue;
            
        });
        
    }
    // close burger menu when menu item is clicked
    function handleMenuClick(){
        handleBurger()
    }
  
    // lock body when menu is isopened
    function bodylock(){
        if(!isOpen){
            $('.body').addClass('scroll-lock')
        }else{
            $('.body').removeClass('scroll-lock')
        }
    }
    
   
    function CustomLink({to,children, ...props}){
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path:resolvedPath.pathname, end:true})
       
        return(
            <li onClick={handleMenuClick} className={isActive && "active"}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }
    return(
        <section className='main-nav-bar'>
            <nav className={(isOpen ? "nav-wrapper open-menu":"nav-wrapper")}>
            <div className="nav container">
                <Link to="/" className="site-title drop-shadow-xl">Ashes Dangol</Link>
                <div className='nav-lists hidden laptop:block'>
                    <ul className='flex gap-2'>
                        <CustomLink to="/">Home</CustomLink>
                        
                        <div className='portfolio-apps-button'>
                            <CustomLink to="/apps" className="">Apps</CustomLink>
                            <div className='portfolio-apps-container invisible'>
                                <ul className='portfolio-apps-lists'>
                                    <li onClick={handleMenuClick}>
                                        <Link to="/apps/to-do-list">To Do List</Link>
                                    </li>
                                    <li onClick={handleMenuClick}>
                                        <Link to="/apps/note-keeper">Note App</Link>
                                    </li>
                                    <li onClick={handleMenuClick}>
                                        <Link to="/apps/weather-app">Weather App</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <CustomLink to="/news">News</CustomLink>
                        <CustomLink to="/contact">Dummy nav 2</CustomLink>
                    </ul>
                </div>
                
                <div onClick={handleBurger} className="menu-burger laptop:hidden space-y-2 shadow-white rounded shadow-sm">
                    <span className="block w-8 h-0.5 bg-gray-100 shadow-sm animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-100 shadow-sm animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-100 shadow-sm animate-pulse"></span>
                </div>
            </div>
            
        </nav>
        </section>
        
    );
}


export default Navbar;