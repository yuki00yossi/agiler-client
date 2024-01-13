'use client'

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"


export default function MotionWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}

        transition={{ duration: .25 , ease: "linear"}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
