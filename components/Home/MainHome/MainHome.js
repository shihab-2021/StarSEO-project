import Backlinks from "../Backlinks/Backlinks";
import Header from "../Header/Header";
import LocalSEO from "../LocalSEO/LocalSEO";
import SocialMediaServices from "../SocialMediaServices/SocialMediaServices";

const MainHome = () => {
  return (
    <div>
      <Header></Header>
      <Backlinks></Backlinks>
      <LocalSEO></LocalSEO>
      <SocialMediaServices></SocialMediaServices>
    </div>
  );
};

export default MainHome;
