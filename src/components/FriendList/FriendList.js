import PropTypes from 'prop-types';
import {
    FriendsList,
    ListItem,
    Online,
    Photo,
    Name,
} from './FriendList.styled';

export function FriendList({friends}) {
    return (
    <FriendsList>
        {friends.map(el => (
        <ListItem key={el.id}>
        <Online backgroundColor={el.isOnline==true?`green`:`red`}></Online>
        <Photo src={el.avatar} alt="User avatar" width="48" />
        <Name>{el.name}</Name>
        </ListItem>
        ))}
    
            
    </FriendsList> 
    )
}