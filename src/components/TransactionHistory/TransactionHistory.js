import PropTypes, { arrayOf } from 'prop-types';
import {
    Table,
    Title,
    PoHorizontali,
    GeneralText,
    Info,
    InfoHor,
    InfoTd
} from './TransactionHistory.styled';
export function TransactionHistory({items}) {
    return (
        <Table>
            <Title>
                <PoHorizontali>
                    <GeneralText>Type</GeneralText>
                    <GeneralText>Amount</GeneralText>
                    <GeneralText>Currency</GeneralText>
                </PoHorizontali>
            </Title>
            <Info>{items.map(el => (
                <InfoHor key={el.id}>
                <InfoTd>{el.type}</InfoTd>
                <InfoTd>{el.amount}</InfoTd>
                <InfoTd>{el.currency}</InfoTd>
                </InfoHor>
            ))}
            </Info>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
           currency:PropTypes.string.isRequired,
        })
    )
}



