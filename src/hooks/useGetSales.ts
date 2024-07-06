import React, {useEffect, useState} from 'react';
import {db} from '../repositories/firebase';
import {
  ACTIVE_STATUS_VALUE,
  PAY_STATUS_PAYMENT_VALUE,
  SALES_COLLECTION,
  SALE_CURRENT_PAYMENT_FIELD,
  SALE_RUTA_FIELD,
  SALE_STATUS_FIELD,
} from '../constants/collections';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import {Sale} from '../types/Sale';

const useGetSales = (rutaNumber: number) => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, SALES_COLLECTION),
      where(SALE_RUTA_FIELD, '==', rutaNumber),
      where(SALE_STATUS_FIELD, 'in', [ACTIVE_STATUS_VALUE]),
      where(SALE_CURRENT_PAYMENT_FIELD, '!=', PAY_STATUS_PAYMENT_VALUE),
      orderBy(SALE_CURRENT_PAYMENT_FIELD, 'desc'),
    );

    const unsubscribe = onSnapshot(q, querySnapshot => {
      const salesData = querySnapshot.docs.map(
        doc =>
          ({
            ...doc.data(),
            id: doc.id,
          } as Sale),
      );
      setSales(salesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {sales, loading};
};

export default useGetSales;
