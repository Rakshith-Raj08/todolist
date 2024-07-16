document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');

    const navItems = [
        { label: 'Notes', icon: '📝' },
        { label: 'Reminder', icon: '⏰' },
        { label: 'Archive', icon: '📦' },
        { label: 'Bin', icon: '🗑️' },
        {label:'About', icon: 'ℹ️'}
    ];

    navItems.forEach(item => {
        const navItem = document.createElement('div');
        if (item.label === 'About') {
            navItem.classList.add('about-item'); 
        }

        
        navItem.classList.add('nav-item');

        const icon = document.createElement('i');
        icon.classList.add('icon');
        icon.textContent = item.icon;

        const label = document.createElement('span');
        label.textContent = item.label;

        navItem.appendChild(icon);
        navItem.appendChild(label);

        sidebar.appendChild(navItem);
    });
});
