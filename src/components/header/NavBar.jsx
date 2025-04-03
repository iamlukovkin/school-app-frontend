export default function NavBar() {
  const infoLinks = [
    {
      key: '',
      title: 'Главная',
    },
    {
      key: 'about',
      title: 'О школе',
    }
  ];
  return (<nav>
    {infoLinks.map(element => {
      return <a key={element.key} href={"/" + element.key}>{element.title}</a>
    })}
  </nav>);
}
