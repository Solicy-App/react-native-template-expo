export interface HomeTypes {
  route: {
    params: {
      isPermissionsUpdated: boolean;
      message: string;
      skipLocation: boolean;
    };
    name: string;
  };
  navigation: any;
}
