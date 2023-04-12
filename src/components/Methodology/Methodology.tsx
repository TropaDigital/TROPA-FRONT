import { ReactNode } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconArrow, IconAstronaut } from '../Svg';
import { ContainerMethodology } from './Methodology.style';

export default function Methodology() {
    interface IPropsStep {
        title: string;
        description: string;
        icon: ReactNode;
        tasks: string[];
    }
    const StepItem = ({ title, description, icon, tasks }: IPropsStep) => {
        return (
            <Animate effect="fadeInLeft" startAnimation={200}>
                <div className="step">
                    <div className="icon">{icon}</div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul>
                        {tasks.map((row, key) => (
                            <li key={key}>{row}</li>
                        ))}
                    </ul>
                </div>
            </Animate>
        );
    };

    return (
        <ContainerMethodology>
            <ContainerCenter>
                <Animate effect="fadeInLeft" startAnimation={200}>
                    <div className="title">
                        <h3>Metodologia Tropa</h3>
                        <IconArrow className="effect-stroke gray" />
                    </div>
                </Animate>
                <div className="steps">
                    <StepItem
                        title="Entendimento"
                        description="Etapa de discovery e reuniões para entendimento do cenário
                    do cliente"
                        tasks={['Reuniões', 'Pesquisas']}
                        icon={<IconAstronaut />}
                    />
                    <StepItem
                        title="Solução do Problema"
                        description="A melhor forma de resolução com técnicas e tecnologias consolidadas"
                        tasks={['UX/UI', 'Testes com usuários', 'Protótipos']}
                        icon={<IconAstronaut />}
                    />
                    <StepItem
                        title="Desenvolvimento"
                        description="Planejamento, codificação e acompanhamento do projeto"
                        tasks={['Testes', 'Deploy', 'Dailys', 'Plannings']}
                        icon={<IconAstronaut />}
                    />
                    <StepItem
                        title="Entrega do Projeto"
                        description="Projeto entregue com estratégias de deploy contínuo"
                        tasks={['Deploy', 'Monitoramento']}
                        icon={<IconAstronaut />}
                    />
                    <StepItem
                        title="Sustentação"
                        description="Manutenção e atualização contínua do software da empresa"
                        tasks={['Tarefas', 'Bugs e Melhorias']}
                        icon={<IconAstronaut />}
                    />
                </div>
            </ContainerCenter>
        </ContainerMethodology>
    );
}
