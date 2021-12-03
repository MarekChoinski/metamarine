import Head from "next/head";

export interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export const Meta: React.FC<MetaProps> = ({
  title,
  description,
  image,
  url
}) => (
  <Head>
    <title>{title}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <meta property="og:title" content={title} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0"
    ></meta>
    {description && (
      <>
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
      </>
    )}
    {image && typeof window !== "undefined" && (
      <meta
        property="og:image"
        content={window.location.origin + "/img" + image}
      />
    )}
    {url && typeof window !== "undefined" && (
      <meta property="og:url" content={window.location.origin + url} />
    )}
  </Head>
);
