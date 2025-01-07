function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="font-medium text-xl">Ski Antler</h1>
      </a>
      <div>
        <a
          href="https://github.com/rebeccapeltz/ski-antler"
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
