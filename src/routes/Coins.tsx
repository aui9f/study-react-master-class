import { styled } from "styled-components"

function Coins (){
    const Title = styled.h2`
        color: ${props=>props.theme.accentColor}
    
    `
    return <>
        <Title>Coins</Title>
    </>
}
export default Coins