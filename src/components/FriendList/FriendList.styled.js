import styled from '@emotion/styled'

export const FriendsList = styled.ul`
padding:0;
width:400px;
font-family: 'Roboto', sans-serif;

`;
export const ListItem = styled.li`
margin-bottom:5px;
list-style:none;
display:flex;
align-items:center;
border:1px solid grey;
background-color:#cccc9296;
box-shadow: 4px 2px 2px grey;
border:1px solid grey;
border-radius:10px;
`;
export const Online = styled.span`
width:20px;
height:20px;
margin:0 20px;
border-radius:50%;

background: ${props =>
props.backgroundColor};
`;
export const Photo = styled.img`
margin-right:20px;`;
export const Name = styled.p``;
