import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData,
}) => {
  const siteName = "Jabari Namuro Portfolio";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription =
    "Frontend developer and web designer based in Toronto. Specializing in modern web development, animations, and creative user experiences.";
  const defaultImage = "/portfolio.jpg";
  const defaultUrl = "https://jabarinamuro.com";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || defaultUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url || defaultUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
