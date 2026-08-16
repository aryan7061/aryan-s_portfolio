import { quote } from "../data/portfolio";
import "./Quote.css";

export default function Quote() {
  return (
    <section className="wrap quote-section">
      <div className="quote-box">
        <div className="quote-box__topline" />
        <span className="quote-mark">"</span>
        <blockquote>{quote.text}</blockquote>
        <span className="quote-attr">— {quote.author}</span>
      </div>
    </section>
  );
}
