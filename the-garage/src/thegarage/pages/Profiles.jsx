import Container from 'react-bootstrap/Container';
import { NavProfiles, ProfilesRoutes, ProfileDetails } from '../components';

export const Profiles = () => {
  return (
    <Container fluid className="text-main-color my-4">
      <div className="mx-2 border rounded px-5 bg-secondary-subtle">
        <ProfileDetails />
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
