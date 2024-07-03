import {Timestamp, collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../../repositories/firebase';
import {EMAIL_FIELD, USERS_COLLECTION} from '../../../constants/collections';

export interface UserData {
  id: string;
  disabled: boolean;
  email: string;
  lastName: string;
  name: string;
  numRuta: number;
  order: string;
  password: string;
  phone: string;
}

const getUser = async (email: string): Promise<UserData> => {
  const q = query(
    collection(db, USERS_COLLECTION),
    where(EMAIL_FIELD, '==', email),
  );
  const docSnap = await getDocs(q);
  const user = docSnap.docs.map(doc => doc.data() as UserData)[0];
  return user;
};

export default getUser;
