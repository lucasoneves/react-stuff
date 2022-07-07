import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";


const NewQuote = () => {

  
  const { sendRequest, status } = useHttp(addQuote)
  
  const history = useHistory();
  
  const addQuoteHandler = quoteData => {
    sendRequest(quoteData)
    console.log('add quote handler', quoteData)
  }
  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history])
  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
