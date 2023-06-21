interface IPropsMethodology {
    number: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    steps: string[];
    top: number;
}

export const MethodologyItem = ({
    number,
    icon,
    title,
    description,
    steps,
    top = 0,
}: IPropsMethodology) => {
    return (
        <div
            className="item-methodology animate__animated animate__fadeInUp"
            style={{
                marginTop: top,
                animationDelay: `${number / 10 + 0.5}s`,
            }}
        >
            <div className="step">
                <div className="number">{number}</div>
                <div className="icon">{icon}</div>
            </div>
            <p className="title-item">{title}</p>
            <p className="description-item">{description}</p>
            <div className="items">
                {steps.map((row) => (
                    <span key={row}>{row}</span>
                ))}
            </div>
        </div>
    );
};
