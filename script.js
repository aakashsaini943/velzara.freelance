
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .portfolio-item, .testi-card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '14px';
      cursor.style.height = '14px';
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.opacity = '0.6';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '1';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 0.08) + 's';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(r => observer.observe(r));

  // Portfolio filter
  function setFilter(btn, cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // Nav shrink
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 60) {
      nav.style.padding = '0.9rem 4rem';
      nav.style.boxShadow = '0 4px 40px rgba(0,0,0,0.4)';
    } else {
      nav.style.padding = '1.4rem 4rem';
      nav.style.boxShadow = 'none';
    }
  });

  // Testi card active
  document.querySelectorAll('.testi-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.testi-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
