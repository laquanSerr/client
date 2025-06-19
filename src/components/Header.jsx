import { Link } from 'react-router-dom';


export default function Header() {
  return (

    <div className="bg-red-300 p-10 text-white text-center text-xl">
        If you can see this red box, Tailwind’s alive.

      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="font-bold text-xl">Auth App</h1>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/SignIn">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
