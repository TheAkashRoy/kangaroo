import { Outlet, Link } from "react-router-dom";
import "../index.css";

export default function Root() {
  const cars = ["Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW"];
  const renderList = cars.map((item) => <li><Link  to={`contacts/`+item}>{item}</Link></li>);
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form method="post" className="center container">
              <button type="submit" >Take your test now</button>
            </form>
          </div >
          <nav>
            <ul>
              {renderList}
            </ul>
          </nav>
        </div>
        <Outlet />
        {/* <div id="detail"></div> */}
      </>
    );
  }