import { useEffect, useRef, useState } from 'react';
import { ContainerVideoLP } from './VideoLP.styles';

export const VideoLP = () => {
    const videoRef = useRef<any>();
    const [videoStatus, setVideoStatus] = useState('pause');

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const handlePause = () => {
                setVideoStatus('pause');
            };
            const handlePlay = () => {
                setVideoStatus('play');
            };
            videoElement.addEventListener('pause', handlePause);
            videoElement.addEventListener('play', handlePlay);
            return () => {
                videoElement.removeEventListener('pause', handlePause);
                videoElement.removeEventListener('play', handlePlay);
            };
        }
    }, [videoRef]);

    return (
        <ContainerVideoLP>
            <div className="content-browser">
                <div className={`overlay ${videoStatus}`}>
                    <div className="thumbnail" />
                    <button onClick={() => videoRef.current?.play()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="none"
                            />
                            <path
                                fill="currentColor"
                                d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
                            />
                        </svg>
                    </button>
                </div>
                <video
                    ref={videoRef}
                    src="/cases.mp4"
                    controls={videoStatus === 'play' ? true : false}
                ></video>
            </div>
        </ContainerVideoLP>
    );
};
