import Keycloak from 'keycloak-js'

export const keycloakProviderConfig = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'ineo',
  clientId: 'ineo-front',
})
