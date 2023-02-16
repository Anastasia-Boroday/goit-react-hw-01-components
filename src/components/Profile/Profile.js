import PropTypes from 'prop-types';
import {
    Card,
    DescriptionInfo,
    Photo,
    Name,
    Tag,
    Location,
    Stats,
    StatElement,
    StateText,
    StateNumber
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, followers,views,likes }) {
    return (
      <Card>
            <DescriptionInfo>
                <Photo
                    src={avatar}
                    alt="User avatar"
                    />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </DescriptionInfo>
            <Stats>
                <StatElement>
                    <StateText>Followers</StateText>
                    <StateNumber>{followers}</StateNumber>
                </StatElement>
                <StatElement>
                    <StateText>Views</StateText>
                    <StateNumber>{views}</StateNumber>
                </StatElement>
                <StatElement>
                    <StateText>Likes</StateText>
                    <StateNumber>{likes}</StateNumber>
                </StatElement>
            </Stats>
        </Card> 
    );
}
Profile.PropType = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
};
