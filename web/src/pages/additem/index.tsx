import { connect } from 'react-redux';
import AddItem from './AddItem';

export default connect(
  state => ({ ...state }),
  null
)(AddItem);
