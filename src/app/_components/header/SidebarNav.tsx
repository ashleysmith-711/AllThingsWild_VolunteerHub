import styles from './Header.module.scss';
interface SideNavProps {
    isSidebarOpen: boolean;
}
const SidebarNav = (props: SideNavProps) => {
    const { isSidebarOpen } = props;
    if (!isSidebarOpen) return null;
    return (
        <div className={styles.sideNav}>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SidebarNav;