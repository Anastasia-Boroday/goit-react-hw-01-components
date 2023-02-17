import PropTypes from 'prop-types';
import { 
    Block,
    Title,
    StatList,
    StatItem,
    Lebel,
    Percent
} from './Statistics.styled';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export function Statistics({title,stats}) { 
return (
    <Block>
        <Title>{title}</Title>
        <StatList >
            {stats.map(el => (
                <StatItem  key={el.id} backgroundColor={randomColor()}>
                    <Lebel>{el.label }</Lebel>
                    <Percent>{el.percentage} %</Percent>
                </StatItem>           
                ))}    
        </StatList>
    </Block>
    )
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};