import PropTypes from 'prop-types';

function Quote({ text }) {
  return <li>{text}</li>;
}

Quote.propTypes = {
  text: PropTypes.string,
};
Quote.defaultProps = {
  text: 'MissingQuote',
};

export default Quote;
