import { ReactNode } from 'react';

interface CreateProps {
  children: ReactNode;
  heading: string;
}

function Create({ children, heading }: CreateProps) {


  return (
    <div className="sm:mx-10 mb-8 border p-5 shadow-md">
      <h2 className="mb-10 font-vazirBold text-xl text-stone-700">{heading}</h2>
      {children}
    </div>
  );
}

export default Create;
