import useAuth from "@/hooks/useAuth";
import { MdLogout } from "react-icons/md";
import {
  NavContainer,
  NavText,
  TextContainer,
  UserDetailsContainer,
  UserImage,
} from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "@/api/axiosInstance";
import useAxiosOptions from "@/hooks/useAxiosOptions";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const axiosOptions = useAxiosOptions();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setAuth({});
    await axios.get("/users/logout", axiosOptions);
    navigate("/login", { replace: true });
  };

  return (
    <NavContainer>
      <TextContainer>
        <h1>Notes App</h1>
        <NavText>Take notes and never forget</NavText>
      </TextContainer>
      {auth.username && (
        <UserDetailsContainer>
          <UserImage />
          {auth.username}
          <button onClick={handleLogout}>
            <MdLogout />
          </button>
        </UserDetailsContainer>
      )}
    </NavContainer>
  );
};

export default Navbar;
