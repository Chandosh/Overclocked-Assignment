import request from 'src/api/index';

// To set loader
export function setLoading({ commit }, value) {
  commit('setLoading', value);
}

// To get User Details
export async function getUserDetails({ commit, dispatch }) {
  dispatch('setLoading', true);
  try {
    const data = await request.get('/user');
    commit('setUserDetails', data);
    dispatch('setLoading', false);
    return true;
  } catch (e) {
    dispatch('setLoading', false);
    return false;
  }
}

// To get User Loan Applications
export async function getUserLoanApplications({ commit, dispatch }) {
  dispatch('setLoading', true);
  try {
    const data = await request.get('/user/applications');
    commit('setUserLoanApplications', data);
    dispatch('setLoading', false);
    return true;
  } catch (e) {
    dispatch('setLoading', false);
    return false;
  }
}

// To get User Loan Applications Offers
export async function getUserLoanApplicationOffers(
  { commit, dispatch },
  applicationId
) {
  dispatch('setLoading', true);
  try {
    const data = await request.get(
      `/user/applications/${applicationId}/offers`
    );
    commit('setUserLoanApplicationOffers', data);
    dispatch('setLoading', false);
    return true;
  } catch (e) {
    dispatch('setLoading', false);
    return false;
  }
}

export async function resetUserLoanApplications({ commit }) {
  commit('resetUserLoanApplications');
}

export async function resetUserLoanApplicationOffers({ commit }) {
  commit('resetUserLoanApplicationOffers');
}
