export interface AuthenticationResponse {
  id?: string;
  accessToken?: string;
  mfaEnabled?: string;
  secretImageUri?: string;
  role?: string;
}
