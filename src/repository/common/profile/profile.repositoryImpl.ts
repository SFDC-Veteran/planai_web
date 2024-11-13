import { Profile } from 'src/types/common/profile/profile.type';
import { ProfileRepository } from './profile.repository';
import planaiAxios from 'src/libs/axios/customAxios';

class ProfileRepositoryImpl implements ProfileRepository {
  public async getProfile(): Promise<Profile> {
    const { data } = await planaiAxios.get('/user/profile');
    return data;
  }

  public async quit(): Promise<void> {
    await planaiAxios.delete('/user');
  }
}

const profileRepositoryImpl = new ProfileRepositoryImpl();
export default profileRepositoryImpl;
