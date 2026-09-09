import { Helmet } from "react-helmet-async";

// Sets a unique <title> and meta description per page. Each page component
// should render this once, near the top of its returned JSX, with content
// specific to that page — this is what lets each route be found and ranked
// for its own keywords instead of every page looking identical to Google.
export default function SEO({ title, description }) {
  const fullTitle = `${title} | Pamela Goldsteen, LCSW`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
