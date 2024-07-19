export const selectIsLoggedIn = state => state.users.isLoggedIn;
export const selectUser = state => state.users.user;
export const selectIsRefreshing = state => state.users.isRefreshing;
export const selectIsLoading = state => state.users.isLoading;
export const selectDailyWaterRate = state => state.users.user.dailyWaterRate;
export const selectDailyNorma = state => state.users.user.waterDrink;
