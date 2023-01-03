function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl">Ski Antler</h1>
      <div>
        <a
          href="https://instagram.com/bluewaterdreamboat"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Instagram
        </a>
        <a
          href="https://github.com/jimgartner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Header;
