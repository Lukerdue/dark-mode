import useLocalStorage from './useLocalStorage';

function useDarkMode(setting){
    const [darkModePersist, setDarkModePersist] = useLocalStorage('darkMode');
    return [darkModePersist, setDarkModePersist];
}
export default useDarkMode;