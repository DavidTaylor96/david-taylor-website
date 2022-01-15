import create from 'zustand'
import { IRoute } from '../service/website-types';

interface RouteState{
  activeRoute: IRoute | null;
  setActiveRoute: (newActiveRoute: IRoute) => void;
}

export const useRouteStore = create<RouteState>(set => ({
  activeRoute: null, // IRoute
  setActiveRoute: (newActiveRoute: IRoute) => {
    set({activeRoute: newActiveRoute})
  },
}));