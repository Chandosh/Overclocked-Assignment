export function setLoading(state, value) {
  state.showLoading = value;
}
export function setUserDetails(state, value) {
  state.userDetails = value;
}
export function setUserLoanApplications(state, value) {
  state.loanApplications = value;
  // state.loanApplications.push({
  //   loan_amount: 1000000.5,
  //   offers_url:
  //     'https://api.sfd.interview.ovckd.dev/api/v1/user/applications/1/offers',
  //   university: 'Carnegie Mellon University',
  // });
}
export function setUserLoanApplicationOffers(state, value) {
  state.loanOffers = value;
}

export function resetUserLoanApplications(state) {
  state.loanApplications = [];
}

export function resetUserLoanApplicationOffers(state) {
  state.loanOffers = [];
}
