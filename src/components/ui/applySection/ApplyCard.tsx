import { Button } from '../button'
import { H4, P } from '../typography'

interface cardProps {
  heading: string
  tillDate: string
  price: number
  registrationType: 'Early' | 'Regular'
}

const handleEarlyRegistration = async () => {}
const handleRegularRegistration = async () => {}

function ApplyCard({ heading, tillDate, price, registrationType }: cardProps) {
  return (
    <div className='flex flex-col flex-wrap text-white border h-fit w-80 rounded-md backdrop-blur-sm hover:bg-[#a2327570] duration-300 z-40'>
      <div className='flex flex-col border-b-2 p-5 pb-2 border-dashed'>
        <H4 className='flex flex-col font-fort'>{heading}</H4>
        <P className='mt-0!'>{tillDate}</P>
      </div>
      <div className='flex flex-col p-5 pb-5'>
        <div className='flex gap-3 items-baseline'>
          <P className='text-4xl font-semibold'>₹{price}</P>
          <P>Per person</P>
        </div>
        <Button
          className='self-start bg-black mt-10 px-5 py-2 border cursor-pointer'
          onClick={
            registrationType === 'Early' ? handleEarlyRegistration : handleRegularRegistration
          }
        >
          Register now
        </Button>
      </div>
    </div>
  )
}

export default ApplyCard
