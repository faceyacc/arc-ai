import styles from './SearchSideBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';


const SearchSideBar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarButtons}>
            <IconButton><SearchIcon sx={{ fontSize: 33, color: grey[200]}} /></IconButton>
            </ul>
         </div>
    )
}


export default SearchSideBar;