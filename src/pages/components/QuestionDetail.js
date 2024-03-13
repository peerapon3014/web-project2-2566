import { CheckIcon } from '@heroicons/react/20/solid'
import Webde from '../images/webde.png'
const includedFeatures = [
  'หลักการออกแบบเว็บไซต์',
  'การวางแผนออกแบบเว็บไซต์',
  'การออกแบบเนื้อหา',
  'การวางแผนระบบนำทาง',
]
import Accordion from "@/pages/data/AdcordionQuestion"
import MyNav from '@/pages/components/Navbar' 
import MyFooter from '@/pages/components/footer'  

export default function QuestionDetail() {
  return (
    <>
    <MyNav/>
    <div className="p-6 py-8 lg:px-32 md:px-8 p-6 py-8 lg:px-32 md:px-8 mt- inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
        <div className="mx-auto  max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">คำถามทั้งหมด</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
             รายการคำถามทั้งหมด 
            </p>
           
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className=" py-10  lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                         
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white  shadow-xl shadow-blue-100/50  mt-10 p-8 '> 
          <div className='mb-5 '>
            <Accordion />
            
             </div>
          
        </div>
          
      </div>
    </div><MyFooter/></>
    
  )
}
