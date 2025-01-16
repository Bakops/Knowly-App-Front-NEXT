"use client"; // Indique que ce composant est un Client Component

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      // Effacer le localStorage
      if (typeof window !== "undefined") {
        localStorage.clear();
      }

      // Rediriger immédiatement vers Auth0 pour logout avec retour à "/test"
      window.location.href = `/api/auth/logout?returnTo=${window.location.origin}/test`;
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-800 hover:bg-[#c3cc50] text-white font-bold py-2 px-4 rounded mt-3"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
