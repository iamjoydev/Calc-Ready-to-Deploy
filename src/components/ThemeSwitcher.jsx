import { useEffect, useState } from 'react'

export default function ThemeSwitcher(){
  const [dark, setDark] = useState(true)
  useEffect(()=> {
    document.documentElement.classList.toggle('dark', dark)
  },[dark])
  return (
    <button onClick={()=> setDark(!dark)} className="p-2 rounded-full bg-white/6 hover:bg-white/10">
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
