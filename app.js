  // Sample projects data
    const projects = [
      { title: "Computer Evolution", description: "Introduction to The Evolution of Computing", url: "https://porcunanet.github.io/The-Evolution-of-Computing/"},
      { title: "Computer Basics", description: "Computer Basics", url: "https://porcunanet.github.io/Computer-Basics/"},
      { title: "Computer Hardware Basics", description: "Computer Hardware Basics", url: "https://porcunanet.github.io/Computer-Hardware-Basics/"},
      { title: "Introduction to HTML", description: "Introduction to HTML", url: "https://porcunanet.github.io/Web-Development-Lessons/" },
      { title: "System Report Tool", description: "System Report Tool for MacOS & Linux", url: "https://github.com/Porcunanet/System-Report-tool-for-MacOS-Linux.git" },
      { title: "FEM - NFT card", description: "Front-End Mentor Challenge - NFT Card", url: "https://porcunanet.github.io/FrontEndMentor---nft-preview-card-component/"},
      { title: "FEM - Single Price Grid", description: "Front-End Mentor Challenge - Single Price Grid", url:"https://porcunanet.github.io/Frontend-Mentor---Single-Price-Grid/"},
      { title: "FEM - Recipe Page", description: "Front-End Mentor Challenge - Recipe Page", url: "https://porcunanet.github.io/Frontend-Mentor---Recipe-Page/"},
      { title: "FEM - 3 Column Card", description: "Front-End Mentor Challenge - 3 Column Card", url: "https://porcunanet.github.io/3-column-preview-card-component-main/"},
      { title: "Interest in Orthodox Christianity", description: "Introduction to Orthodoxy", url: "https://porcunanet.github.io/Interest-in-Orthodoxy/" },
      { title: "Overview of the Bible", description: "An overview of the Bible", url: "https://porcunanet.github.io/Overview-of-the-Bible/" },
      { title: "Orthodox Church Finder", description: "Orthodox Church Finder Tool", url: "https://porcunanet.github.io/Orthodox-Church-Finder/" },
      { title: "The Didache", description: "The Lord's Teaching Through the Twelve Apostles to the Nations", url: "https://porcunanet.github.io/The-Didache/" },
      { title: "Church Councils", description: "Early Christian Church Councils", url:"https://porcunanet.github.io/Early-Church-Councils/"},
      { title: "The Nativity", description: "God becomes human to show us the Way", url: "https://porcunanet.github.io/The-Nativity-/"},
      { title: "St. Nektarios", description: "St.Nektarios tribute", url:"https://porcunanet.github.io/St.-Nektarios/"},
      { title: "Prayers in Times of Need", description: "Prayers in Times of Need", url: "https://porcunanet.github.io/Prayers-in-Times-of-Need/"},
      { title: "Baptism & Chrismation in the Orthodox Church", description: "Understanding Orthodox Baptism & Chrismation", url: "https://porcunanet.github.io/Baptism-Chrismation-in-the-Orthodox-Church/"}

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
          <a href="${p.url}" target="_blank">View Project</a>
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
 
