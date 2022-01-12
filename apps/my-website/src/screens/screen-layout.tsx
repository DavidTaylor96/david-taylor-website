import React, { FC, useEffect } from 'react';
import { useRouteStore } from '../hooks/use-route';
import { ILayout, IRoute } from '../service/website-types';
import BasicLayout from './home/home-screen';


interface IPageComponent {
  content: ILayout;
}

export const PageComponent: FC<IPageComponent> = ({ content }) => {
  switch (content.type) {
    case "basic-layout":
      return <BasicLayout content={content} />;
    default:
      return null;
  }
};

interface IRouteComponent {
  content: IRoute;
}

export const RouteComponent: FC<IRouteComponent> = ({ content }) => {

  const {activeRoute, setActiveRoute } = useRouteStore();


  useEffect(() => {
    setActiveRoute(content);
  }, [content])

  return (
    <>
      {content.pages.map((page) => {
        return <PageComponent key={page.title} content={page} />;
      })}
    </>
  );
};
