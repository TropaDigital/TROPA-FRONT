import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '../../../components/Layout/Layout';
import Head from 'next/head';
import Footer from '../../../components/Layout/Footer';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Layout/Header';
import { ContainerCase } from '../../../assets/styles/Case.style';
import { ICase } from '../../api/cases';
import { ContainerCenter } from '../../../components/Layout/styles';
import Image from 'next/image';
import { IconArrowLeft } from '../../../components/Svg';

export const ContainerMobile = ({
    image,
    slug,
}: {
    image: string;
    slug: string;
}) => {
    return (
        <div className="phone">
            <div className="overlay"></div>
            <div
                className="image"
                style={{
                    backgroundImage: `url(/images/cases/${slug}/${image})`,
                }}
            />
        </div>
    );
};

const Case: NextPage = () => {
    const router = useRouter();
    const { slug }: any = router.query;

    const [portfolioSelected, setPortfolioSelected] = useState<ICase>(
        {} as ICase
    );

    interface IAPICase {
        data: ICase;
        error?: boolean;
        message?: string;
    }

    const getPortfolioBySlug = useCallback(async () => {
        try {
            let portfolios: IAPICase = await axios.get(
                '/api/cases?slug=' + slug
            );
            setPortfolioSelected(portfolios.data);
        } catch (e: any) {
            console.log(e.response.data.message);
        }
    }, [slug]);

    useEffect(() => {
        if (slug) getPortfolioBySlug();
    }, [slug, getPortfolioBySlug]);

    return (
        <Layout>
            <ContainerCase>
                <Head>
                    <title>Tropa.Digital - Infinitas possibilidades</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon1.ico" />
                </Head>
                <Header
                    className={`case-banner ${
                        portfolioSelected.images?.preview ? 'video' : 'auto'
                    }`}
                    menus={[]}
                >
                    <div className="head">
                        <button className="back" onClick={() => router.back()}>
                            <IconArrowLeft />
                        </button>
                        <h1>{portfolioSelected.title}</h1>
                        <div className="infos">
                            <div>
                                <span className="label">Cliente</span>
                                <span className="value">
                                    {portfolioSelected.name}
                                </span>
                            </div>
                            <div>
                                <span className="label">Ano</span>
                                <span className="value">
                                    {portfolioSelected.year}
                                </span>
                            </div>
                            <div>
                                <span className="label">O que fizemos</span>
                                <span className="value">
                                    {portfolioSelected.platform}
                                </span>
                            </div>
                        </div>
                    </div>
                    {portfolioSelected.images?.preview && (
                        <div
                            className="video"
                            style={{
                                backgroundImage: `url(/images/cases/${portfolioSelected.slug}/${portfolioSelected.images.preview})`,
                            }}
                        />
                    )}
                </Header>

                <section id="about">
                    <ContainerCenter className="text">
                        <div>
                            <h2>Sobre o projeto</h2>
                        </div>
                        <div>
                            <p>{portfolioSelected.text}</p>
                        </div>
                    </ContainerCenter>
                </section>
                {portfolioSelected.images && (
                    <section id="images">
                        <ContainerCenter>
                            {portfolioSelected.images?.principal && (
                                <div className="principal">
                                    <Image
                                        alt={portfolioSelected.name}
                                        width={1216}
                                        height={684}
                                        loading="lazy"
                                        className="image-border"
                                        src={`/images/cases/${slug}/${portfolioSelected?.images?.principal}`}
                                    />
                                </div>
                            )}

                            {portfolioSelected?.images?.mobile1 && (
                                <>
                                    <h2>Mobile responsive</h2>
                                    <div className="list-mobile">
                                        <ContainerMobile
                                            image={
                                                portfolioSelected?.images
                                                    ?.mobile1 ?? ''
                                            }
                                            slug={slug}
                                        />
                                        <ContainerMobile
                                            image={
                                                portfolioSelected?.images
                                                    ?.mobile2 ?? ''
                                            }
                                            slug={slug}
                                        />
                                        <ContainerMobile
                                            image={
                                                portfolioSelected?.images
                                                    ?.mobile3 ?? ''
                                            }
                                            slug={slug}
                                        />
                                    </div>
                                </>
                            )}

                            <div className="resume">
                                <div className="dialog">
                                    <svg
                                        width="28"
                                        height="19"
                                        viewBox="0 0 28 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_77_234)">
                                            <path
                                                d="M6.05405 0H14.3784L12.1081 18.1622H0L6.05405 0Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M19.6753 0H27.9996L26.4861 18.1622H15.1348L19.6753 0Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_77_234">
                                                <rect
                                                    width="28"
                                                    height="19"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p>
                                        O projeto {portfolioSelected.name}{' '}
                                        utilizou as tecnologias{' '}
                                        {portfolioSelected.front} e{' '}
                                        {portfolioSelected.backend}, sendo o{' '}
                                        {portfolioSelected.front} utilizado no
                                        desenvolvimento do frontend e o{' '}
                                        {portfolioSelected.backend} no
                                        desenvolvimento do backend. O{' '}
                                        {portfolioSelected.front} permitiu a
                                        criação de uma interface de usuário
                                        interativa e responsiva, enquanto o{' '}
                                        {portfolioSelected.backend} permitiu a
                                        criação de um backend escalável e capaz
                                        de lidar com muitas solicitações
                                        simultâneas.
                                    </p>
                                </div>
                            </div>

                            <h2>{portfolioSelected.titleExtra}</h2>
                            <div className="extras">
                                {portfolioSelected?.images?.extra1 && (
                                    <Image
                                        alt={portfolioSelected.name}
                                        loading="lazy"
                                        width={1216}
                                        height={708}
                                        className="image-border"
                                        src={`/images/cases/${slug}/${portfolioSelected?.images?.extra1}`}
                                    />
                                )}
                                {portfolioSelected?.images?.extra2 && (
                                    <Image
                                        alt={portfolioSelected.name}
                                        loading="lazy"
                                        width={1216}
                                        height={708}
                                        className="image-border"
                                        src={`/images/cases/${slug}/${portfolioSelected?.images?.extra2}`}
                                    />
                                )}
                            </div>
                        </ContainerCenter>
                    </section>
                )}
            </ContainerCase>

            <Footer />
        </Layout>
    );
};

export default Case;
