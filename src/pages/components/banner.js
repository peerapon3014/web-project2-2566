import { XMarkIcon } from '@heroicons/react/20/solid'
import Search from '@/pages/components/search'

export default function Example() {
    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#1373BB] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 text-white">

                    E-Learning
                    college of computing khon kaen university
                </p>

               

            </div>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">Dismiss</span>

                </button>
            </div>
        </div>
    )
}

