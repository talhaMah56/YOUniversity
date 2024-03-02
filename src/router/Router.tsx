import { PRIVATE_ROUTES } from ".";
import { PrivateRoutes } from "../components";

export const Router: React.FC = () => {
  return (
    <>
      <PrivateRoutes routes={Object.values(PRIVATE_ROUTES)} />
    </>
  );
};
