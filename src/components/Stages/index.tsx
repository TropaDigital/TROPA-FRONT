import React, { useState } from 'react';
import Animate from '../Animation/Animate';
import { ContainerCenter } from '../Layout/styles';
import { IconArrow } from '../Svg';

import { StagesContainer } from './styles';

interface IProps {
    title: string;
    description: string;
    icon: any;
    items: IPropsItem[];
}

interface IPropsItem {
    title: string;
    description: string;
}

const StageItems: React.FC<IProps> = ({
    title,
    icon,
    description,
    items = [],
}) => {
    const [selected, setSelected] = useState(null);
    return (
        <StagesContainer>
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
                                    <span>{row.title}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="img"
                                        width="1em"
                                        height="1em"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none">
                                            <path
                                                d="M4 9l8 8l8-8"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="description">
                                    {row.description}
                                </div>
                            </div>
                        </Animate>
                    ))}
                </div>
            </ContainerCenter>
        </StagesContainer>
    );
};

export default StageItems;
