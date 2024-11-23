'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

export default function SideBar() {
  const MenuList = [
    {
      title: 'Home',
      icon: <i className="fa fa-home mr-2"></i>,
    },
    {
      title: 'Contact',
      icon: <i className="fa fa-envelope mr-2"></i>,
    },
    {
      title: 'AboutUs',
      icon: <i className="fa fa-info-circle mr-2"></i>,
    },
    {
      title: 'Settings',
      icon: <i className="fa fa-cog mr-2"></i>,
    },
    {
      title: 'Contact',
      icon: <i className="fa fa-home mr-2"></i>,
    },
    {
      title: 'RateUs',
      icon: <i className="fa fa-star mr-2"></i>,
    },
    {
      title: 'Change Password',
      icon: <i className="fa fa-eye mr-2"></i>,
    },
    {
      title: 'Settings',
      icon: <i className="fa fa-cog mr-2"></i>,
    },
  ];
  return (
    <>
      {MenuList.map((list, i) => (
        <motion.div
          key={i}
          transition={{ type: 'spring', damping: 22, mass: 0.99 }}
          initial={{ opacity: 0, x: -2000 * (i + 1) }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ul className='"list-none p-0 min-w-[200px]"'>
            {
              <motion.li
                className="mb-4 text-[1.2rem] p-2 shadow-md cursor-pointer rounded-[10px]"
                whileHover={{ scale: 1.1 }}
              >
                <motion.span
                  transition={{ type: 'spring', damping: 30, mass: 0.99 }}
                  initial={{ opacity: 0, x: -10000 * (i + 1) }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    color: '#000',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginLeft: '10px',
                    lineHeight: 2,
                  }}
                >
                  {list.icon}
                  {list.title}
                </motion.span>
              </motion.li>
            }
          </ul>
        </motion.div>
      ))}
    </>
  );
}
