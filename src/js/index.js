import '../styles.css';  
import Sidebar from './components/sidebar';
import { addTask } from './components/notes'; // Import addTask from notes.js

// No need to do anything here for now
// Just make sure that the addTask function is available in the global scope
Sidebar();
notes();
document.getElementById('addTaskButton').addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
});




