import { motion } from 'framer-motion'

export default function ReportCard({report}){
  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:0.45}} className="mt-6 p-5 rounded-2xl bg-white/6 border border-white/8">
      <h3 className="text-xl font-bold">{report.planet}</h3>
      <p className="mt-2 text-white/85">{report.effect}</p>
      <p className="mt-3 text-green-300 font-semibold">প্রতিকার: {report.remedy}</p>
    </motion.div>
  )
}
