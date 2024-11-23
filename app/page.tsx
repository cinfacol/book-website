'use client';
import BookCard from '@/components/BookCard';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import { books } from '@/constants/mockData';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="w-[95%] mx-auto">
        <div>
          <Header />

          <div className="flex justify-between items-start">
            <section className="w-4/12">
              <SideBar />
            </section>

            <div className="bg-[#f8eadd] bg-opacity-50 mx-[30px] py-[10px] px-[1px] rounded-[20px]">
              <h1 className="pl-10">ALL BOOKS</h1>
              <ul className="list-none flex flex-wrap justify-between">
                {books.map((book, i) => (
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', damping: 50, mass: 0.75 }}
                    initial={{ opacity: 0, x: 200 * (i + 1) }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i}
                  >
                    <Link href={`/book/${book.id}`} className="no-underline">
                      <BookCard
                        title={book.title}
                        coverImage={book.image}
                        description={book.description}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
