import styled from '@emotion/styled'

export const Card = styled.div `
padding:30px;
width:350px;
text-align-last: center;
background-color:#cccc9296;
box-shadow: 6px 5px 5px grey;
border-radius:10px;
margin-bottom:20px;

font-family: 'Roboto', sans-serif;
`;
export const DescriptionInfo = styled.div`
`;
export const Photo = styled.img`
width:200px;
background-color:#8080804d;
border-radius:50%;
`;
export const Name = styled.p`
font-weight:bold;
`;
export const Tag = styled.p`
color:#484747;
`;
export const Location = styled.p`
color:#484747;
`;
export const Stats = styled.ul`
padding:0;
padding-top:10px;
list-style:none;
display:flex;
justify-content:space-between;
border-top:2px solid grey;
`;
export const StatElement = styled.li`
display:flex;
flex-direction: column;
`;
export const StateText = styled.span`
`;
export const StateNumber = styled.span`
color:#484747;
`;

