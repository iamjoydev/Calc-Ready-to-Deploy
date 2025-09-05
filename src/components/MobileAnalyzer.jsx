'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ReportCard from './ReportCard'

export default function MobileAnalyzer(){
  const [number, setNumber] = useState('')
  const [report, setReport] = useState(null)

  const handleAnalyze = () => {
    const digits = (number || '').replace(/\D/g,'')
    if (digits.length < 10){
      alert('দয়া করে সঠিক ১০-অঙ্কের নম্বর দিন')
      return
    }
    const last = parseInt(digits.slice(-1),10)
    const data = analyze(last)
    setReport(data)
  }

  const analyze = (d) => {
    const map = {
      0:{planet:'রাহু/কেতু', effect:'চাঞ্চল্য ও অনিশ্চয়তা — টেকনিক্যাল ও আধ্যাত্মিক শক্তি পরিবাহক', remedy:'কালো তিল দান ও গঙ্গাজল দ্বারা শুদ্ধি'},
      1:{planet:'সূর্য', effect:'নেতৃত্ব, আত্মবিশ্বাস; তবে অহংকার ঝুঁকি', remedy:'রবিবার সূর্য আরাধনা ও লাল ব্যবহার'},
      2:{planet:'চন্দ্র', effect:'মানসিক ওঠানামা, সম্পর্ককেন্দ্রিক বিষয়', remedy:'সোমবার চাঁদ আরাধনা, দুধ-ফুল দান'},
      3:{planet:'বৃহস্পতি', effect:'জ্ঞান ও প্রসার — ব্যবসা/শিক্ষায় সমৃদ্ধি', remedy:'বৃহস্পতিবার হলুদ ও গুরু আরাধনা'},
      4:{planet:'রাহু', effect:'প্রযুক্তি-ড্রাইভেন ওঠানামা; প্রতারণার ঝুঁকি', remedy:'কালো তিল, সতর্ক ভেন্ডর ভেরিফিকেশন'},
      5:{planet:'বুধ', effect:'যোগাযোগ ও বাণিজ্যে সুফল', remedy:'বুধবার সবুজ ব্যবহার ও গণেশ আরাধনা'},
      6:{planet:'শুক্র', effect:'বাজার/বিলাসিতা; সম্পর্কীয় সুবিধা', remedy:'শুক্রবার সাদা ফুল ও দান'},
      7:{planet:'কেতু', effect:'আধ্যাত্মিকতা; গভীর বিশ্লেষণী শক্তি', remedy:'মন্ত্র জপ ও ধ্যান'},
      8:{planet:'শনি', effect:'শৃঙ্খলা ও বাধা; ধৈর্য পরীক্ষা', remedy:'লৌহ বস্ত্র/লক্ষ্মী-দান ও শনি আরাধনা'},
      9:{planet:'মঙ্গল', effect:'উদ্যম; হতাশা হলে ঝামেলা', remedy:'মঙ্গলবার হানুমান পাঠ ও লাল অনুষঙ্গ'}
    }
    return map[d] || {planet:'অজানা', effect:'বিশ্লেষণ সম্ভব নয়', remedy:'যোগাযোগ করুন'}
  }

  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="bg-gradient-to-br from-white/4 to-transparent p-6 rounded-3xl border border-white/8 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="text-sm text-white/80">মোবাইল নাম্বার</label>
          <input value={number} onChange={e=>setNumber(e.target.value)} placeholder="+91 98765 43210" className="w-full mt-2 p-4 rounded-xl bg-white/6 border border-white/8 text-white outline-none" />
          <div className="flex gap-3 mt-4">
            <button onClick={handleAnalyze} className="flex-1 p-3 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold hover:scale-105 transition">বিশ্লেষণ করুন</button>
            <button onClick={()=>{ setNumber(''); setReport(null)}} className="p-3 bg-white/6 rounded-xl">রিসেট</button>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white/6 p-4 rounded-xl border border-white/6">
            <h4 className="font-semibold">শুধু শেষ অঙ্ক বিবেচিত</h4>
            <p className="text-sm text-white/80 mt-2">এই টুল মোবাইল নাম্বারের শেষ অঙ্ক অনুযায়ী মুহূর্তিক জ্যোতিষ বিশ্লেষণ করে। আরো বিস্তারিত রিপোর্টের জন্য কাস্টমাইজড সেবা নিন।</p>
          </div>
        </div>
      </div>

      {report && <ReportCard report={report} />}
    </motion.div>
  )
}
