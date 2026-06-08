import React from 'react';

type ActionBlockProps = {
  title: string;
  children: React.ReactNode;
};

export default function ActionBlock({ title, children }: ActionBlockProps) {
  return (
    <div className="c-action">
      <div className="c-action__title">{title}</div>
      {children}
    </div>
  );
}
