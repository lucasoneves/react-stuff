import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: 'q1', author: 'Catarina Neves', text: 'Learning React is awesome!'},
  { id: 'q2', author: 'Lucas Neves', text: 'React is a amazing library!'}
]

const Quotes = () => {
  return <QuoteList quotes={DUMMY_DATA}/>;
};

export default Quotes;
