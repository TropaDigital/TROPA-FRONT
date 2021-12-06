import React, { useState } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
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
    const [selected, setSelected] = useState(null);
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
                    {items.map((row, key: any) => (
                        <Animate effect="zoomIn" startAnimation={200}>
                            <div
                                className={`item ${
                                    selected === key ? 'active' : 'inactive'
                                }`}
                                key={key}
                                onClick={() =>
                                    selected === key
                                        ? setSelected(null)
                                        : setSelected(key)
                                }
                            >
                                <div className="title">
                                    <div>{row.icon}</div>
                                    <span>{row.title}</span>                                    
                                </div>
                                <div className="description">
                                    {row.description}
                                </div>
                            </div>
                        </Animate>
                    ))}
                </div>
            </ContainerCenter>
        </WeDoContainer>
    );
};

export default WhatWeDo;
