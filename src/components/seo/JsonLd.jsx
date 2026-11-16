// Renders JSON-LD structured data. Data comes from trusted local files only;
// "<" is escaped so the content can never close the script element.
export default function JsonLd({ data }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
