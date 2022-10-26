import { WikiminiRoutes } from "./route-config";

export const getRoutePath = (routeName) => {
  const route = WikiminiRoutes[routeName];
  return route.path;
};

// this function will be used to get the permission of the route
export const getRoutePermission = (routeName) => {
  const route = WikiminiRoutes[routeName];
  return route.permission || undefined;
};
