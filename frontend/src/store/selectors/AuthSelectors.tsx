export const isAuthenticated = (state: any) => {
    if (state.auth.auth.idToken) return true;
    return false;
};
