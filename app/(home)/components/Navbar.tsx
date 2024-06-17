import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const Navbar = () => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/natnaeldemelash/',
      label: 'LinkedIn',
      icon: SiLinkedin,
    },
    {
      link: 'https://www.linkedin.com/in/natnaeldemelash/',
      label: 'GitHub',
      icon: SiGithub,
    },
    {
      link: 'https://www.linkedin.com/in/natnaeldemelash/',
      label: '',
      icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        DevByNati.D 👨🏽‍💻
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} aria-label={social.label}>
              <Icon className="size-5 hover:scale-125 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
