export default function Navbar({logo="dudeman"}) {
  

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl ml-30">{logo}</a>
      </div>
      <div className="flex-none pr-30">
        <ul className="menu menu-horizontal">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}