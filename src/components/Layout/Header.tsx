import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import { ContainerCenter, HeaderContainer } from './styles';
import { Logo } from '../Svg';

interface IProps {
    menuHidden: boolean;
}

interface IMenu {
    value: string;
    href: string;
}

const Header: React.FC<IProps> = ({ children, menuHidden = false }) => {
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

    return <HeaderContainer></HeaderContainer>;
};

export default Header;
