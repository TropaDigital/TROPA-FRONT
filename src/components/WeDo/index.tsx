import React, { useState } from 'react';
import Link from 'next/link';
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

    const [modal, setModal] = useState<boolean>(false);

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
                            <Link href="/chatbot">
                                <div
                                    className={`item ${
                                        selected === 'bot' ? 'active bot' : 'inactive bot'
                                    }`}                                
                                    onClick={() =>
                                        selected === 'bot'
                                            ? setSelected(null)
                                            : setSelected('bot')
                                    }
                                >
                                    <div className="title" onClick={() => setModal(modal)}>
                                        <div><IconChatbot /></div>
                                        <span>Chatbot</span>                                    
                                    </div>
                                    <div className="description">
                                        SIMULE AGORA MESMO.
                                    </div>
                                </div>
                            </Link>
                        </Animate>

                        <Animate effect="zoomIn" startAnimation={200}>
                            <Link href="/checkout">
                                <div
                                    className={`item ${
                                        selected === "cash" ? 'active cash' : 'inactive cash'
                                    }`}                                
                                    onClick={() =>
                                        selected === "cash"
                                            ? setSelected(null)
                                            : setSelected('cash')
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
                            </Link>
                        </Animate>

                        <Animate effect="zoomIn" startAnimation={200}>
                            <Link href="/mensagerias">
                                <div
                                    className={`item ${
                                        selected === "msg" ? 'active msg' : 'inactive msg'
                                    }`}                                
                                    onClick={() =>
                                        selected === "msg"
                                            ? setSelected(null)
                                            : setSelected('msg')
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
                            </Link>
                        </Animate>
                    
                </div>
            </ContainerCenter>
        </WeDoContainer>
    );
};

export default WhatWeDo;
