import React from 'react';
// import { auth } from '../../firebase';

import { useLogout } from '../../hooks/useSocialLogout';
/*
const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
};
*/
const ChatLogOut = () => {
  const { logout, isPending } = useLogout();

  return (
    <div>
      {!isPending && (
        <button onClick={logout} className="btn bg-secondary text-white">
          Sign Out
        </button>
      )}

      {isPending && (
        <button className="mt-3 mb-3 p-2 w-full bg-secondary text-white rounded-xl shadow-2xl" disabled>
          Signing out...
        </button>
      )}
    </div>
  );
};

export default ChatLogOut;
