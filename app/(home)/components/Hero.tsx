import { MovingBorderBtn } from '@/app/ui/moving-boarder';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="min-h-[70vh] flex flex-col-reverse pt-4 lg:pt-0 gap-14 lg:gap-0 lg:flex-row justify-between items-center">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="font-bold leading-8 text-4xl lg:text-7xl">
          Hey👋🏽! I&apos;m Natnael
          <br />
          <span className="block mt-6 text-3xl lg:text-5xl text-green-300">
            FrontEnd Developer
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Passionate Frontend Web Developer based in Addis Ababa, committed to
          creating engaging and user-centric digital experiences.
        </p>
        <Link
          href={'mailto:natnael.dev101@gmail.com'}
          className="inline-block group"
        >
          <MovingBorderBtn borderRadius="0.5rem" className="p-4 font-semibold">
            <p>Contact Me 📫</p>
          </MovingBorderBtn>
        </Link>
      </div>

      <div className="relative">
        <div>
          <Image
            src="/profile.jpg"
            alt="profile"
            width={350}
            height={350}
            className="rounded-full"
          />
        </div>

        <div className="absolute bottom-5 sm:bottom-8 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-4 font-semibold">
            <p>💼 Available for Freelance</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
