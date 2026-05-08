const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-6">
      <div className="flex items-center">
        <h1 className="font-cherrybomb text-3xl">Instant Chat</h1>
      </div>
      <div className="flex gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-md shadow-lg px-4 py-3">
        <div className="flex items-center">
          <button type="button">Theme</button>
        </div>
        <div className="flex items-center">
          <button type="button">User</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
