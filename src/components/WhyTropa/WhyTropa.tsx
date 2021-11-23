import React from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import {
    IconAstronaut,
    IconCheck,
    IconClock,
    IconCode,
    IconCube,
    IconFlag,
    IconGlobal,
} from '../Svg';

import { WhyTropaContainer } from './styles';

const WhyTropa: React.FC = () => {
    return (
        <WhyTropaContainer id="a-tropa">
            <ContainerCenter className="center">
                <div className="separate">
                    <Animate
                        delayAnimation={0.8}
                        startAnimation={500}
                        className="icon code"
                        effect="fadeInUp"
                    >
                        <IconCode />
                    </Animate>
                    <Animate
                        delayAnimation={0.5}
                        startAnimation={500}
                        className="icon clock"
                        effect="fadeInUp"
                    >
                        <IconClock />
                    </Animate>
                    <Animate
                        delayAnimation={0.4}
                        startAnimation={500}
                        className="icon global"
                        effect="fadeInUp"
                    >
                        <IconGlobal />
                    </Animate>
                </div>

                <div className="separate">
                    <Animate
                        delayAnimation={0.5}
                        className="icon astronaut"
                        effect="fadeInUp"
                        startAnimation={300}
                    >
                        <IconAstronaut />
                    </Animate>
                    <Animate
                        delayAnimation={0.8}
                        className="icon flag"
                        effect="fadeInUp"
                        startAnimation={300}
                    >
                        <IconFlag />
                    </Animate>
                </div>

                <div className="separate">
                    <Animate
                        delayAnimation={0.5}
                        className="icon check"
                        effect="fadeInUp"
                    >
                        <IconCheck />
                    </Animate>
                    <Animate
                        delayAnimation={0.5}
                        className="icon cube"
                        effect="fadeInUp"
                    >
                        <IconCube />
                    </Animate>
                </div>
            </ContainerCenter>
        </WhyTropaContainer>
    );
};

export default WhyTropa;
