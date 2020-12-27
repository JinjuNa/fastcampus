import React from 'react';
import logoImage from '../images/logo.svg';
import loginImage from '../images/icon-login.svg';
import signupImage from '../images/icon-signup.svg';
import NavList from './NavList';

const Header =() => {
    const navItem = [
        {title : '카테고리', link : '/'},
        {title : '온라인', link : '/'},
        {title : '오프라인', link : '/'},
        {title : '기업교육', link : '/'},
        {title : '이벤트', link : '/'},
        {title : '수강후기', link : '/'}
    ]
  return (
    <header>
        <div className="wrap">
            <a href="/">
                <img src={logoImage} alt="logo" />
            </a>
            <ul className="util">
                <li>
                    <a href="/login">
                    <img src={loginImage} className="icon" alt="icon-login"/>
                    로그인
                    </a>
                </li>
                <li>
                    <a href="/signup">
                    <img src={signupImage} className="icon" alt="icon-signup"/>
                    회원가입
                    </a>
                </li>
            </ul>
        </div>
        <div className="wrap">
            <nav>
                <NavList menuList={navItem} className="nav-list"/>
            </nav>
        </div>
    </header>
  )
}

export default Header;