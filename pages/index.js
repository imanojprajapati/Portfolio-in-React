import Header from "../Components/Header";
import Main from "../Components/Main";
import Portfolio from "../Components/Portfolio";
import Whatwedo from "../Components/Whatwedo";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900">
        <Header />
        <Main />
        <Whatwedo />
        <Portfolio />
      </div>
    </>
  );
}
