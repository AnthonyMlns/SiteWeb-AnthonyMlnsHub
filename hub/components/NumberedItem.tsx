import React from 'react';

type NumberedItemProps = {
  number: number;
  title: string;
  children: React.ReactNode;
};

export default function NumberedItem({ number, title, children }: NumberedItemProps) {
  return (
    <div className="c-numbered">
      <span className="c-numbered__badge">{number}</span>
      <div>
        <div className="c-numbered__title">{title}</div>
        <div className="c-numbered__body">{children}</div>
      </div>
    </div>
  );
}
