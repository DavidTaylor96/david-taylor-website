export interface Home {
  name: string;
  screens: IBasicLayout[];
}

export interface Action {
  title: string;
  link: string;
}

export interface Links {
  icon: string;
  link: string;
}

export interface Link {
  title: string;
  navLink: string;
}

export interface IBaseLayout {
  dark?: boolean;
  type: string;
  title: string;
  text: string;
  hiddenButton?: boolean;
  actions: Action[];
  image: string;
  showWelcome: boolean;
  id: string;
  buttonText: string;
  links: Links[];
  hasLinks: boolean;

}

export interface ITechListLayout {
  actions: Action[];
  type: string;
  title: string;
}


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBasicLayout extends IBaseLayout {}



export interface IRoute {
  name: string;
  path: string;
  exact?: boolean;
  pages: Array<IBaseLayout>;
  navBarHidden?: boolean;
  hideButton?: boolean;
  title: string;
  dark?: boolean;
}

export interface Website {
  routes: IRoute[];
}

export type ILayout = IBaseLayout;
