import { StackActions, NavigationActions } from 'react-navigation';

class NavigationActionsClass {
  setNavigation(navigation) {
    this.navigation = navigation;
    StackActions.push();
  }

  push = (params) => {
    if (this.navigation) {
      const pushAction = StackActions.push(params);
      this.navigation.dispatch(pushAction);
    }
  }

  pop = (params) => {
    if (this.navigation) {
      const popAction = StackActions.pop(params);
      this.navigation.dispatch(popAction);
    }
  }

  resetTo = (params) => {
    if (this.navigation) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate(params)],
      });

      this.navigation.dispatch(resetAction);
    }
  }

  toggleDrawer = (params) => {
    if (this.navigation) {
      this.navigation.toggleDrawer(params);
      // this.navigation.dispatch(pushAction);
    }
  }
}

const navigationActions = new NavigationActionsClass();
export default navigationActions;
