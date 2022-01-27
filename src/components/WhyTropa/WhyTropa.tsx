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
                        effect="effect-stroke light"
                    >
                        <IconCode className="effect-stroke primary" />
                    </Animate>
                    <Animate
                        delayAnimation={0.5}
                        startAnimation={500}
                        className="icon clock"
                        effect="fadeInUp"
                    >
                        <IconClock className="effect-stroke primary" />
                    </Animate>
                    <Animate
                        delayAnimation={0.4}
                        startAnimation={500}
                        className="icon global"
                        effect="fadeInUp"
                    >
                        <IconGlobal className="effect-stroke primary" />
                    </Animate>
                </div>

                <div className="separate">
                    <Animate
                        delayAnimation={0.5}
                        className="icon astronaut"
                        effect="fadeInUp"
                        startAnimation={300}
                    >
                        <IconAstronaut className="effect-stroke primary" />
                    </Animate>
                    <Animate
                        delayAnimation={0.8}
                        className="icon flag"
                        effect="fadeInUp"
                        startAnimation={300}
                    >
                        <IconFlag className="effect-stroke primary" />
                    </Animate>
                </div>

                <div className="separate">
                    <Animate
                        delayAnimation={0.5}
                        className="icon check"
                        effect="fadeInUp"
                    >
                        <IconCheck className="effect-stroke primary" />
                    </Animate>
                    <Animate
                        delayAnimation={0.5}
                        className="icon cube"
                        effect="fadeInUp"
                    >
                        <IconCube className="effect-stroke primary" />
                    </Animate>
                </div>
            </ContainerCenter>
        </WhyTropaContainer>
    );
};

export default WhyTropa;
