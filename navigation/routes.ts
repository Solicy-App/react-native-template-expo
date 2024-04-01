export enum Routes {
  ROOT = "Root",
  AUTH = "Auth",
  CODE_VERIFICATION = "CodeVerification",
  LOGIN = "Login",
  SIGNUP = "Signup",
  FORGOT_PASSWORD = "ForgotPassword",
  CREATE_NEW_PASSWORD = "CreateNewPassword",
  EMAIL_VERIFY = 'EmailVerify',
}

export interface RootStackParamList {
  [key: string]: { id: number } | undefined;
}
