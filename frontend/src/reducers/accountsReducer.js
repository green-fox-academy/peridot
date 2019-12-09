const initState = {
  accounts: [],
  displayName: '',
  status: 'pending',
};

const orderResult = {
  Ascending: (accounts, orderItem) => accounts.sort((a, b) => (a[orderItem] < b[orderItem])),
  Descending: (accounts, orderItem) => accounts.sort((a, b) => (a[orderItem] > b[orderItem])),
};

export default function accountsReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {
        ...state,
        accounts: action.accounts,
      };
    case 'UPDATE_DISPLAY':
      return {
        ...state,
        displayName: action.displayName,
      };
    case 'POST_NEW_ACCOUNT_DONE':
      return {
        ...state,
        accounts: [...state.accounts, action.account],
        status: 'done',
      };
    case 'POST_NEW_ACCOUNT_ERROR':
      return {
        ...state,
        status: 'error',
      };
    case 'POST_NEW_ACCOUNT_START':
      return {
        ...state,
        status: 'pending',
      };
    case 'ORDER_CARDS':
      return {
        ...state,
        accounts: orderResult[action.order]([...state.accounts], action.orderItem),
      };
    default:
      return state;
  }
}
