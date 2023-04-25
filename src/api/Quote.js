import { useState, useEffect } from 'react';

const FetchQuote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quoteResponse, setQuoteResponse] = useState([]);

  useEffect(() => {
    const category = 'family';
    const quoteApiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const apiKey = 'CdbIfp3eXA79YHLUMSwpxyYOvBHG4TsM3Oe9O9Cx';

    const getQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(quoteApiUrl,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': apiKey,
            },
          });
        const data = await response.json();
        setQuoteResponse(data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };

    getQuote();
  }, [setIsLoading, setError]);

  if (isLoading) return <h1>Quote is Loading</h1>;
  if (error) return <h1>Some error occurred!</h1>;

  return (
    <div className="quote">
      {quoteResponse.map((quotes) => (
        <div key={quotes.id}>
          {quotes.quote}
          <em className="author">{quotes.author}</em>
        </div>
      ))}
    </div>
  );
};

export default FetchQuote;
