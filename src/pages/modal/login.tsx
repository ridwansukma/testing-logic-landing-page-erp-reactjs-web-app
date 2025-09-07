import { JSX } from 'react';
import Modal from '../../components/Modal';
import { LoginProps } from '../../types/login';
import Button from '../../components/Button';
import { X } from 'lucide-react';

const Login = ({
  openModalLogin,
  setOpenModalLogin,
}: LoginProps): JSX.Element => {
  return (
    <Modal isOpen={openModalLogin} onClose={() => setOpenModalLogin(false)}>
      <button onClick={() => setOpenModalLogin(false)} className='w-full flex justify-end items-end'>
        <X className="w-3 h-3 text-gray-500" />
      </button>
      
      <div className="w-full flex flex-col gap-5 justify-center items-center text-center text-gray-900">
        <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Login
        </div>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700 placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700 placeholder-gray-400"
        />
        
        <Button size="md" className='w-full flex justify-center items-center'>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default Login;
