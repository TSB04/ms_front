//decode token
function decodeToken(token) {
    try {
        const tokenParts = token.split('.');
        if (tokenParts.length === 3) {
            const tokenData = JSON.parse(atob(tokenParts[1]));
            return tokenData;
        }
    } catch (error) {
        return null;
    }
}


//check if user is logged in
function checkLogin() {
    const token = localStorage.getItem("token");
    if (token) {
        const tokenData = decodeToken(token);
        if (tokenData) {
            return tokenData;
        }
    }
    return null;
}

//logout user
function logout() {
    localStorage.removeItem("token");
    window.location.href = "/front/login.html";
}

//get user data
function getUserData() {
    const tokenData = checkLogin();
    if (tokenData) {
        return tokenData;
    }
    return null;
}