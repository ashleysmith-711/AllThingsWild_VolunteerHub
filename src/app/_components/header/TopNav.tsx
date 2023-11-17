import styles from './Header.module.scss';

interface TopNavProps {
    isSidebarOpen: boolean;
    toggleSidebar: (newIsSidebarOpen: boolean) => void;
}
const TopNav = (props: TopNavProps) => {
    const { toggleSidebar, isSidebarOpen } = props;
    return (
        <div>
            <nav className={styles.topNav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </nav>
            <div className={styles.burgerMenuIconContainer} onClick={() => toggleSidebar(!isSidebarOpen)}>
                <img src="/assets/burger-menu-svgrepo-com.svg" alt="burger menu icon" />
            </div>
        </div>

    )
}

export default TopNav;