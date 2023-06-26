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

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
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

    const isContatoRoute = router.pathname === '/contato';
    const isQuemSomosoute = router.pathname === '/quem-somos';
    const isOqueFazemosRoute =
        router.pathname.split('/oque-fazemos/').length > 1 ? true : false;

    return (
        <HeaderContainer>
            <div className={`relative ${menuFixed ? 'fixed' : 'normal'}`}>
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
                            <li
                                className={
                                    isQuemSomosoute ? 'active' : 'normal'
                                }
                            >
                                {isQuemSomosoute ? (
                                    <a>Quem somos</a>
                                ) : (
                                    <Link href="/quem-somos">Quem somos</Link>
                                )}
                            </li>
                            <li
                                className={
                                    isOqueFazemosRoute ? 'active' : 'normal'
                                }
                            >
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
                            <li
                                className={isContatoRoute ? 'active' : 'normal'}
                            >
                                {isContatoRoute ? (
                                    <a>Contato</a>
                                ) : (
                                    <Link href="/contato">Contato</Link>
                                )}
                            </li>
                        </ul>
                    )}
                </ContainerCenter>
            </div>
        </HeaderContainer>
    );
};

export default Header;
