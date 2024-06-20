import { FaLocationArrow } from 'react-icons/fa';
import { MovingBorderBtn } from '@/app/ui/moving-boarder';
import Navbar from './Navbar';
import { socialMedia } from '@/app/(constants)';
const Footer = () => {
  return (
    // <footer className="border-t mt-10 md:mt-24 ">
    //   <Navbar className="flex flex-col gap-5" />
    // </footer>
    <footer className='w-full py-10'>
      <div className='absolute w-full left-0 -bottom-72 min-h-96'>
        <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-[#CBACF9]'>Your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 my-5 md:mt-10 text-center'>Feel free to get in touch, and let's chat about how can I support you in reaching your goals.</p>

        <a href="mailto:natnael.dev101@gmail.com">
           <MovingBorderBtn borderRadius="0.5rem" className="p-4 font-semibold">
              <div className='flex items-center gap-3'>
                <span>Let's get in touch</span><FaLocationArrow />
              </div>
          </MovingBorderBtn>
        </a>
      </div>
      <div className='flex flex-col space-y-3 mt-16 md:flex-row justify-between items-center'>
          <p className='text-sm font-light md:text-base md:font-normal'>Copyright &copy; 2024 Natnael Demelash</p>
            <div className='flex items-center gap-6 md:gap-3'>
              {socialMedia.map((social, index) => (
                <div key={index}>
                  <img src={social.img} alt="social" width={25} height={25} />
                </div>
              ))}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
