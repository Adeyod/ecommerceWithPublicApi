import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';

const Footer = () => {
  return (
    <div className="py-2 text-white font-bold italic bg-slate-600 fixed bottom-0 right-0 left-0">
      <div className="flex justify-center gap-x-4">
        <a
          href="https://www.facebook.com/msbtrooper"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFacebook className="text-2xl" />
        </a>
        <a
          href="https://ayodejiadebolu@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <CgMail className="text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/ayodeji-adebolu-75282418b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin className="text-2xl" />
        </a>
        <a
          href="https://twitter.com/notableprince"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle className="text-2xl" />
        </a>
        <a href="https://github.com/Adeyod" target="_blank" rel="noreferrer">
          <AiFillGithub className="text-2xl" />
        </a>
      </div>
      &copy; Ayodeji Adebolu 2023
    </div>
  );
};

export default Footer;
