import React from "react";

export const Card: React.FC = ({ children }) => (
  <section className="mdc-card">
    <div className="card-content content-type-person-info">{children}</div>
  </section>
);

// implement these subcomponents

export const CardImage: React.FC<{
  url: string;
  desc: string;
}> = () => null;

export const CardHeader: React.FC<{
  title: React.ReactNode;
  subTitle: React.ReactNode;
}> = () => null;

export const CardInfo: React.FC<{
  icon: string;
  desc?: string;
  children: React.ReactNode;
}> = () => null;
