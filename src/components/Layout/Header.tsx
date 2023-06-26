import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { ContainerCenter, HeaderContainer } from './styles';
import { IconWhatsapp, Logo } from '../Svg';

interface IProps {
    menuHidden?: boolean;
}

interface IMenu {
    value: string;
    href: string;
}

const Header: React.FC<IProps> = ({ menuHidden = false }) => {
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

    const [menuVisibile, setMenuVisibile] = useState(false);

    return (
        <HeaderContainer>
            <div className="relative">
                <ContainerCenter className="center">
                    {menuHidden ? (
                        <a className="logo">
                            <Logo />
                        </a>
                    ) : (
                        <a className="logo">
                            <Logo />
                            <Link passHref={true} href="/">
                                <span className="link-home">Ir ao início</span>
                            </Link>
                        </a>
                    )}

                    {!menuHidden && (
                        <button
                            className="menu-hamburger"
                            onClick={() => setMenuVisibile(!menuVisibile)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="none"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 17h14M5 12h14M5 7h14"
                                />
                            </svg>
                        </button>
                    )}

                    {!menuHidden && (
                        <ul
                            className={`menu ${
                                menuVisibile ? 'visible' : 'hidden'
                            }`}
                        >
                            <li>
                                <Link href="/quem-somos">Quem somos</Link>
                            </li>
                            <li>
                                <a>Oque fazemos</a>
                                <ul>
                                    <li>
                                        <Link href="/oque-fazemos/apps">
                                            APP iOS & Android
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/oque-fazemos/squad">
                                            Alocação de SQUAD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/oque-fazemos/sistemas">
                                            Sistemas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/oque-fazemos/sites">
                                            Sites
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contato">Contato</Link>
                            </li>
                        </ul>
                    )}
                </ContainerCenter>
            </div>
        </HeaderContainer>
    );
};

export default Header;
