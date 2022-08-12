import decode from "jwt-decode";

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        // If the token it will return true
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        // Breaks down the token to get it's expiration time
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem("id_token");
            return true;
        }
        return false;
    }

    getToken() {
        return localStorage.getItem("id_token");
    }

    login(idToken) {
        localStorage.setItem("id_token", idToken);
        window.location.assign("/home");
    }

    logout() {
        localStorage.removeItem("id_token");
        window.location.reload();
    }
};

export default new AuthService();

