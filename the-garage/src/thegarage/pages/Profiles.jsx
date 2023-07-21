import Container from 'react-bootstrap/Container';
import { NavProfiles, ProfilesRoutes, TestProfiles } from '../components';

export const Profiles = () => {
  return (
    <Container fluid className="text-main-color my-4">
      <div className="mx-5 border rounded py-2 px-5 bg-secondary-subtle">
        <TestProfiles />
      </div>
      <div className="d-flex p-2">
        <div className="border-end col-2">
          <NavProfiles />
        </div>
        <ProfilesRoutes />
      </div>
    </Container>
  );
};
