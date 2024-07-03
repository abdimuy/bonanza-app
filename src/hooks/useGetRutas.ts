import React, {useState, useEffect} from 'react';
import {UserData} from '../api/auth/users/getUser';
import {db} from '../repositories/firebase';
import Ruta from '../types/Ruta';
import {query, collection, where, onSnapshot} from 'firebase/firestore';
import {RUTAS_COLLECTION, RUTA_NUMBER_FIELD} from '../constants/collections';
import {Unsubscribe} from 'firebase/auth';

const rutaInitialState: Ruta = {
  id: '',
  number: 0,
  name: '',
  cobrador: '',
};

const useGetRuta = (user: UserData) => {
  const [ruta, setRuta] = useState<Ruta>(rutaInitialState);
  console.log('ruta hooks', ruta);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    if (user.numRuta !== 0) {
      unsubscribe = onSnapshot(
        query(
          collection(db, RUTAS_COLLECTION),
          where(RUTA_NUMBER_FIELD, '==', user.numRuta),
        ),
        snapshot => {
          console.log('snapshot', snapshot.docs.length);
          if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            setRuta({...doc.data(), id: doc.id} as Ruta);
          }
          setLoading(false);
        },
      );
    } else {
      setLoading(false);
    }
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return {ruta, loading};
};

export default useGetRuta;
