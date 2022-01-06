import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Layout/Footer';

const Portfolios: NextPage = () => {

    const router = useRouter();

    return (
        <Layout>

            <Portfolio
                title='Docket'
            />

            <Footer />
            
        </Layout>
    )
}

export default Portfolios;