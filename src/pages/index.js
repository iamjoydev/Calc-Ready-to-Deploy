import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MobileAnalyzer = dynamic(() => import('../components/MobileAnalyzer'), { ssr: false })

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#07193a] via-[#0f3d54] to-[#072029] text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <MobileAnalyzer />
      </main>
      <Footer />
    </div>
  )
}
