import Quote from './Quote';

const quotes = [
  'Chuck Norris ne sait pas à quoi ressemble Nicolas Sarkozy, en effet Chuck Norris ne baisse jamais les yeux.',
  'Un jour Chuck Norris a eu un zero en latin, depuis c$apos;est une langue morte.',
];
function QuoteList() {
  return (
    <>
      <h2>best facts:</h2>
      <ul>
        {quotes.map((quote) => {
          return <Quote text={quote} />;
        })}
      </ul>
    </>
  );
}

export default QuoteList;
