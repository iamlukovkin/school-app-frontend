import './App.css';

import Header from "./components/header/Header";
import SideBar from './components/sidebar/SideBar';
import PageContent from './components/pageContent/PageContent';
import Footer from './components/footer/Footer';
import PagesAndLinks from './components/pages/PagesAndLinks';

export default function App() {

  const pagesAndLinks = PagesAndLinks();

  return (<>
    <Header />
    <main>
      <SideBar
        pages={Object.entries(pagesAndLinks)
          .filter(([_, properties]) => properties.isInSideBar)
          .map(([page, properties]) => ({
            key: page,
            content: properties.content
          }))}
      />
      <PageContent
        pages={Object.entries(pagesAndLinks)
          .map(([page, properties]) => ({
            key: page,
            content: properties.content
          }))}
        indexPage={'first_page'}
      />
    </main>
    <Footer />
  </>);
}

