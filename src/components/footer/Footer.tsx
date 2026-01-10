import imgs from '@/assets/imgs/Footer'
import { Small } from '@/components/ui/typography'

const Footer = () => {
  return (
    <footer className='relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] overflow-hidden rounded-t-[28px] pb-[env(safe-area-inset-bottom)]'>
      {/* Background Image (Car is embedded in this image) */}
      <img
        src={imgs.bgImage}
        alt='Footer background'
        className='absolute inset-0 w-full h-full object-cover '
        width='100%'
        height='100%'
      />

      {/* COLOR OVERLAY */}
      <div className='absolute inset-0 bg-gradient-to-br from-pink-900/80 via-fuchsia-900/80 to-purple-900/80 mix-blend-multiply' />

      {/* Glow border */}
      <div className="absolute inset-0 rounded-t-[28px] ring-1 ring-pink-500 shadow-[inset_0_0_20px_theme('colors.pink.500')]" />

      {/* CONTENT */}
      <div className='relative z-10 px-3 py-4 md:px-12 md:py-12 text-white overflow-hidden'>
        {/* Main Content Area */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 relative font-inter'>
          {/* Left Side: Logo & Socials */}
          <div className='flex flex-col gap-6 max-w-lg z-20 w-full'>
            {/* Logo Section */}
            <div>
              <img
                src={imgs.creotextHolder}
                alt="CREO '26 Design Conference"
                className='h-auto w-40 sm:w-64 md:w-80 object-contain'
              />
            </div>

            {/* Social Links */}
            <div className='flex flex-wrap items-center gap-3 md:gap-6 text-xs sm:text-sm md:text-base font-bold tracking-wide text-white font-inter'>
              {/* Instagram */}
              <a
                href='https://www.instagram.com/designtab.nitr/'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity'
              >
                <img src={imgs.instagramlogo} alt='Instagram' className='w-4 h-4 md:w-6 md:h-6' />
                <span>@designtab</span>
              </a>

              {/* Divider Dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_theme('colors.pink.500')]" />

              {/* Email */}
              <a
                href='mailto:designtabnitr@gmail.com'
                className='flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity'
              >
                <img src={imgs.envelope} alt='Email' className='w-4 h-4 md:w-6 md:h-6' />
                <span>designtabnitr@gmail.com</span>
              </a>
            </div>

            {/* Contact Info (Aligned with Logo) */}
            <div className='flex flex-col gap-4 mt-4 md:mt-8'>
              {/* Phone Numbers */}
              <div className='flex flex-col md:flex-row gap-3 md:gap-16 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider'>
                {/* Person 1 */}
                <div className='flex items-center gap-3 md:gap-4'>
                  <div className='bg-white/10 p-2 md:p-2.5 rounded-xl backdrop-blur-md border border-white/10'>
                    <img src={imgs.phone} alt='Phone' className='w-7 h-7 md:w-10 md:h-10' />
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <Small className='text-white/60 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest font-inter'>
                      SOMANATH MAHANTA
                    </Small>
                    <a
                      href='tel:+917008630917'
                      className='hover:text-pink-300 transition-colors tracking-widest font-inter'
                    >
                      +91 7008630917
                    </a>
                  </div>
                </div>

                {/* Person 2 */}
                <div className='flex items-center gap-3 md:gap-4'>
                  <div className='bg-white/10 p-2 md:p-2.5 rounded-xl backdrop-blur-md border border-white/10'>
                    <img src={imgs.phone} alt='Phone' className='w-7 h-7 md:w-10 md:h-10' />
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <Small className='text-white/60 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest font-inter'>
                      ANKITA BEHERA
                    </Small>
                    <a
                      href='tel:+917853836381'
                      className='hover:text-pink-300 transition-colors tracking-widest font-inter'
                    >
                      +91 7853836381
                    </a>
                  </div>
                </div>
              </div>

              {/* "Contact Us" Image Header */}
              <div className='mt-1 md:mt-2 text-left'>
                <img
                  src={imgs.contacttext}
                  alt='Contact Us'
                  className='h-3 md:h-5 object-contain'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Credits (Relative on mobile to prevent overlap, Absolute Bottom Right on Desktop) */}
        <div className='flex justify-end mt-8 mr-2 md:mt-0 md:mr-0 md:absolute md:bottom-6 md:right-12 z-20 opacity-80'>
          <img
            src={imgs.textdsc}
            alt='Crafted by DSC NIT Rourkela'
            className='h-4 md:h-6 object-contain'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
