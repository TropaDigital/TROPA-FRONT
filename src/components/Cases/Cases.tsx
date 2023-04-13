import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { ICase } from '../../pages/api/cases';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconArrow, IconAstronaut, IconGlobal } from '../Svg';
import { ContainerCases } from './Cases.style';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

interface IProps {
    filter?: 'Website' | 'Sistema' | 'APP';
}

export const CardItem = ({ item }: { item: ICase }) => {
    return (
        <div className="case" key={item.id}>
            <Link passHref href={`/case/${item.slug}`}>
                <div
                    className={'thumbnail'}
                    style={{
                        backgroundImage: `url(/images/cases/${item.slug}/thumbnail.png)`,
                    }}
                />
            </Link>

            <div className="text">
                <Link passHref href={`/case/${item.slug}`}>
                    <span className="client">
                        {item.name}
                        <IconArrow />
                    </span>
                </Link>
                <Link passHref href={`/case/${item.slug}`}>
                    <span className="text">{item.title}</span>
                </Link>
            </div>
        </div>
    );
};

export default function ListCases({ filter }: IProps) {
    const [data, setData] = useState<ICase[]>([]);

    const getData = useCallback(async () => {
        const response = await axios.get('/api/cases');
        const filtered = response.data.filter(
            (obj: any) => obj.platform === filter
        );

        if (filter) {
            setData([...filtered]);
        } else {
            setData([...response.data]);
        }
    }, [filter]);

    useEffect(() => {
        getData();
    }, [getData]);

    const [opened, setOpened] = useState(false);
    return (
        <ContainerCases id="portfolio">
            <ContainerCenter>
                <Animate effect="fadeInUp" startAnimation={200}>
                    <div className="title">
                        <h2>Cases</h2>
                        <IconAstronaut className="effect-stroke primary" />
                    </div>
                </Animate>
            </ContainerCenter>
            <section id="list-cases">
                <ContainerCenter
                    className={`center-limited ${opened ? 'opened' : 'closed'}`}
                >
                    <Masonry
                        breakpointCols={3}
                        className="list"
                        columnClassName="list-case"
                    >
                        {data.map((row) => (
                            <CardItem key={row.id} item={row} />
                        ))}
                    </Masonry>
                </ContainerCenter>
                {opened === false && (
                    <div onClick={() => setOpened(true)} className="more">
                        <button>
                            <span>Ver mais</span>
                            <IconArrow />
                        </button>
                    </div>
                )}
            </section>
        </ContainerCases>
    );
}
