import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'


import { ContainerCenter, HeaderContainer } from './styles';
import { Logo } from '../Svg';

interface IProps {
    backgroundImage?: any;
    className?: string;
    menus: IMenu[];
}

interface IMenu {
    value: string;
    href: string;
}

const Header: React.FC<IProps> = ({
    children,
    backgroundImage,
    className,
    menus,
}) => {
    const [menuFixed, setMenuFixed] = useState<boolean>(false);

    const [openMenu, setOpenMenu ] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                setMenuFixed(true);
            } else if (window.scrollY === 0) {
                setMenuFixed(false);
            }
        });
        return () =>
            document.removeEventListener('scroll', () => {
                setMenuFixed(false);
            });
    }, []);

    const hamburguerIcon = <FiMenu 
                                className="hamburguer" 
                                size="35px" 
                                onClick={() => setOpenMenu(!openMenu)}
                            />
                            
    const closeIcon = <MdClose
                        className="hamburguer" 
                        size="35px" 
                        onClick={() => setOpenMenu(!openMenu)}
                      />

    return (
        <HeaderContainer
            className={className}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <nav>
                <div
                    className={`nav-fixed ${menuFixed ? 'active' : 'inactive'}`}
                >
                    <ContainerCenter className="center">
                        
                        <Link href="/">
                            <a className="logo">
                                <Logo />
                            </a>
                        </Link>

                        {openMenu ? closeIcon : hamburguerIcon}

                        <ul>
                            {menus.map((row, key) => (
                                <li key={key}>
                                    <Link href={row.href}>
                                        <a>{row.value}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        {openMenu && 
                            <ul className='hidden'>
                                {menus.map((row, key) => (
                                    <li key={key}>
                                        <Link href={row.href}>
                                            <a>{row.value}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        }
                    </ContainerCenter>
                </div>
            </nav>
            <ContainerCenter className="center-banner">
                <div className="content-banner">{children}</div>
            </ContainerCenter>
        </HeaderContainer>
    );
};

export default Header;
