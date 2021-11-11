import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../Redux/columnsRedux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};
  console.log('ownProps', ownProps);

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);



// const tmpFunc = () => {
//   const lists = [
//     {
//       id: 10,
//       name: 'test',
//     },{
//       id: 12,
//       name: 'The Answer',
//     },
//   ];
//   const id = 42;

//   const filteredLists = [];

//   // i == 1
//   for (let i = 0; i < lists.length; i++) {
//     // list == { if:42, name: 'The Answer'}
//     const list = lists[i];

//     // list.id == 42
//     // id == 42
//     // (42 == 42) == true
//     if (list.id == id) {
//       // to się wykona dla i == 1
//       filteredLists.push(list);
//     }

//     // kiedy i == 0 to filteredLists == []
//   }

//   return filteredLists;
// };