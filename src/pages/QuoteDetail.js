import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Catarina Neves", text: "Learning React is awesome!" },
  { id: "q2", author: "Lucas Neves", text: "React is a amazing library!" },
];

const QuoteDetail = () => {
  useEffect(() => {
    console.log(params);
  }, []);

  const params = useParams();
  const match = useRouteMatch();

  console.log(match)

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
