import PropTypes from 'prop-types';

const columnProp = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string
});

export { 
  columnProp
};
