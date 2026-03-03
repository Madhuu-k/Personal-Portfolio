/**
 * Box - reusable certificate / card component
 *
 * Props:
 *   title    {string}         - Card heading (shown at bottom in gold)
 *   content  {string|node}    - Description text or an <img /> element
 *   issuer   {string}         - Optional issuer / credential body
 *   date     {string}         - Optional date string  e.g. "2024"
 *   link     {string}         - Optional credential URL
 */
export default function Box({ title, content, issuer, date, link }) {
  const isImage = content && typeof content === "object";

  const inner = (
    <div className="box-container">

      {/* Content area — image or text */}
      <div className={`box-content ${isImage ? "box-content--image" : ""}`}>
        {content}
      </div>

      {/* Meta row */}
      {(issuer || date) && (
        <div className="box-meta">
          {issuer && <span className="box-issuer">{issuer}</span>}
          {date   && <span className="box-date">{date}</span>}
        </div>
      )}

      {/* Title */}
      <div className="box-title">{title}</div>
    </div>
  );

  // If a link is provided, wrap in an anchor
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="box-link-wrapper"
      >
        {inner}
      </a>
    );
  }

  return inner;
}