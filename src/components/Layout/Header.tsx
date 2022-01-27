import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

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
    const router = useRouter();

    const [menuFixed, setMenuFixed] = useState<boolean>(false);

    const [openMenu, setOpenMenu] = useState(false);

    const [mostraSubmenu, setMostraSubmenu] = useState(false);

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

    const hamburguerIcon = (
        <FiMenu
            className="hamburguer"
            size="35px"
            onClick={() => setOpenMenu(!openMenu)}
        />
    );

    const closeIcon = (
        <MdClose
            className="hamburguer"
            size="35px"
            onClick={() => setOpenMenu(!openMenu)}
        />
    );

    return (
        <HeaderContainer className={className}>
            <div
                className={`img-over`}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
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

                        {hamburguerIcon}

                        <ul className={`menu-site`}>
                            {menus.map((row, key) => (
                                <li key={key}>
                                    <Link href={row.href}>
                                        <a>{row.value}</a>
                                    </Link>
                                    {row.value === 'O que fazemos' && (
                                        <ul>
                                            <li>
                                                <Link href="/aplicativos">
                                                    Aplicativos
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/sistemas">
                                                    Sistemas
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/sites">Sites</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {openMenu && (
                            <ul className="hidden">
                                {closeIcon}
                                {menus.map((row, key) => (
                                    <Link href={row.href}>
                                        <li key={key}>
                                            <a>{row.value}</a>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
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
