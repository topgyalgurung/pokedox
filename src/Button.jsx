
import styles from './Button.module.css';
const RefreshButton = () => {
    function handleClick() {
        // Reload the page to refresh the game
        window.location.reload();
    }
  return (
    <button onClick={handleClick}
    className={styles.refreshButton}
    >Reload</button>
  )
}

export default RefreshButton;