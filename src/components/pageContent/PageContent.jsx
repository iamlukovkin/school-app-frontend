import { Route, Router, Routes } from "react-router-dom";
import './pageContent.css';

export default function PageContent({ pages }) {

  const routeBuilder = (information) => {

    let link = '/';
    const isIndexPage = information.key !== 'first_page';
    if (isIndexPage) {
      link += information.key;
    }

    return (<Route
      key={information.key}
      exact
      index={link === '/'}
      path={link}
      element={pageBuilder(information.content, isIndexPage)}
    />);
  }

  const pageBuilder = (content, isIndexPage) => {
    return (<div className="info-page">
      {isIndexPage && (<h1>{content.title}</h1>)}
      {isIndexPage && (<p>{content.description}</p>)} {content.page}
    </div>);
  };

  return (<>
    <Router location={window.location} navigator={window.history}>
      <Routes>
        {pages.map(pageInformation => routeBuilder(pageInformation))}
      </Routes>
    </Router>
  </>);
}
