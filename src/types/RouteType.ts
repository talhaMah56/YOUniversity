export interface RouteType {
  id: string;
  path: string;
  title: string;
  component: React.ComponentType;
  icon?: React.ReactNode;
}
