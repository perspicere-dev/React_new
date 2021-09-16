import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../Redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddCard({
    cardId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);