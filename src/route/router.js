export default function Router(outlet, routes) {
  this.routes = routes;
  this.router_outlet = outlet;

  this.navigate = (path, data) => {
    const route = this.routes.find(
      route => route.path.toLowerCase() === path.toLowerCase()
    );
    if (!route) return; // no such route found;
    history.pushState(data, route.title, route.path);
    outlet.innerHTML = route.component();
  };
}
