import React, { useState } from 'react';
import openEye from '../../assets/icons/eye-solid.svg';
import closeEye from '../../assets/icons/eye-slash-solid.svg';

const PasswordInput = ({label, error, marginLabel='ml-3', placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
        <div className='w-full'>
        { label !== '' && 
          <label className={`${marginLabel} block opensans text-sm text-message whitespace-nowrap  overflow-hidden text-left font-open`}>{label}</label>
        }
        <div className="relative">
            <input placeholder={placeholder} className="w-full bg-white border rounded-md border-libellum-border focus:outline-none text-libellum-text-gray placeholder:open-sans pl-[15px] py-3 h-[36px] dark:bg-input-white dark:placeholder:text-libellum-text-gray placeholder-white" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
            <span className="absolute right-3 top-2 cursor-pointer" onClick={togglePasswordVisibility} >
                {showPassword ? <img src={openEye.src}/> : <img src={closeEye.src}/>}
            </span>
            { error &&(
              <div className="text-error-warning text-[13px] absolute whitespace-nowrap font-open text-left">{error}</div>
            )}
        </div>
      </div>        
    </>    
  );
};

export default PasswordInput;
