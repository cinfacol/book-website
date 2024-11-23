'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 pr-4 text-white">
      <motion.div
        className="flex items-center"
        transition={{ type: 'spring', damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="mr-8 text-black">Book App</h1>
        <motion.input
          type="text"
          placeholder="Tell me what you like to read and we will get that ...."
          className="p-[0.7rem] ml-[3.6rem] rounded-[70px] bg-[rgb(248,234,221)] border-2 border-black min-w-[320px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        />
      </motion.div>

      <motion.div
        className="flex items-center"
        transition={{ type: 'spring', damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/profile" className="mr-4">
          <motion.img
            src="https://imageio.forbes.com/specials-images/imageserve/6244c655b6ecfb569a31a3ba/John-Cena-performing-his-famous--You-Can-t-See-Me--taunt-/0x0.jpg?format=jpg&crop=1200,675,x0,y0,safe&width=960"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </Link>
      </motion.div>
    </header>
  );
}
