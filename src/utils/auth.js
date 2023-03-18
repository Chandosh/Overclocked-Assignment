const tokenName = 'access_token';

// Retrieve user access token.
export function getToken() {
  return localStorage.getItem(tokenName);
}

// Set user access token.
export function setToken(name) {
  return localStorage.setItem(tokenName, name);
}

// Delete user access token.
export function deleteToken() {
  return localStorage.removeItem(tokenName);
}

// Function to navigation based on their login status.
export function guardMyroute(to, from, next) {
  if (getToken()) {
    next();
  } else {
    next('/');
  }
}

// Prevents logged in user from accessing prelogin screens
export function stopNavigation(to, from, next) {
  if (getToken()) {
    next('/applications');
  } else {
    next();
  }
}
