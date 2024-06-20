import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { FaFilePdf } from 'react-icons/fa6';

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/natnaeldemelash/',
      label: 'LinkedIn',
      icon: SiLinkedin,
    },
    {
      link: 'https://github.com/natnaeldemelash',
      label: 'GitHub',
      icon: SiGithub,
    },
    {
      link: 'https://x.com/nati_demelash',
      label: 'X',
      icon: SiX,
    },
    {
      link: '/natnaeldemelash.pdf',
      label: 'Resume',
      icon: FaFilePdf,
      download: true
    },
  ];

  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        DevByNati.D 👨🏽‍💻
      </h1>

      <div className="flex items-center gap-5">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <Link
            key={index}
            href={social.link}
            aria-label={social.label}
            {...(social.download ? { download: true } : { target: "_blank" })} // Conditional attributes
            rel="noopener noreferrer"
          >
            <Icon className="size-5 hover:scale-125 transition-all" />
          </Link>
        );
      })}
</div>
    </nav>
  );
};

export default Navbar;
