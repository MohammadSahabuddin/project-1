//Layout
import Layout from 'Layout';

//Components
import Title from 'Components/RequestContent/Title';
import ContentInfo from 'Components/RequestContent/ContentInfo';
import Form from 'Components/RequestContent/Form';
import { Container } from '@mui/material';

const Request = () => {
  return (
    <Layout activePage="request-content">
      <Container maxWidth={false} disableGutters component="section">
        <Title />
        <ContentInfo />
        <Form />
      </Container>
    </Layout>
  );
};

export default Request;
