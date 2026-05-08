import { Palette, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[clamp(20px,4.16vw,160px)] py-[20px] 2k:py-[3vw] h-14 box-content">
      <div className="flex items-center h-full">
        <h1 className="font-cherrybomb text-[clamp(1.5rem,1rem+1.042vw,3.5rem)] text-white cursor-pointer">
          Instant Chat
        </h1>
      </div>
      <div className="h-full flex gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-lg px-1 py-1">
        <div className="h-full flex items-center">
          <button
            type="button"
            className="hover:bg-white/15  h-full aspect-square flex items-center justify-center rounded-lg cursor-pointer"
          >
            <Palette className="w-5 aspect-square" />
          </button>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="hover:bg-white/15 h-full aspect-square flex items-center justify-center rounded-lg cursor-pointer"
          >
            <User className="w-5 aspect-square" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
