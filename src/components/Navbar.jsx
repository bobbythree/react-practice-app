export default function Navbar() {
  const links = [
    {id: 1, title: 'about', href: '/'},
    {id: 2, title: 'blog', href: '/'},
    {id: 3, title: 'contact', href: '/'},

  ];

  return (
    <nav className=
    "flex justify-around p-5 bg-slate-200">
      <h3 className="mr-100 font-bold">Dudeman</h3>
      <div className="flex gap-15">
        {links.map((link) => (
          <a href={link.href} key={link.id}>{link.title}</a>
        ))}
      <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn mb-1 bg-orange-300 text-slate-800">CTA</div>
        <ul tabIndex={0} className="dropdown-content menu bg-slate-600 rounded-box z-1 w-52 p-2 shadow-sm">
          <li className="text-slate-200"><a>Item 1</a></li>
          <li className="text-slate-200"><a>Item 2</a></li>
        </ul>
      </div>
      </div>
    </nav>
  );
}