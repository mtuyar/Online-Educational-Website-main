/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const navigate = useNavigate();
  const [seen, setSeen] = useState(false)

  const handleClickSignIn = () => {
    setisLoggedIn(true);
  };

  const handleClickSignUp = () => {
    localStorage.setItem("myData", JSON.stringify({ data: "signUp" }));
    navigate("/login-page");
  }

  const togglePop = () => {
    setSeen(!seen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const createHandleMenuClick = (menuItem) => {
    return () => {
      setisLoggedIn(false);
    };
  };

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const topLeftClicked = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      navigate("/adminpanel");
    }
  }

  return (
    <header className="Header">
      <div className="logo">
        <h2 className="leftIcon d-flex align-items-center gap-2" onClick={topLeftClicked}>
          <i class="leftIcon ri-slideshow-3-line" onClick={topLeftClicked}></i> Arabic Academy
        </h2>
      </div>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit>
        <nav className="Nav">
          <a className="HeaderTexts" href="/" >Anasayfa</a>
          <a className="HeaderTexts" href="/courses-section" >Kurslar</a>
          <a className="HeaderTexts" href="/ders-notları" >Ders Notları</a>
          <a className="HeaderTexts" href="/faqs" >Sık Sorulan Sorular</a>
          <a className="HeaderTexts" href="/about-us" >Hakkımızda</a>
          <div>
            {!isLoggedIn ? (
              <>
                <button
                  onClick={handleClickSignIn}
                  style={{ marginRight: 6, backgroundColor: 'lightgray', color: 'black', boxShadow: '0px 2px 0px 0px gray' }}
                >
                  Giriş Yap
                </button>
                <button onClick={handleClickSignUp}>Kaydol</button>
              </>
            ) : (
              <Dropdown >
                <MenuButton style={{ justifyContent: 'center', alignItems: 'center', width: '120%',fontSize:'13px', color: 'white', backgroundColor: '#282c34', fontWeight: 500, boxShadow: '0px 0px 0px 0px #282c34' }}>
                  Mehmet Taha Uyar
                  <img src="https://pbs.twimg.com/profile_images/1655838863670034433/WDTJI8oQ_400x400.jpg" className="topAvatarr" />
                </MenuButton>
                <Menu slots={{ listbox: Listbox }} style={{ zIndex: 1000 }}>
                  <MenuItem onClick={createHandleMenuClick('Profile')} style={{fontSize:'17px'}}>Profil</MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Language settings')} style={{fontSize:'17px'}}>Ayarlar</MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Log out')} style={{fontSize:'17px'}}>Çıkış Yap</MenuItem>
                </Menu>
              </Dropdown>
            )}
          </div>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <IoMenu size={30} color="white" />
      </button>
    </header>
  );
}





const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
    };
  z-index: 1;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  min-width: 70%;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
);

