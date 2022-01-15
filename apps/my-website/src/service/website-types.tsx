export interface Home {
  name: string;
  screens: IBasicLayout[];
}

export interface Action {
  title: string;
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
  video: string;
  hiddenButton?: boolean;
  actions: Action[];
  image: string;
  showWelcome: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITransparentLayout extends IBaseLayout {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISolidLayout extends IBaseLayout {}

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

export type ILayout = ITransparentLayout | ISolidLayout;
