import React from 'react';
import { useClicksController } from './useClicksController';

// export default function App(props: any): JSX.Element {
//     const [clicked, setClicked] = React.useState<boolean>(true);

//     const [clicks, setClicks] = React.useState<number>(0);

//     const onClickButton = () => {
//         setClicked((clicked) => !clicked);
//     };

//     React.useEffect(() => {
//         setClicks((clicks) => clicks + 1);
//     }, [clicked]);

//     return (
//         <>
//             <header>
//                 <h3>{clicks}</h3>
//                 <button onClick={onClickButton}>button</button>
//             </header>
//         </>
//     );
// }

export default function App(props: any): JSX.Element {
    const { clicks, onClickButton } = useClicksController();

    return (
        <>
            <header>
                <h3>{clicks}</h3>
                <button onClick={onClickButton}>button</button>
            </header>
        </>
    );
}
