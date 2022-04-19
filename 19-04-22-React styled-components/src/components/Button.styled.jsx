import styled from 'styled-components';



const Button = styled.button`
background-color: ${(props) => props.bgColor};
padding:${(props) => props.padding};
color:${(props) => props.color};
font-size:${(props) => props.fontSize};
border:${(props) => props.border}
`

export default Button;