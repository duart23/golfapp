export const NavBar = () => {
  return (
    <nav className="navbar relative flex items-center h-16 px-8">
        
    <div className="logo flex items-center gap-2">
      <img className="h-8 w-auto" src="/logo.svg" alt="logo" />
      <h1 className="text-lg font-bold">GOLF APP</h1>
    </div>
  
    <div className="pages absolute left-1/2 transform -translate-x-1/2 flex gap-12 text-blue-400 font-normal">
      <div>MAIN</div>
      <div>GAMES</div>
      <div>FRIENDS</div>
      <div>STATISTICS</div>
      <div>SUPPORT</div>
    </div>
  </nav>
  

  );
};
