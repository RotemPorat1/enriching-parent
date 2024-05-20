export const environment = {
  apiUrl: getApiEndpoint(3000),
};

function getApiEndpoint(port: number) {
  const { protocol, hostname } = window.location;
  const apiUrl = protocol + '//' + hostname + ':' + port;
  return apiUrl;
}
