import React, { useState } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconCash, IconChatbot, IconMessage } from '../Svg';
import { WeDoContainer } from './styles';

interface IProps {
    title: string;
    description: string;
    icon: any;
    items: IPropsItem[];
}

interface IPropsItem {
    icon: any;
    title: string;
    description: string;
}

const WhatWeDo: React.FC<IProps> = ({
    title,
    icon,
    description,
    items = [],
}) => {
    const [selected, setSelected] = useState<any>(null);

    return (
        <WeDoContainer>
            <ContainerCenter className="center">
                <div className="left">
                    <Animate effect="fadeInLeft" startAnimation={200}>
                        <div className="title">
                            <h3>{title}</h3>
                            {icon}
                        </div>
                    </Animate>
                    <p>{description}</p>
                </div>
                <div className="stages">
                        <Animate effect="zoomIn" startAnimation={200}>
                            <div
                                className={`item ${
                                    selected === "bot" ? 'active' : 'inactive'
                                }`}                                
                                onClick={() =>
                                    selected === "bot"
                                        ? setSelected(true)
                                        : setSelected(false)
                                }
                            >
                                <div className="title">
                                    <div><IconChatbot /></div>
                                    <span>Chatbot</span>                                    
                                </div>
                                <div className="description">
                                    SIMULE AGORA MESMO.
                                </div>
                            </div>
                        </Animate>

                        <Animate effect="zoomIn" startAnimation={200}>
                            <div
                                className={`item ${
                                    selected === "cash" ? 'active' : 'inactive'
                                }`}                                
                                onClick={() =>
                                    selected === "cash"
                                        ? setSelected(true)
                                        : setSelected(false)
                                }
                            >
                                <div className="title">
                                    <div><IconCash /></div>
                                    <span>checkout transparente</span>                                    
                                </div>
                                <div className="description">
                                    SIMULE AGORA MESMO.
                                </div>
                            </div>
                        </Animate>

                        <Animate effect="zoomIn" startAnimation={200}>
                            <div
                                className={`item ${
                                    selected === "msg" ? 'active' : 'inactive'
                                }`}                                
                                onClick={() =>
                                    selected === "msg"
                                        ? setSelected(true)
                                        : setSelected(false)
                                }
                            >
                                <div className="title">
                                    <div><IconMessage /></div>
                                    <span>Mensagerias</span>                                    
                                </div>
                                <div className="description">
                                    SIMULE AGORA MESMO.
                                </div>
                            </div>
                        </Animate>
                    
                </div>
            </ContainerCenter>
        </WeDoContainer>
    );
};

export default WhatWeDo;
