'use client';
import { books } from '@/constants/mockData';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor, useDomValue } from 'reactjs-editor';

export default function BookPage() {
  const { id } = useParams();

  const { dom, setDom } = useDomValue();

  const selectedBook = books.filter((book, i) => {
    return id === String(book.id);
  });
  const notify = () => toast('Your changes has been saved!!');

  const handleSave = () => {
    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };

    localStorage.setItem(
      `dom${selectedBook[0].id}`,
      JSON.stringify(updatedDomValue),
    );
    notify();
  };

  useEffect(() => {
    const savedDom = localStorage.getItem(`dom${selectedBook[0].id}`);
    if (savedDom) {
      setDom(JSON.parse(savedDom));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedBook.length) return <p>Book not found</p>;

  return (
    <motion.div
      transition={{ type: 'spring', damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        transition={{ type: 'spring', damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-[90%] mx-auto justify-between items-center min-h-[5vh] mt-2 mb-2"
      >
        {/* <div className={styles.leftIcons}> */}
        <div className="">
          <i
            style={{ fontSize: '20px', cursor: 'pointer' }}
            className="fas fa-chevron-left"
          ></i>
        </div>
        <div className="pl-10">
          {' '}
          <h2 className="text-center uppercase pl-[100px]">
            {' '}
            {selectedBook[0].title}
          </h2>
        </div>
        <div className="">
          {/* <div className={styles.icons}> */}
          <button
            className="px-8 py-2 bg-transparent rounded-[30px] border border-black mr-5 cursor-pointer"
            onClick={handleSave}
          >
            Save
          </button>
          <i className="fas fa-cog mr-5 text-[20px]"></i>
          <i className="fas fa-share mr-5 text-[20px]"></i>
          <i className="fas fa-search mr-5 text-[20px]"></i>
        </div>
      </motion.section>

      <Editor
        /** htmlContent accepts only one element. Just wrap everything on one element **/
        htmlContent={`
        <main className="h-[80vh] w-[95%] mx-auto flex justify-between flex-wrap">
    <aside>
    <h1 className="text-center text-[36px] font-light mb-1">${selectedBook[0].title} </h1>
    <span className="text-center text-[36px] font-light mb-1 block"> By ${selectedBook[0].author} </span>
    ${selectedBook[0].content}
    </aside>
        </main>
        `}
      />
      <ToastContainer />
    </motion.div>
  );
}
