/**
 * Mathematician Hover Cards
 *
 * Lightweight component that:
 * - Detects <span class="m" data-id="euler">Name</span> elements
 * - Fetches mathematician data from data/mathematicians.json
 * - Shows interactive hover cards with biographical info
 * - Auto-detects base path for correct JSON & gallery URLs
 * - Works on desktop (hover) and mobile (tap)
 * - Zero dependencies, graceful degradation
 */

(function(global) {
  'use strict';

  // Configuration
  const CONFIG = {
    jsonPath: 'data/mathematicians.json',
    galleryPath: 'mathematicians.html',
    hoverDelay: 200,      // ms before showing card on hover
    hideDelay: 300,       // ms before hiding (allows moving to card)
    cardMaxWidth: 320,
    animationDuration: 200
  };

  // Internal state
  let jsonData = null;
  let pendingTimeouts = new Map();
  let activeCard = null;
  let baseDir = '';

  /**
   * Detect the script's base directory from its src attribute
   * Handles: /js/mathematician-cards.js -> /
   *          /journeys/js/mathematician-cards.js -> /journeys/
   */
  function detectBaseDir() {
    const scripts = document.querySelectorAll('script[src*="mathematician-cards"]');
    if (scripts.length === 0) return '';

    const src = scripts[scripts.length - 1].src;
    const match = src.match(/^(.*?)\/js\/mathematician-cards\.js/);
    if (match) {
      const path = match[1];
      // Extract everything after domain
      const urlObj = new URL(src);
      const pathname = urlObj.pathname;
      const baseMatch = pathname.match(/^(.*?)\/js\/mathematician-cards\.js/);
      return baseMatch ? baseMatch[1] : '';
    }
    return '';
  }

  /**
   * Resolve a relative path accounting for base directory
   */
  function resolvePath(relativePath) {
    if (baseDir === '') {
      return relativePath;
    }
    return baseDir + '/' + relativePath;
  }

  /**
   * Inject CSS for styled spans and animations
   */
  function injectStyles() {
    if (document.getElementById('mathematician-cards-styles')) {
      return; // Already injected
    }

    const style = document.createElement('style');
    style.id = 'mathematician-cards-styles';
    style.textContent = `
      .m {
        color: #22d3ee;
        cursor: help;
        border-bottom: 1px dotted rgba(34, 211, 238, 0.3);
        transition: border-color 0.2s ease;
      }
      .m:hover {
        border-bottom-color: #22d3ee;
      }

      .mathematician-card {
        position: absolute;
        background: #12122a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-left: 3px solid #22d3ee;
        border-radius: 10px;
        padding: 16px 18px;
        max-width: ${CONFIG.cardMaxWidth}px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        font-family: Georgia, serif;
        color: #e0e0e0;
        z-index: 5000;
        opacity: 0;
        transition: opacity ${CONFIG.animationDuration}ms ease;
        pointer-events: auto;
        word-wrap: break-word;
      }

      .mathematician-card.visible {
        opacity: 1;
      }

      .mathematician-card-name {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 4px;
      }

      .mathematician-card-meta {
        font-size: 13px;
        color: #a0a0a0;
        margin-bottom: 12px;
      }

      .mathematician-card-summary {
        font-size: 14px;
        line-height: 1.5;
        margin-bottom: 12px;
      }

      .mathematician-card-link {
        color: #22d3ee;
        text-decoration: none;
        font-size: 13px;
        transition: color 0.2s ease;
      }

      .mathematician-card-link:hover {
        color: #06b6d4;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Fetch mathematician data from JSON
   */
  function fetchData() {
    return new Promise((resolve) => {
      if (jsonData !== null) {
        resolve(jsonData);
        return;
      }

      const jsonUrl = resolvePath(CONFIG.jsonPath);
      fetch(jsonUrl)
        .then(res => res.json())
        .then(data => {
          jsonData = data;
          resolve(data);
        })
        .catch(err => {
          // Graceful degradation: silently fail
          console.debug('Failed to load mathematician data:', err);
          jsonData = {}; // Cache the failure
          resolve({});
        });
    });
  }

  /**
   * Get mathematician data by ID
   */
  function getMathematician(id, data) {
    if (typeof data === 'object' && data !== null) {
      return data[id] || null;
    }
    return null;
  }

  /**
   * Calculate safe position for card to stay within viewport
   */
  function calculatePosition(triggerEl, card) {
    const rect = triggerEl.getBoundingClientRect();
    const cardHeight = card.offsetHeight || 200;
    const cardWidth = card.offsetWidth || CONFIG.cardMaxWidth;

    let top = rect.bottom + 8; // Below the span
    let left = rect.left;

    // Adjust if card goes off right edge
    if (left + cardWidth > window.innerWidth - 8) {
      left = window.innerWidth - cardWidth - 8;
    }

    // Adjust if card goes off left edge
    if (left < 8) {
      left = 8;
    }

    // Adjust if card goes off bottom edge
    if (top + cardHeight > window.innerHeight - 8) {
      top = rect.top - cardHeight - 8; // Above instead
    }

    return { top, left };
  }

  /**
   * Show card with fade-in animation
   */
  function showCard(triggerEl, mathematician, data) {
    // Reuse existing card or create new one
    let card = activeCard;
    if (!card) {
      card = document.createElement('div');
      card.className = 'mathematician-card';
      document.body.appendChild(card);
    }

    const galleryUrl = resolvePath(CONFIG.galleryPath);

    card.innerHTML = `
      <div class="mathematician-card-name">${mathematician.name}</div>
      <div class="mathematician-card-meta">${mathematician.years} · ${mathematician.nationality}</div>
      <div class="mathematician-card-summary">${mathematician.summary}</div>
      <a href="${galleryUrl}" class="mathematician-card-link">View in gallery →</a>
    `;

    const pos = calculatePosition(triggerEl, card);
    card.style.top = pos.top + 'px';
    card.style.left = pos.left + 'px';

    // Trigger fade-in animation
    activeCard = card;
    requestAnimationFrame(() => {
      card.classList.add('visible');
    });
  }

  /**
   * Hide card with fade-out animation
   */
  function hideCard() {
    if (activeCard) {
      activeCard.classList.remove('visible');
      // Remove from DOM after animation completes
      setTimeout(() => {
        if (activeCard) {
          activeCard.remove();
          activeCard = null;
        }
      }, CONFIG.animationDuration);
    }
  }

  /**
   * Clear any pending timeouts for a specific element
   */
  function clearPending(key) {
    if (pendingTimeouts.has(key)) {
      clearTimeout(pendingTimeouts.get(key));
      pendingTimeouts.delete(key);
    }
  }

  /**
   * Attach hover/tap handlers to a span
   */
  function attachHandlers(span, mathematician, data) {
    const isMobile = 'ontouchstart' in window;
    const key = span.dataset.id;

    if (isMobile) {
      // Mobile: tap to toggle
      span.addEventListener('click', (e) => {
        e.stopPropagation();
        if (activeCard && activeCard.dataset.id === key) {
          hideCard();
        } else {
          showCard(span, mathematician, data);
          activeCard.dataset.id = key;
        }
      });
    } else {
      // Desktop: hover with delays
      span.addEventListener('mouseenter', () => {
        clearPending('hide-' + key);
        clearPending('show-' + key);

        const timeoutId = setTimeout(() => {
          showCard(span, mathematician, data);
          if (activeCard) {
            activeCard.dataset.id = key;
          }
        }, CONFIG.hoverDelay);

        pendingTimeouts.set('show-' + key, timeoutId);
      });

      span.addEventListener('mouseleave', () => {
        clearPending('show-' + key);

        const timeoutId = setTimeout(() => {
          // Only hide if we're not hovering the card
          if (activeCard && !activeCard.matches(':hover')) {
            hideCard();
          }
        }, CONFIG.hideDelay);

        pendingTimeouts.set('hide-' + key, timeoutId);
      });
    }

    // Handle clicks outside to close card (mobile)
    if (isMobile) {
      document.addEventListener('click', (e) => {
        if (!span.contains(e.target) && activeCard && !activeCard.contains(e.target)) {
          hideCard();
        }
      });
    }
  }

  /**
   * Initialize the component
   */
  function init() {
    // Already initialized
    if (document.getElementById('mathematician-cards-styles')) {
      return;
    }

    baseDir = detectBaseDir();
    injectStyles();

    // Find all mathematician spans
    const spans = document.querySelectorAll('span.m[data-id]');
    if (spans.length === 0) {
      return; // Nothing to do
    }

    // Fetch data and attach handlers
    fetchData().then(data => {
      spans.forEach(span => {
        const id = span.dataset.id;
        const mathematician = getMathematician(id, data);

        if (mathematician) {
          attachHandlers(span, mathematician, data);
        }
      });
    });
  }

  /**
   * Public API
   */
  const MathematicianCards = {
    init: init,
    // Allow manual configuration
    config: function(options) {
      Object.assign(CONFIG, options);
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for different module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathematicianCards;
  }
  if (typeof define === 'function' && define.amd) {
    define([], function() { return MathematicianCards; });
  }
  global.MathematicianCards = MathematicianCards;

})(typeof window !== 'undefined' ? window : global);
