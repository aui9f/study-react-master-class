import { useState } from 'react';
import styled from 'styled-components'

interface ContainerProps{
    bgColor: string
    borderColor: string;
}
const Container = styled.div<ContainerProps>`
    width: 100px; 
    height: 100px;
    background-color: ${props=>props.bgColor};
    border: 6px solid ${props=>props.borderColor};
`;

interface CircleProps{
    bgColor: string;
    borderColor?: string;
}

function Circle({bgColor= 'red', borderColor= 'blue'}: CircleProps){
    const [counter, setCounter] = useState(0);
    setCounter(counter+1);
    return (
        <div>
            <Container bgColor={bgColor} borderColor={borderColor || bgColor}/>
        </div>
    )
}


export default Circle;
