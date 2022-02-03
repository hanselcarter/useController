import React from 'react';

interface UseClicksController {
    clicks: number;
    onClickButton: () => void;
}

export const useClicksController = (): UseClicksController => {
    const [clicked, setClicked] = React.useState<boolean>(true);

    const [clicks, setClicks] = React.useState<number>(0);

    const onClickButton = () => {
        setClicked((clicked) => !clicked);
    };

    React.useEffect(() => {
        setClicks((clicks) => clicks + 1);
    }, [clicked]);

    return {
        onClickButton,
        clicks,
    };
};
