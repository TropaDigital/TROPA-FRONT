import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import AcordionItems from '../components/AccordionItems';
import { IconCube } from '../components/Svg';
import { LanguagesContainer } from '../assets/styles/HomeStyles';
import { ContainerCenter } from '../components/Layout/styles';
import Animate from '../components/Animation/Animate';
import WhyTropa from '../components/WhyTropa/WhyTropa';
import WebSection from '../components/WebSection';
import Contact from '../components/Contact';
import Footer from '../components/Layout/Footer';
import { AccordionContainer } from '../components/AccordionItems/styles';

const Sites: NextPage = () => {
    const router = useRouter();
    return (
        <>
        
        <AcordionItems
            title="Todas etapas"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque suscipit nulla non vehicula."
            icon={<IconCube />}
            items={[
                {
                    title: 'Velocidade',
                    description:
                        'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
                },
                {
                    title: 'Facilidade',
                    description:
                        'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
                },
                {
                    title: 'Atendimento',
                    description:
                        'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
                },
                {
                    title: 'Design',
                    description:
                        'Lorem ipsum dolor sit amat, consectur apsdifja. Present pallange sucipt nulla nan vehicula.',
                },
            ]}
        />
        
        
        <LanguagesContainer>
            <ContainerCenter className="center">
                <Animate effect="zoomIn">
                    <img src="/images/languages/node.png" />
                </Animate>
                <Animate effect="zoomIn">
                    <img src="/images/languages/reactjs.png" />
                </Animate>
                <Animate effect="zoomIn">
                    <img src="/images/languages/reactnative.png" />
                </Animate>
                <Animate effect="zoomIn">
                    <img src="/images/languages/scss.png" />
                </Animate>
                <Animate effect="zoomIn">
                    <img src="/images/languages/mysql.png" />
                </Animate>
                <Animate effect="zoomIn">
                    <img src="/images/languages/sqlserver.png" />
                </Animate>
            </ContainerCenter>
        </LanguagesContainer>

        <WhyTropa />

        <WebSection />

        <Contact />
        
        <Footer />

        </>
    )
};

export default Sites;
