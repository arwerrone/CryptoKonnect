import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

import { useAuthContext } from '../../src/hooks/useSocialAuthContext';

export const useUpdate = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user } = useAuthContext();

  const update = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectFirestore.collection('users').doc(user?.uid).update({
        premium: true
      });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { update, error, isPending };
};
