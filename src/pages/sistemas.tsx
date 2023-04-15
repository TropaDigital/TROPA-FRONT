import SistemasSobMedida from './sistemas-sob-medida/sistemas-sob-medida';

export default function Sistemas({}) {
    return (
        <SistemasSobMedida
            menus={[
                {
                    href: '/home/o-que-fazemos',
                    value: 'O que fazemos',
                },
                {
                    href: '/home/a-tropa',
                    value: 'A Tropa',
                },
                {
                    href: '/home/social',
                    value: 'Social',
                },
                {
                    href: '/home/portfolio',
                    value: 'Portfolio',
                },
                {
                    href: '/home/contato',
                    value: 'contato',
                },
            ]}
        />
    );
}
