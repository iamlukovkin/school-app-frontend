import './first-page.css';

import PinnedElement from "./pinnedElement/PinnedElement"

export default function FirstPage() {

  return {
    page: (<>
      <h1>Школа №41</h1>
      <h2>Муниципальное бюджетное общеобразовательное учреждение</h2>
      <PinnedElement />
    </>)
  };
}
