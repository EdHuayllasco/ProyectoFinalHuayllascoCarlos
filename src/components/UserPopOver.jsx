import '../assets/styles/components/userPopOver.css';
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { CustomIcon } from './Icons'
import { useAuth } from '../context/index';


export const UserPopOver = () => {
  
  const [open, setOpen ] = useState(false);
  const { signOff,  user:{ providerData }} = useAuth();
  const dropDownRef = useRef();
  const navigate = useNavigate();

  const email = providerData[0].email;

  const handleMouseOver = () => {
    setOpen(!open);
  }

  const handleMouseDown = (e) => {
    if(!dropDownRef.current.contains(e.target)){
      setOpen(false);
    } 
  }

  useEffect(() => {
    document.addEventListener("click", handleMouseDown);
    return() =>{
      document.removeEventListener("click", handleMouseDown);
    }
  
  }, [])

  const goTo = (option) => {
    navigate(`/account`, { state: {option} });
    setOpen(false)
  }
  
  return (
    <div className='position-relative' ref={dropDownRef}>   
      <div 
          onClick={handleMouseOver}>
          <CustomIcon name = "user"/>
      </div>
        <div  className={`dropdown-container  ${open ? 'd-block': 'd-none'} position-absolute shadow rounded top-10 end-0 bg-white`}
        >
          <div className="py-2 px-4 border-bottom">
              { email}
          </div>
            <ul
            className='m-0 ul-options'  
            style={{
              listStyle: 'none',
              paddingLeft:0,
              
            }}>
              <li className='py-2 px-4' role='button' onClick={() => goTo('orders')}>
                <CustomIcon name = "order" size={14}/> Mis pedidos
              </li>
              <li className='py-2 px-4' role='button' onClick={() => goTo('favorites')}>
                <CustomIcon name = "favorite" size={14}/> Mis favoritos
              </li>
              <li className='py-2 px-4' role='button' onClick={signOff}>
                <CustomIcon name = "logout" size={14}/> Cerrar Sesión
              </li>
            </ul>
        </div>
    </div>
  );
}

