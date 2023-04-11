import * as React from "react";

export interface IHeaderProps {
  hellow: string;
}

export default function Header({ hellow }: IHeaderProps) {
  return (
    <div className="header">
      <h2>Header: {hellow}</h2>
    </div>
  );
}
