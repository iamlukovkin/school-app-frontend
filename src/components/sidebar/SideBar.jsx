import React from 'react'

import './sidebar.css';

export default function SideBar({ pages }) {
  return (<aside>
    {pages.map((pageInformation) => {
      return (<a
        key={pageInformation.key}
        href={'/' + pageInformation.key}
      >
        <button>{pageInformation.content.title}</button>
      </a>);
    })}
  </aside>);
}
