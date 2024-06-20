import React from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-semibold group-hover:text-green-400 transition-all">
        {text}
      </h1>
      <div className="h-1 w-32 bg-green-500 rounded-full" />
      <div className="h-1 w-32 bg-indigo-500 rounded-full translate-x-2" />
    </div>
  );
};

export default Title;
