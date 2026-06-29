export default function ButtonHud() {
  return (
    <div className="relative">
      <div className="bg-amber-300 w-2.5 h-2.5 rounded-full z-1 absolute right-0 top-0 -m-0.5 animate-pulse">
      </div>
      
      <button className="p-1 px-2 text-sm rounded-2xl font-black cursor-pointer transition-all duration-300 glass">
        COLE UM ADESIVO
      </button>
    </div>
  );
}
