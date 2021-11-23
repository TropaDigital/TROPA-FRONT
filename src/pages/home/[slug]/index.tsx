import { useRouter } from 'next/router';
import React from 'react';
import Home from '../../index';

// import { Container } from './styles';

const PageHome: React.FC = () => {
    const router = useRouter();
    const { slug }: any = router.query;
    return <Home scrollTo={slug} />;
};

export default PageHome;
