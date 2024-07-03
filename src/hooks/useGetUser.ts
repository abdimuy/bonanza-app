import {useState, useEffect} from 'react';
import {db} from '../repositories/firebase';
import {collection, query, where, onSnapshot} from 'firebase/firestore';
import {EMAIL_FIELD, USERS_COLLECTION} from '../constants/collections';
import {UserData} from '../api/auth/users/getUser';
import {User} from 'firebase/auth';

const useGetUser = (email: string, userMetadata?: User) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userMetadata) {
      return;
    }
    const q = query(
      collection(db, USERS_COLLECTION),
      where(EMAIL_FIELD, '==', email),
    );
    const unsubscribe = onSnapshot(q, querySnapshot => {
      querySnapshot.forEach(doc => {
        setUser({...doc.data(), id: doc.id} as UserData);
      });
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [email, userMetadata]);

  return {user, loading};
};

export default useGetUser;
