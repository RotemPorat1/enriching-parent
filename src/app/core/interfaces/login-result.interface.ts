export interface LoginResult {
  /**
   * @example 'YOSSIG'
   */
  username: string;
  /**
   * Is the user admin?
   * @example false
   */
  isAdmin: boolean;
}
