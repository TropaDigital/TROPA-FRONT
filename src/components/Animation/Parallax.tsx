import React, { useEffect, useRef, useState } from 'react';

export default function Parallax({
    children,
    position = 'left',
    className = '',
    anticipate = 0,
    ...rest
}: any) {
    const refParallax = useRef<any>();

    const [style, setStyle] = useState({});

    const [scrollTopPage, setScrollTopPage] = useState(0);

    useEffect(() => {
        handleScroll(
            scrollTopPage + window.innerHeight,
            refParallax.current.offsetHeight,
            refParallax.current.offsetTop
        );

        document.addEventListener('scroll', () => {
            setScrollTopPage(window.scrollY);
        });

        return () => document.removeEventListener('scroll', () => {});
    }, [scrollTopPage]);

    function handleScroll(pageScroll: any, elementHeight: any, offsetTop: any) {
        elementHeight = elementHeight + anticipate;

        var percent = 0;

        if (position === 'right') {
            percent = offsetTop + elementHeight - pageScroll;
        } else if (position === 'left') {
            percent = (offsetTop + elementHeight - pageScroll) * -1;
        }

        if (
            offsetTop <= pageScroll &&
            offsetTop + elementHeight >= pageScroll
        ) {
            setStyle({
                transform: `translate(${percent}%, 0)`,
            });
        } else {
            setStyle({
                transform: `translate(0%, 0)`,
            });
        }
    }

    return (
        <div
            ref={refParallax}
            {...rest}
            style={style}
            className={`tropaParallax ${className}`}
        >
            {children}
        </div>
    );
}
