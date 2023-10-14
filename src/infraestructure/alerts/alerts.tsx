import toast from 'react-hot-toast';
import { DoneIcon, ErrorIcon } from '../components/ui/icons';

const errorNotification = (message: string) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-gradient-to-r from-red-900 from-5% via-zinc-800 to-zinc-900 to-80% shadow-lg rounded-lg font-bold pointer-events-auto flex text-white py-3 px-4`}
    >
      <div className="flex items-center w-full relative">
        <span className="p-1 bg-red-800 mr-2 rounded-lg text-red-300">
          <ErrorIcon />
        </span>
        <div>
          <span className="block text-lg">Opps</span>
          <span className="block text-sm">{ message }</span>
        </div>
        <button 
          type="button" 
          onClick={() => toast.dismiss(t.id)}
          className="absolute right-0 text-gray-600 hover:text-gray-300 transition-all duration-500 ease-out">
          <ErrorIcon />
        </button>
      </div>
    </div>
  ))
}

const successNotification = (message: string) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-gradient-to-r from-green-900 from-5% via-zinc-800 to-zinc-900 to-80% shadow-lg rounded-lg font-bold pointer-events-auto flex text-white py-3 px-4`}
    >
      <div className="flex items-center w-full justify-between relative">
        <span className="p-1 bg-green-800 rounded-lg text-green-300">
          <DoneIcon />
        </span>
        <div className="px-2">
          {/* <span className="block text-lg">Correcto</span> */}
          <span className="block text-sm">{ message }</span>
        </div>
        <button 
          onClick={() => toast.dismiss(t.id)}
          className="text-gray-600 hover:text-gray-300 transition-all duration-500 ease-out">
          <ErrorIcon />
        </button>
      </div>
    </div>
  ))
}

export {
  errorNotification,
  successNotification
}