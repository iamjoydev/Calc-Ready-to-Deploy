import ThemeSwitcher from './ThemeSwitcher'

export default function Header(){
  return (
    <header className="backdrop-blur-md bg-white/5 border-b border-white/6">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-md shadow-md" />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">🔮 Mobile Number Tantric Analyzer</h1>
            <p className="text-sm text-white/70">Ultra professional astrology & totka reports</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-white/80 hidden md:inline">How it works</a>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
