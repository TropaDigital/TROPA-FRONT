import { useRouter } from 'next/router'
import type { NextPage } from 'next';
import Layout from '../../../components/Layout/Layout';
import Portfolio from '../../../components/Portfolio';
import Footer from '../../../components/Layout/Footer';
import { useEffect, useState } from 'react';
import apiTropa from '../../../pages/api/api';

const Portfolios: NextPage = () => {
    const router = useRouter()
    const { slug }  = router.query


    const [portfolioSelected, setPortfolioSelected] = useState([])


    useEffect(() => {
        if(!slug) {
          return;
        }

        const getPortfolioBySlug = async () => {
            try{
    
                let portfolios = await apiTropa.get('/portifolio-slug/'+slug);
                setPortfolioSelected(portfolios.data.result);
                
            }catch(e){
                console.log("Erro 999 - Não recebendo os dados dos portfólios.")
            }
        }

        getPortfolioBySlug()
    }, [slug])


    return (
        <Layout>

            <Portfolio portfolioSelected={portfolioSelected}/>

            <Footer />
            
        </Layout>
    )
}

export default Portfolios;