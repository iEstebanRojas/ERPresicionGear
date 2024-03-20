import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Bootstrap */}
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ERPresicionGear</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://www.coderhouse.com/ar/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.coderhouse.com/ar/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.coderhouse.com/ar/">Contact</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  </nav>
);
