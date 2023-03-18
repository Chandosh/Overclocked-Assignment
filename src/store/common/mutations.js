export function setLoading(state, value) {
  state.showLoading = value;
}
export function setUserDetails(state, value) {
  state.userDetails = value;
}
export function setUserLoanApplications(state, value) {
  state.loanApplications = value;
}
export function setUserLoanApplicationOffers(state, value) {
  var temp = value;
  let sorted = temp.sort(
    (a, b) => a.interest_rate * a.tenure - b.interest_rate * b.tenure
  );
  state.loanOffers = sorted;
}

export function resetUserLoanApplications(state) {
  state.loanApplications = [];
}

export function resetUserLoanApplicationOffers(state) {
  state.loanOffers = [];
}
