import Keycloak from "keycloak-js";
import Cookies from "js-cookie";

export const keycloak = new Keycloak({
    url: 'http://localhost:7080',
    realm: 'oauth2-demos',
    clientId: 'doovate-client',
});

function saveUserDataToCookies(keycloak) {
    // Get first organization values
    const firstOrg = Object.values(keycloak.tokenParsed?.organization || {})[0]

    Cookies.set('token', keycloak.token);
    Cookies.set('refresh_token', keycloak.refreshToken);
    Cookies.set('username', keycloak.tokenParsed?.preferred_username);
    Cookies.set('email', keycloak.tokenParsed?.email);
    Cookies.set('company_id', firstOrg?.id);
}

function clearUserDataFromCookies() {
    Cookies.remove('token');
    Cookies.remove('refresh_token');
    Cookies.remove('username');
    Cookies.remove('email');
    Cookies.remove('company_id');
}

export async function initKeycloak() {
    try {
        const authenticated = await keycloak.init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            checkLoginIframe: false,
        });

        if (authenticated) {
            console.log('✅ Authenticated');
            saveUserDataToCookies(keycloak);
        } else {
            console.log('❌ Not authenticated');
            keycloak.login()
            clearUserDataFromCookies();
        }

        // Configurar el manejo de token expirado
        keycloak.onTokenExpired = () => {
            keycloak.updateToken(70).then(() => {
                console.log("Token successfully refreshed");
                saveUserDataToCookies(keycloak); // Actualizar cookies con el nuevo token
            }).catch(async (error) => {
                console.log("Token refresh failed", error);
                clearUserDataFromCookies();
                await keycloak.init();
            });
        };

        return authenticated;
    } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
        clearUserDataFromCookies();
        throw error;
    }
}

export function logout() {
    clearUserDataFromCookies();
    keycloak.logout();
}