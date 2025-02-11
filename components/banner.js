import { XMarkIcon } from '@heroicons/react/20/solid';

const Banner = () => {

    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            
            <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
                <p className='text-sm text-gray-500 sm:text-xs'>
                    <strong className='font-semibold'>Shire Daily News: </strong>
                    <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                        <circle r={1} cx={1} cy={1} />
                    </svg>
                    The latest news from the Shire and beyond.
                </p>
                <a 
                    href='#'
                    className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                    Register now
                </a>
            </div>

            <div className='flex flex-1 justify-end'>
                <button
                    type='button' 
                    className="m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className='sr-only'>Close</span>
                    <XMarkIcon aria-hidden="true" className='size-5 text-gray-900' />
                </button>
            </div>
            
        </div>
    )

}

export default Banner;