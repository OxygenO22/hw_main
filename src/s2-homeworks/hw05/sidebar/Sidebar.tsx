import React, {FC} from 'react'
import {NavLink, NavLinkProps} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = open ? s.sidebar_open : s.sidebar; 
    const navButtonClass = ({ isActive }: any) =>
      isActive ? s.nav__button_active : s.nav__button;
    return (
      <>
        {/*затемнение справа от открытого меню*/}

        <aside className={sidebarClass}>
          <div className={s.sidebar__menu}>
            <button className={s.close} onClick={handleClose}>
              <img src={closeIcon} alt="close sidebar" id={"hw5-menu-close"} />
            </button>

            <nav id={"hw5-menu"} className={s.nav}>
              <NavLink
                id={"hw5-pre-junior-link"}
                to={PATH.PRE_JUNIOR}
                onClick={handleClose}
                className={navButtonClass} // делает студент
              >
                Pre-junior
              </NavLink>
              <NavLink
                id={"hw5-junior-link"}
                to={PATH.JUNIOR}
                onClick={handleClose}
                className={navButtonClass} // делает студент
              >
                Junior
              </NavLink>
              <NavLink
                id={"hw5-junior-plus-link"}
                to={PATH.JUNIOR_PLUS}
                onClick={handleClose}
                className={navButtonClass} // делает студент
              >
                Junior Plus
              </NavLink>
            </nav>
          </div>
          {open && <div className={s.background} onClick={handleClose} />}
        </aside>
      </>
    );
}
