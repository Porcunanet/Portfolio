  // Sample projects data
    const projects = [
      { title: "E-Commerce Platform", description: "A full-stack online store with cart and payment integration", url: "#" },
      { title: "Weather App", description: "Real-time weather updates with beautiful UI", url: "#" },
      { title: "Task Manager", description: "Organize your tasks with drag and drop", url: "#" },
      { title: "Portfolio CMS", description: "Content management system for portfolios", url: "#" },
      { title: "Chat Application", description: "Real-time messaging with WebSocket", url: "#" },
      { title: "Music Player", description: "Streaming music player with playlists", url: "#" }
    ];

    // Carousel functionality
    let currentIndex = 0;
    const maxVisible = 6;
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function getItemsPerView() {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 900) return 2;
      return 3;
    }

    function renderCarousel() {
      carousel.innerHTML = projects.slice(0, maxVisible).map(p => `
        <div class="carousel-item">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.url}">View Project</a>
        </div>
      `).join('');
      updateCarousel();
    }

    function updateCarousel() {
      const itemsPerView = getItemsPerView();
      const itemWidth = 100 / itemsPerView;
      const offset = -(currentIndex * itemWidth);
      carousel.style.transform = `translateX(${offset}%)`;
      
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= Math.min(maxVisible, projects.length) - itemsPerView;
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener('click', () => {
      const itemsPerView = getItemsPerView();
      if (currentIndex < Math.min(maxVisible, projects.length) - itemsPerView) {
        currentIndex++;
        updateCarousel();
      }
    });

    window.addEventListener('resize', () => {
      currentIndex = 0;
      updateCarousel();
    });

    // Render all projects in grid
    function renderProjectsGrid() {
      const grid = document.getElementById('projectsGrid');
      grid.innerHTML = projects.map(p => `
        <div class="project-card">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.url}">View Project</a>
        </div>
      `).join('');
    }

    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const pageId = btn.dataset.page;
        document.getElementById(pageId).classList.add('active');
      });
    });

    // Date and time
    function updateDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      document.getElementById('datetime').textContent = `${date} ${time}`;
    }

    function handleSubmit(e) {
      e.preventDefault();
      alert('Message sent! (Demo only)');
      e.target.reset();
      return false;
    }

    function handleSubmit(e) {
      e.preventDefault();
      alert('Message sent! (Demo only)');
      e.target.reset();
      return false;
    }

    // Initialize
    renderCarousel();
    renderProjectsGrid();
    updateDateTime();
    setInterval(updateDateTime, 1000);
 
