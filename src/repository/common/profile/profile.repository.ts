import { Profile } from 'src/types/common/profile/profile.type';

export interface ProfileRepository {
  getProfile(): Promise<Profile>;
  quit(): Promise<void>;
}
