function Header() {
  return (
    <div className="flex items-center mx-auto w-[var(--header-width)] h-[var(--header-height)]">
      <div className="flex flex-1 mr-auto font-bold">Logo</div>
      <div className="flex flex-1">
        <ul className="flex text-base gap-5 text-gray-700 font-light">
          <li>Features</li>
          <li>Templates</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className="flex items-center justify-end flex-1 text-base gap-5 text-gray-700 font-light">
        <a href="#">Contact</a>
        <a href="#">Login</a>
        <a
          role="button"
          className="bg-black py-2 px-3 text-white rounded-lg"
          href="#"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Header;
