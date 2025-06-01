import { useState } from 'react';

const useMenuToggle = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showMoreMenu, setShowMoreMenu] = useState(false);

    const toggleUserMenu = () => setShowUserMenu((prev) => !prev);
    const toggleMoreMenu = () => setShowMoreMenu((prev) => !prev);

    const closeUserMenu = () => setShowUserMenu(false);
    const closeMoreMenu = () => setShowMoreMenu(false);

    return {
        showUserMenu,
        toggleUserMenu,
        closeUserMenu,
        showMoreMenu,
        toggleMoreMenu,
        closeMoreMenu
    }
};

export default useMenuToggle;