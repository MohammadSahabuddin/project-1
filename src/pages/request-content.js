//Layout
import Layout from 'Layout';

//SEO
import Seo from 'Utils/Seo';

//Components
import Title from 'Components/RequestContent/Title';
import ContentInfo from 'Components/RequestContent/ContentInfo';
import Form from 'Components/RequestContent/Form';
import { Container } from '@mui/material';

const Request = () => {
  return (
    <Layout activePage="request-content">
      <Seo title="Request | Codeforest24" />
      <Container maxWidth={false} disableGutters component="section">
        <Title />
        <ContentInfo />
        <Form />
      </Container>
    </Layout>
  );
};

export default Request;
