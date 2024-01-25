/* Text input 컴포넌트와 Password input 컴포넌트
react hook form의 register과 isError, pattern, validate를 옵셔널 인자로 넘겨줘서 사용.

params: 
  - id: required, string
  - placeholder: optional, string
  - register: required, 
  - isRequired: required, boolean
  - isError: required, boolean
  - pattern: optional,
  - validate: optional, 

returns: component
*/

import { useState } from 'react';
import Image from 'next/image';

interface InputProps {
  id: string;
  placeholder: string;
  register: any;
  isRequired?: any;
  isError?: any;
  pattern?: any;
  validate?: any;
}

function TextInput({
  id,
  placeholder,
  register,
  isRequired,
  isError,
  pattern,
  validate,
}: InputProps) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        {...register(id, {
          required: { isRequired },
          pattern: { ...pattern },
          validate: { ...validate },
        })}
        className={`py-12 w-full
        autofill:bg-white 
        border-b border-gray-3 focus:border-green ${isError ? 'border-red' : ''}
        outline-none`}
      />
    </div>
  );
}

function PasswordInput({
  id,
  placeholder,
  register,
  isRequired,
  isError,
  pattern,
  validate,
}: InputProps) {
  const [isView, setIsView] = useState(false);
  return (
    <div className="relative  w-full">
      <button type="button" className="absolute top-18 right-14">
        <Image
          onClick={() => setIsView(!isView)}
          src={isView ? 'icons/EyeOpen.svg' : 'icons/EyeClose.svg'}
          alt="eye"
          width={16}
          height={16}
        />
      </button>
      <input
        id={id}
        type={isView ? 'text' : 'password'}
        placeholder={placeholder}
        {...register(id, {
          required: { isRequired },
          pattern: { ...pattern },
          validate: { ...validate },
        })}
        className={`py-12 w-full
        autofill:bg-white 
        border-b border-gray-3 focus:border-green ${isError ? 'border-red' : ''}
        outline-none`}
      />
    </div>
  );
}

export { TextInput, PasswordInput };
