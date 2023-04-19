import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { ICase } from '../../pages/api/cases';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconArrow, IconAstronaut, IconGlobal } from '../Svg';
import { ContainerCases } from './Cases.style';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import { useGoogleAnalytics } from '../../utils/useGoogleAnalytics';

interface IProps {
    filter?: 'Website' | 'Sistema' | 'APP';
}

export const CardItem = ({ item }: { item: ICase }) => {
    const GA_TRACKING_ID = 'AW-11149050857';
    const { logEvent } = useGoogleAnalytics(GA_TRACKING_ID);

    return (
        <div
            className="case"
            onClick={() =>
                logEvent({
                    action: 'click',
                    category: 'sistemas-sob-sistema',
                    label: 'case - ' + item.name,
                    value: 0,
                })
            }
            key={item.id}
        >
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
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.40814 21.2844L4.77436 25.6506L19.5673 10.8577V25.2506H25.7415V0.201747H0.690807V6.37597H15.3166L0.40814 21.2844Z"
                                fill="#CC6237"
                            />
                        </svg>
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
                <div
                    className={`center-limited ${opened ? 'opened' : 'closed'}`}
                >
                    <ContainerCenter>
                        <Masonry
                            breakpointCols={{
                                default: 3,
                                800: 2,
                                500: 1,
                            }}
                            className="list"
                            columnClassName="list-case"
                        >
                            {data.map((row) => (
                                <CardItem key={row.id} item={row} />
                            ))}
                        </Masonry>
                    </ContainerCenter>
                </div>
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
