export interface AppUserEntry {
  username: boolean;
  oAuthProvider: string;
  email: string;
  displayName: string;
}


export interface ListAppUserResponse {
  listEntries: AppUserEntry[];
}
