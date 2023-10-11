import { LoaderContainer, Spinner } from "./styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner>
        <div className="lds-dual-ring" />
      </Spinner>
    </LoaderContainer>
  );
};

export default Loader;
