export default function Navbar() {
  const links = [
    {id: 1, title: 'about', href: '/'},
    {id: 2, title: 'blog', href: '/'},
    {id: 3, title: 'contact', href: '/'},

  ];

  return (
    <nav className=
    "flex justify-around p-5 bg-slate-200">
      <h3 className="mr-100">Dudeman</h3>
      <div className="flex gap-15">
        {links.map((link) => (
          <a href={link.href} key={link.id}>{link.title}</a>
        ))}
      </div>
    </nav>
  );
}