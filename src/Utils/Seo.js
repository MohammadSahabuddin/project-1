import Head from 'next/head';

const Seo = ({ title }) => {
  return (
    <Head>
      <meta property="og:url" content="https://www.codeforest24.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Code Forest 24 is an organization of building websites. We have a group
        of Professional Developer thats run by enthusiasts for coding our
        process requirement & brief research development.Our values align with our mission and thats is to support our customers.
        Why would you choose us? Because we create quality-ful work and
        SEO-friendly websites that are quickly optimized. We mainly use for
        developing is next.js, node.js, express.js, graphql, etc. Dont hesitate
        to ask any questions if you have any.So why do you think? visit our website and be a part of our family."
      />
      <title>{title}</title>
      <meta
        name="description"
        content="Code Forest 24 is an organization of building websites. We have a group
        of Professional Developer thats run by enthusiasts for coding our
        process requirement & brief research development.Our values align with our mission and thats is to support our customers.
        Why would you choose us? Because we create quality-ful work and
        SEO-friendly websites that are quickly optimized. We mainly use for
        developing is next.js, node.js, express.js, graphql, etc. Dont hesitate
        to ask any questions if you have any.So why do you think? visit our website and be a part of our family."
      />
      <link rel="shortcut icon" href="/favicon.icon" />
      <meta
        name="keyword"
        content="Code Forest 24,organization,websites,group
        of Professional Developer,coding,development,
        SEO-friendly websites,optimized websites,,next.js, node.js, express.js, graphql"
      />
    </Head>
  );
};

export default Seo;
