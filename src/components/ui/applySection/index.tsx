import imgs from '@/config/apply'
import ApplyCard from './ApplyCard'
import { H1, H2, P } from '../typography'

function ApplySection() {
  return (
    <div>
      <div className='flex flex-col items-center bg-[#000000] pt-3 pb-2'>
        <H1 className='scroll-m-20 text-4xl tracking-tight lg:text-4xl font-fort text-white flex gap-3 [@media(max-width:530px)]:text-[1.3rem]'>
          <img src={imgs.leftBolt} alt='' className='w-18 [@media(max-width:530px)]:w-12' />
          <P className='font-fort'>Apply Right Away!</P>
          <img src={imgs.rightBolt} alt='' className='w-18 [@media(max-width:530px)]:w-12' />
        </H1>
        <H2 className='text-neutral-200 scroll-m-20 text-md tracking-tight font-gabarito border-0'>
          Prices so cheap even you can’t resist
        </H2>
      </div>
      <div
        className={`min-h-[84vh] bg-[url('${imgs.bg}')] bg-center bg-no-repeat bg-cover flex flex-col items-center min-w-scren overflow-x-hidden`}
      >
        <div className='flex w-full overflow-visible mt-40 [@media(max-width:703px)]:mt-10 items-center justify-center mx-5 px-5 mb-5 relative'>
          <img
            src={imgs.blurCube}
            alt=''
            className='absolute left-1/2 -translate-x-[calc(50%+20.9rem)] top-1/2 -translate-y-1/5 w-56 z-10'
          />
          <div className='flex gap-6 flex-wrap justify-center relative'>
            <ApplyCard
              heading='EARLY BIRD REGISTRATION'
              tillDate='15 July'
              price={199}
              registrationType='Early'
            />
            <ApplyCard
              heading='REGULAR REGISTRATION'
              tillDate='15 July'
              price={299}
              registrationType='Regular'
            />
          </div>
          <img
            src={imgs.normalCube}
            alt=''
            className=' absolute left-1/2 translate-x-[calc(50%+7rem)] top-1/8 -translate-y-1/2 w-56 z-10'
          />
        </div>
      </div>
    </div>
  )
}

export default ApplySection
