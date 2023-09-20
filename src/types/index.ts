import type { ReactElement, ReactNode, FC, HTMLProps } from "react";
import type { NextPage } from "next";

export type Children = ReactNode;

export interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
  children: Children;
  title: string;
  pageDescription?: string;
  withoutNavbar?: boolean;
  contentClassName?: string;
  withoutFooter?: boolean;
}
export type MainLayoutType = FC<MainLayoutProps>;

export type ChildrenProp = {
  children: ReactNode;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getNestedLayout?: (page: ReactElement) => ReactNode;
  mainLayoutProps?: Omit<MainLayoutProps, "children">;
};
