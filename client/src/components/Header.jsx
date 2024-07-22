import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Language from "./Language";
export default function Header() {
  const { t } = useTranslation("translation", {
    keyPrefix: "header",
  });
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('')
  const { currentUser } = useSelector((state) => state.user);
  const path = useLocation();
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if(searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])
  const handleSignOut = async () => {
    try {
      const res = await fetch(`/api/user/signout`, {
        method: "post",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit =(e) =>{
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  }
  return (
    <Navbar className="border-b-2 fixed z-50 w-full bg-white">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white md:pl-10"
      >
        <img src="/logo.png" alt="logo" width={150} />
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder={t('search')}
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></TextInput>
      </form>
      <Button
        className="w-12 h-12 lg:hidden flex items-center justify-center"
        color="gray"
        pill
      >
        <AiOutlineSearch></AiOutlineSearch>
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-12 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-semibold truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to="/dashboard?tab=profile">
                <Dropdown.Item>{t('profile')}</Dropdown.Item>
              </Link>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item onClick={handleSignOut}>{t('sign_out')}</Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <Link to={"/sign-in"}>
            <Button gradientDuoTone={"purpleToBlue"}>{t('sign_in')}</Button>
          </Link>
        )}
        <Navbar.Toggle></Navbar.Toggle>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">{t('home')}</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">{t('about_me')}</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">{t('projects')}</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} className="relative">
          <div className="absolute -translate-y-[60px]">
            <Language />
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
