class AuthService{

    isAuthenticated = false

    authenticate() {
        this.isAuthenticated = true
    }

    signout(cb) {
        this.isAuthenticated = false
    }

    login(user, pass){  
        this.authenticate();
        this.store.setConnectionStatus();
    }
}


const authService = new AuthService();

export default authService;