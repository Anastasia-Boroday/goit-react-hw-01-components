import styled from '@emotion/styled'

export const Block = styled.section`
margin-bottom:20px;
width:400px;
text-align-last: center;
background-color:#cccc9296;
box-shadow: 6px 5px 5px grey;
border:3px solid grey;
border-radius:10px;
font-family: 'Roboto', sans-serif;
`;
export const Title = styled.h2`
`;
export const StatList = styled.ul`
padding:0;
margin:0;
list-style:none;
display:flex;
justify-content:space-between;
// border-top:2px solid white;
`;
export const StatItem = styled.li`
padding: 10px 0;
width:77px;
display:flex;
flex-direction: column;
border:2px solid white;
background: ${props => props.backgroundColor};
border-radius:10px;
`;
export const Lebel = styled.span`
`;
export const Percent = styled.span`
`;
