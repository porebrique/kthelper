import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lodash from 'lodash';

const defaultMapStateToProps = (state = {}) => state;

const defaultMapDispatchToProps = (actions, dispatch) => {
  const boundActions = lodash.reduce(actions, (result, actionGroup, key ) => {
    return {
      ...result,
      [key]: bindActionCreators(actionGroup, dispatch)
    };
  }, {})
  return { actions: boundActions };
};

const createConnector = ({
  actions = {},
  mapStateToProps = defaultMapStateToProps, 
  mapDispatchToProps = defaultMapDispatchToProps.bind(null, actions)
}) => {
  return connect(mapStateToProps, mapDispatchToProps);
};

export default createConnector;