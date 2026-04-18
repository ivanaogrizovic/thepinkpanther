import "./quote.scss";

type QuoteProps = {
  quote: string;
  author: string;
};

export default function Quote({ quote, author }: QuoteProps) {
  return (
    <div className="pinkpanther-quote" role="region" aria-label="Quote section">
      <p>
        <i>‘{quote}’</i>
      </p>
      <p>
        <b>— {author}</b>
      </p>
    </div>
  );
}
