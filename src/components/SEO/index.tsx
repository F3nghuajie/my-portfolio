import React from 'react';
import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  twitterHandle?: string;
};

const SEO: React.FC<SEOProps> = ({
  title = 'John Doe — Full-Stack Software Engineer',
  description = 'I build innovative and efficient digital solutions that solve real-world problems.',
  url = typeof window !== 'undefined' ? window.location.href : 'https://your-site.example',
  image = '/images/remote-eye.jpg',
  twitterHandle = '@yourhandle',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
