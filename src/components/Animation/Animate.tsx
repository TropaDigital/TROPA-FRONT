import React, { useEffect, useRef, useState } from 'react';

interface IProps {
    className?: string;
    effect: string;
    startAnimation?: number;
    delayAnimation?: number;
    children?: any;
}

const Animate: React.FC<IProps> = ({
    className,
    effect,
    startAnimation = 0,
    delayAnimation = 0,
    children,
}) => {
    const refElement = useRef<any>();
    const [scrollTopPage, setScrollTopPage] = useState(0);
    const [animateClassName, setAnimateClassName] = useState('fadeOut');

    useEffect(() => {
        handleScroll(
            scrollTopPage + window.innerHeight,
            refElement.current.offsetHeight,
            refElement.current.offsetTop
        );

        document.addEventListener('scroll', () => {
            setScrollTopPage(window.scrollY);
        });

        return () =>
            document.removeEventListener('scroll', () => {
                setScrollTopPage(0);
            });
    }, [scrollTopPage]);

    function handleScroll(pageScroll: any, elementHeight: any, offsetTop: any) {
        if (pageScroll - startAnimation >= offsetTop) {
            setAnimateClassName(effect);
        } else {
            setAnimateClassName('fadeOut');
        }
    }

    return (
        <div
            ref={refElement}
            className={`animate__animated animate__${animateClassName} ${className}`}
            style={{ animationDelay: delayAnimation + 's' }}
        >
            {children}
        </div>
    );
};

export default Animate;
