import { Button } from "@alpha-labs/react-components";
// import { Button } from '@alpha-labs/styleguide';
import { Link, BrowserRouter } from "react-router-dom";

export default function Root(props) {
  const menuLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    // {
    //    title: 'Payroll',
    //    path: '/payroll',
    // },
    // {
    //    title: 'HRIS',
    //    path: '/hris',
    // },
  ];

  return (
    <BrowserRouter>
      <header className="flex justify-between flex-row">
        <h2>Title Here</h2>
        <ul className="flex flex-row gap-1">
          {menuLinks.map((link) => {
            return (
              <Link key={link.path} to={link.path} className="bg-primary">
                {link.title}
              </Link>
            );
          })}
        </ul>
        <div>
          {props.name} is mounted!!!
          <Button></Button>
        </div>
      </header>
    </BrowserRouter>
  );
}
