/**
 * Narrator — A storytelling overlay engine for mathsedu.org
 * Lightweight, dependency-free, dark-theme narrator system.
 *
 * Usage:
 *   const narrator = new Narrator({ script: [...], characters: {...} });
 *   narrator.start();
 *
 * Copyright Manoj Bhaskar. CC BY-NC-SA 4.0
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Narrator = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    /* ================================================================
       CSS — injected once into <head>
       ================================================================ */
    const CSS_ID = 'narrator-injected-styles';

    function injectCSS() {
        if (document.getElementById(CSS_ID)) return;
        const style = document.createElement('style');
        style.id = CSS_ID;
        style.textContent = `
/* ── Narrator Overlay System ─────────────────────────────────── */

/* Overlay that dims everything behind the narrator */
.narrator-overlay {
    position: fixed;
    inset: 0;
    z-index: 90000;
    pointer-events: none;
    transition: opacity 0.35s ease;
    opacity: 0;
}
.narrator-overlay.active {
    opacity: 1;
}

/* Dim layer — covers the whole page */
.narrator-dim {
    position: fixed;
    inset: 0;
    background: rgba(2, 2, 12, 0.72);
    z-index: 90001;
    pointer-events: auto;
    transition: opacity 0.4s ease;
    opacity: 0;
}
.narrator-dim.active {
    opacity: 1;
}

/* Highlight ring on targeted element */
.narrator-highlight-ring {
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 0 0 3px rgba(252, 211, 77, 0.7),
                0 0 24px 4px rgba(252, 211, 77, 0.25),
                inset 0 0 12px rgba(252, 211, 77, 0.08);
    z-index: 90002;
    pointer-events: none;
    transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0;
}
.narrator-highlight-ring.active {
    opacity: 1;
}

/* Highlighted element gets pulled above the dim */
.narrator-highlighted {
    position: relative;
    z-index: 90003 !important;
}

/* ── Dialogue Box ─────────────────────────────────────────────── */
.narrator-dialogue {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 90010;
    padding: 0 16px 16px;
    pointer-events: auto;
    transform: translateY(110%);
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.narrator-dialogue.visible {
    transform: translateY(0);
}

.narrator-dialogue-inner {
    max-width: 720px;
    margin: 0 auto;
    background: rgba(12, 12, 30, 0.88);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(252, 211, 77, 0.15);
    border-radius: 16px;
    padding: 0;
    box-shadow: 0 -4px 40px rgba(0, 0, 0, 0.5),
                0 0 80px rgba(252, 211, 77, 0.04);
    overflow: hidden;
}

/* Progress bar at top of dialogue */
.narrator-progress-bar {
    height: 3px;
    background: rgba(255, 255, 255, 0.04);
    position: relative;
    overflow: hidden;
}
.narrator-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #fcd34d, #f59e0b);
    transition: width 0.35s ease;
    width: 0%;
    border-radius: 0 2px 2px 0;
}

/* Content area */
.narrator-content {
    display: flex;
    align-items: flex-start;
    padding: 18px 20px 14px;
    gap: 14px;
}

/* Avatar / icon */
.narrator-avatar {
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;
    background: rgba(252, 211, 77, 0.1);
    border: 1.5px solid rgba(252, 211, 77, 0.25);
    transition: all 0.35s ease;
}

/* Character name label */
.narrator-char-name {
    font-size: 0.65em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 4px;
    font-weight: 600;
    color: #fcd34d;
    font-family: -apple-system, BlinkMacSystemFont, 'DM Sans', 'Segoe UI', sans-serif;
}

/* Text area */
.narrator-text-wrap {
    flex: 1;
    min-width: 0;
}
.narrator-text {
    font-family: 'Lora', Georgia, 'Times New Roman', serif;
    font-size: 1.05em;
    line-height: 1.75;
    color: #d0d4e8;
    min-height: 1.75em;
}

/* Typewriter cursor */
.narrator-cursor {
    display: inline-block;
    width: 2px;
    height: 1.1em;
    background: #fcd34d;
    margin-left: 2px;
    vertical-align: text-bottom;
    animation: narratorBlink 0.8s step-end infinite;
}
@keyframes narratorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/* Click-to-continue indicator */
.narrator-continue {
    text-align: right;
    padding: 6px 18px 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'DM Sans', 'Segoe UI', sans-serif;
    font-size: 0.7em;
    color: rgba(252, 211, 77, 0.5);
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.4s ease;
    user-select: none;
}
.narrator-continue.visible {
    opacity: 1;
    animation: narratorPulse 2s ease-in-out infinite;
}
@keyframes narratorPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

/* ── Controls Bar ─────────────────────────────────────────────── */
.narrator-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 12px;
    gap: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'DM Sans', 'Segoe UI', sans-serif;
}

.narrator-controls-left {
    display: flex;
    align-items: center;
    gap: 6px;
}

.narrator-ctrl-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: #8890b0;
    font-size: 0.72em;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    letter-spacing: 0.5px;
}
.narrator-ctrl-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #c0c8e8;
    border-color: rgba(255, 255, 255, 0.15);
}
.narrator-ctrl-btn.active {
    background: rgba(252, 211, 77, 0.12);
    border-color: rgba(252, 211, 77, 0.25);
    color: #fcd34d;
}

.narrator-close-btn {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    color: #5a6080;
    font-size: 0.72em;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
}
.narrator-close-btn:hover {
    color: #fb7185;
    border-color: rgba(251, 113, 133, 0.25);
    background: rgba(251, 113, 133, 0.08);
}

/* Speed indicator */
.narrator-speed-group {
    display: flex;
    gap: 2px;
    align-items: center;
}

/* Step counter */
.narrator-step-count {
    font-size: 0.65em;
    color: #4a5080;
    letter-spacing: 0.5px;
    white-space: nowrap;
}

/* ── Annotation Popup ─────────────────────────────────────────── */
.narrator-annotation {
    position: absolute;
    z-index: 90008;
    background: rgba(12, 12, 30, 0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(252, 211, 77, 0.2);
    border-radius: 12px;
    padding: 12px 16px;
    max-width: 260px;
    font-family: 'Lora', Georgia, serif;
    font-size: 0.92em;
    line-height: 1.6;
    color: #d0d4e8;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4),
                0 0 40px rgba(252, 211, 77, 0.05);
    pointer-events: none;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.35s ease, transform 0.35s ease;
}
.narrator-annotation.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Arrow on annotation */
.narrator-annotation-arrow {
    position: absolute;
    width: 12px;
    height: 12px;
    background: rgba(12, 12, 30, 0.92);
    border: 1px solid rgba(252, 211, 77, 0.2);
    transform: rotate(45deg);
}
/* Arrow positions — set dynamically */
.narrator-annotation-arrow.arrow-top {
    top: -7px;
    border-right: none;
    border-bottom: none;
}
.narrator-annotation-arrow.arrow-bottom {
    bottom: -7px;
    border-left: none;
    border-top: none;
}
.narrator-annotation-arrow.arrow-left {
    left: -7px;
    border-right: none;
    border-top: none;
}
.narrator-annotation-arrow.arrow-right {
    right: -7px;
    border-left: none;
    border-bottom: none;
}

/* ── Start Button ─────────────────────────────────────────────── */
.narrator-start-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, rgba(252, 211, 77, 0.12), rgba(245, 158, 11, 0.08));
    border: 1px solid rgba(252, 211, 77, 0.25);
    border-radius: 50px;
    padding: 10px 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'DM Sans', 'Segoe UI', sans-serif;
    font-size: 0.88em;
    font-weight: 600;
    color: #fcd34d;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}
.narrator-start-btn:hover {
    background: linear-gradient(135deg, rgba(252, 211, 77, 0.2), rgba(245, 158, 11, 0.14));
    border-color: rgba(252, 211, 77, 0.45);
    box-shadow: 0 4px 24px rgba(252, 211, 77, 0.15);
    transform: translateY(-1px);
}
.narrator-start-btn:active {
    transform: translateY(0);
}
.narrator-start-btn .narrator-start-icon {
    font-size: 1.1em;
}

/* ── Built-in Animations ─────────────────────────────────────── */
@keyframes narratorFadeIn {
    from { opacity: 0; } to { opacity: 1; }
}
@keyframes narratorFadeOut {
    from { opacity: 1; } to { opacity: 0; }
}
@keyframes narratorPulseAnim {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.06); }
}
@keyframes narratorSlideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes narratorBounce {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-12px); }
    50% { transform: translateY(-6px); }
    70% { transform: translateY(-10px); }
}
@keyframes narratorGlow {
    0%, 100% { box-shadow: 0 0 8px rgba(252, 211, 77, 0.3); }
    50% { box-shadow: 0 0 24px rgba(252, 211, 77, 0.6), 0 0 48px rgba(252, 211, 77, 0.2); }
}

.narrator-anim-fadeIn { animation: narratorFadeIn 0.5s ease both; }
.narrator-anim-fadeOut { animation: narratorFadeOut 0.5s ease both; }
.narrator-anim-pulse { animation: narratorPulseAnim 0.8s ease both; }
.narrator-anim-slideIn { animation: narratorSlideIn 0.5s ease both; }
.narrator-anim-bounce { animation: narratorBounce 0.7s ease both; }
.narrator-anim-glow { animation: narratorGlow 1.5s ease infinite; }

/* ── Responsive ───────────────────────────────────────────────── */
@media (max-width: 600px) {
    .narrator-dialogue {
        padding: 0 8px 8px;
    }
    .narrator-dialogue-inner {
        border-radius: 14px;
    }
    .narrator-content {
        padding: 14px 14px 10px;
        gap: 10px;
    }
    .narrator-avatar {
        width: 34px;
        height: 34px;
        font-size: 1.1em;
    }
    .narrator-text {
        font-size: 0.95em;
    }
    .narrator-controls {
        padding: 0 14px 10px;
    }
    .narrator-annotation {
        max-width: 200px;
        font-size: 0.85em;
        padding: 10px 14px;
    }
}
`;
        document.head.appendChild(style);
    }

    /* ================================================================
       BUILT-IN ANIMATION MAP
       ================================================================ */
    const BUILTIN_ANIMATIONS = {
        fadeIn:  'narrator-anim-fadeIn',
        fadeOut: 'narrator-anim-fadeOut',
        pulse:  'narrator-anim-pulse',
        slideIn:'narrator-anim-slideIn',
        bounce: 'narrator-anim-bounce',
        glow:   'narrator-anim-glow',
    };

    /* ================================================================
       NARRATOR CLASS
       ================================================================ */
    function Narrator(opts) {
        if (!(this instanceof Narrator)) return new Narrator(opts);

        this._script = opts.script || [];
        this._characters = opts.characters || {
            narrator: { name: 'Guide', color: '#fcd34d', icon: '\u{1F393}' }
        };
        this._typewriterSpeed = opts.typewriterSpeed || 30;
        this._onComplete = opts.onComplete || null;

        this._speedMultipliers = { slow: 2, normal: 1, fast: 0.35 };
        this._currentSpeed = 'normal';
        this._currentStep = -1;
        this._isRunning = false;
        this._isPaused = false;
        this._typewriterTimer = null;
        this._autoAdvanceTimer = null;
        this._delayTimer = null;
        this._textComplete = false;

        // DOM refs — created lazily
        this._els = {};
        this._previouslyHighlighted = null;
        this._activeAnnotation = null;
        this._animatedElements = [];
        this._boundKeyHandler = this._onKey.bind(this);
        this._boundClickHandler = this._onClick.bind(this);
        this._boundResizeHandler = this._onResize.bind(this);
    }

    /* ────────────────────────────────────────────────────────────────
       PUBLIC API
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype.start = function () {
        if (this._isRunning) return;
        injectCSS();
        this._buildDOM();
        this._bindEvents();
        this._isRunning = true;
        this._isPaused = false;
        this._currentStep = -1;
        this._showUI();
        this.next();
    };

    Narrator.prototype.pause = function () {
        if (!this._isRunning || this._isPaused) return;
        this._isPaused = true;
        this._clearTimers();
    };

    Narrator.prototype.resume = function () {
        if (!this._isRunning || !this._isPaused) return;
        this._isPaused = false;
        // If text was still typing, resume it
        if (!this._textComplete) {
            this._continueTypewriter();
        }
    };

    Narrator.prototype.skip = function () {
        if (!this._isRunning) return;
        if (!this._textComplete) {
            this._finishTypewriter();
        }
    };

    Narrator.prototype.next = function () {
        if (!this._isRunning) return;
        var nextIdx = this._currentStep + 1;
        if (nextIdx >= this._script.length) {
            this._complete();
            return;
        }
        this.goTo(nextIdx);
    };

    Narrator.prototype.goTo = function (idx) {
        if (!this._isRunning) return;
        if (idx < 0 || idx >= this._script.length) return;

        // Clean up previous step
        this._clearTimers();
        this._exitCurrentStep();

        this._currentStep = idx;
        var step = this._script[idx];

        // Update progress
        this._updateProgress();

        // Delay before showing step
        var delay = step.delay || 0;
        if (delay > 0) {
            var self = this;
            this._delayTimer = setTimeout(function () {
                self._executeStep(step);
            }, delay);
        } else {
            this._executeStep(step);
        }
    };

    Narrator.prototype.stop = function () {
        if (!this._isRunning) return;
        this._clearTimers();
        this._exitCurrentStep();
        this._hideUI();
        this._unbindEvents();
        this._cleanupDOM();
        this._isRunning = false;
        this._isPaused = false;
        this._currentStep = -1;
    };

    /* ────────────────────────────────────────────────────────────────
       STATIC HELPER — create a start button
       ──────────────────────────────────────────────────────────────── */
    Narrator.createStartButton = function (container, narrator, label) {
        injectCSS();
        var btn = document.createElement('button');
        btn.className = 'narrator-start-btn';
        btn.innerHTML = '<span class="narrator-start-icon">\u{25B6}</span> ' + (label || 'Start Guided Tour');
        btn.addEventListener('click', function () {
            narrator.start();
        });
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) container.appendChild(btn);
        return btn;
    };

    /* ────────────────────────────────────────────────────────────────
       DOM CONSTRUCTION
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._buildDOM = function () {
        // Only build once
        if (this._els.root) return;

        var root = document.createElement('div');
        root.className = 'narrator-overlay';
        root.setAttribute('role', 'dialog');
        root.setAttribute('aria-label', 'Guided narration');

        // Dim layer
        var dim = document.createElement('div');
        dim.className = 'narrator-dim';
        root.appendChild(dim);

        // Highlight ring
        var ring = document.createElement('div');
        ring.className = 'narrator-highlight-ring';
        root.appendChild(ring);

        // Annotation container (positioned absolutely)
        var annotationWrap = document.createElement('div');
        annotationWrap.style.cssText = 'position:fixed;inset:0;z-index:90008;pointer-events:none;';
        root.appendChild(annotationWrap);

        // Dialogue box
        var dialogue = document.createElement('div');
        dialogue.className = 'narrator-dialogue';
        dialogue.innerHTML =
            '<div class="narrator-dialogue-inner">' +
                '<div class="narrator-progress-bar"><div class="narrator-progress-fill"></div></div>' +
                '<div class="narrator-content">' +
                    '<div class="narrator-avatar"></div>' +
                    '<div class="narrator-text-wrap">' +
                        '<div class="narrator-char-name"></div>' +
                        '<div class="narrator-text"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="narrator-continue">Click to continue</div>' +
                '<div class="narrator-controls">' +
                    '<div class="narrator-controls-left">' +
                        '<div class="narrator-speed-group">' +
                            '<button class="narrator-ctrl-btn" data-speed="slow">Slow</button>' +
                            '<button class="narrator-ctrl-btn active" data-speed="normal">Normal</button>' +
                            '<button class="narrator-ctrl-btn" data-speed="fast">Fast</button>' +
                        '</div>' +
                    '</div>' +
                    '<span class="narrator-step-count"></span>' +
                    '<button class="narrator-close-btn">Exit</button>' +
                '</div>' +
            '</div>';
        root.appendChild(dialogue);

        document.body.appendChild(root);

        // Cache element references
        this._els = {
            root: root,
            dim: dim,
            ring: ring,
            annotationWrap: annotationWrap,
            dialogue: dialogue,
            progressFill: root.querySelector('.narrator-progress-fill'),
            avatar: root.querySelector('.narrator-avatar'),
            charName: root.querySelector('.narrator-char-name'),
            text: root.querySelector('.narrator-text'),
            continueHint: root.querySelector('.narrator-continue'),
            stepCount: root.querySelector('.narrator-step-count'),
            speedBtns: root.querySelectorAll('[data-speed]'),
            closeBtn: root.querySelector('.narrator-close-btn'),
        };

        // Speed button listeners
        var self = this;
        for (var i = 0; i < this._els.speedBtns.length; i++) {
            (function (btn) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    self._setSpeed(btn.getAttribute('data-speed'));
                });
            })(this._els.speedBtns[i]);
        }

        // Close button
        this._els.closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            self.stop();
        });
    };

    Narrator.prototype._cleanupDOM = function () {
        if (this._els.root && this._els.root.parentNode) {
            this._els.root.parentNode.removeChild(this._els.root);
        }
        this._els = {};
    };

    /* ────────────────────────────────────────────────────────────────
       EVENT HANDLING
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._bindEvents = function () {
        document.addEventListener('keydown', this._boundKeyHandler);
        document.addEventListener('click', this._boundClickHandler);
        window.addEventListener('resize', this._boundResizeHandler);
    };

    Narrator.prototype._unbindEvents = function () {
        document.removeEventListener('keydown', this._boundKeyHandler);
        document.removeEventListener('click', this._boundClickHandler);
        window.removeEventListener('resize', this._boundResizeHandler);
    };

    Narrator.prototype._onKey = function (e) {
        if (!this._isRunning || this._isPaused) return;

        if (e.key === 'Escape') {
            e.preventDefault();
            this.stop();
            return;
        }
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this._advance();
        }
    };

    Narrator.prototype._onClick = function (e) {
        if (!this._isRunning || this._isPaused) return;
        // Don't advance if clicking controls
        if (e.target.closest && (
            e.target.closest('.narrator-ctrl-btn') ||
            e.target.closest('.narrator-close-btn') ||
            e.target.closest('.narrator-speed-group')
        )) return;

        this._advance();
    };

    Narrator.prototype._onResize = function () {
        if (!this._isRunning) return;
        // Reposition highlight and annotation
        if (this._previouslyHighlighted) {
            this._positionRing(this._previouslyHighlighted);
        }
        if (this._activeAnnotation && this._activeAnnotation._targetEl) {
            this._positionAnnotation(this._activeAnnotation, this._activeAnnotation._targetEl);
        }
    };

    Narrator.prototype._advance = function () {
        if (this._textComplete) {
            this.next();
        } else {
            this._finishTypewriter();
        }
    };

    /* ────────────────────────────────────────────────────────────────
       SHOW / HIDE UI
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._showUI = function () {
        var self = this;
        // Force reflow
        this._els.root.offsetHeight;
        this._els.root.classList.add('active');
        this._els.dim.classList.add('active');
        requestAnimationFrame(function () {
            self._els.dialogue.classList.add('visible');
        });
    };

    Narrator.prototype._hideUI = function () {
        this._els.dialogue.classList.remove('visible');
        this._els.dim.classList.remove('active');
        this._els.root.classList.remove('active');
        this._clearHighlight();
        this._clearAnnotation();
    };

    /* ────────────────────────────────────────────────────────────────
       STEP EXECUTION
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._executeStep = function (step) {
        // Character
        var charKey = step.character || 'narrator';
        var charDef = this._characters[charKey] || this._characters.narrator || { name: 'Guide', color: '#fcd34d', icon: '\u{1F393}' };

        this._els.avatar.textContent = charDef.icon || '\u{1F393}';
        this._els.avatar.style.borderColor = _rgba(charDef.color, 0.3);
        this._els.avatar.style.background = _rgba(charDef.color, 0.1);
        this._els.charName.textContent = charDef.name || charKey;
        this._els.charName.style.color = charDef.color || '#fcd34d';

        // Highlight
        if (step.highlight) {
            this._setHighlight(step.highlight);
        } else {
            this._clearHighlight();
        }

        // Animation trigger
        if (step.animate) {
            this._triggerAnimation(step.animate);
        }

        // Action call
        if (step.action) {
            this._callAction(step.action);
        }

        // Annotation
        if (step.annotation) {
            this._showAnnotation(step.annotation);
        } else {
            this._clearAnnotation();
        }

        // onEnter callback
        if (typeof step.onEnter === 'function') {
            try { step.onEnter(); } catch (e) { console.warn('Narrator onEnter error:', e); }
        }

        // Typewriter text
        this._textComplete = false;
        this._els.continueHint.classList.remove('visible');
        this._startTypewriter(step.text || '');

        // Auto-advance
        if (step.autoAdvance && step.autoAdvance > 0) {
            var self = this;
            // auto-advance starts after text finishes, handled in _onTypewriterDone
            this._pendingAutoAdvance = step.autoAdvance;
        } else {
            this._pendingAutoAdvance = 0;
        }
    };

    Narrator.prototype._exitCurrentStep = function () {
        if (this._currentStep < 0 || this._currentStep >= this._script.length) return;
        var step = this._script[this._currentStep];

        // onExit callback
        if (step && typeof step.onExit === 'function') {
            try { step.onExit(); } catch (e) { console.warn('Narrator onExit error:', e); }
        }

        // Clean up animations added by this step
        this._cleanupAnimations();
    };

    /* ────────────────────────────────────────────────────────────────
       TYPEWRITER
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._startTypewriter = function (text) {
        this._typewriterText = text;
        this._typewriterIndex = 0;
        this._els.text.innerHTML = '<span class="narrator-cursor"></span>';
        this._continueTypewriter();
    };

    Narrator.prototype._continueTypewriter = function () {
        if (this._typewriterIndex >= this._typewriterText.length) {
            this._onTypewriterDone();
            return;
        }

        var self = this;
        var speed = this._typewriterSpeed * (this._speedMultipliers[this._currentSpeed] || 1);

        this._typewriterTimer = setTimeout(function () {
            if (self._isPaused) return;

            self._typewriterIndex++;
            // Use textContent for the text part, then add cursor
            var displayText = self._typewriterText.substring(0, self._typewriterIndex);
            self._els.text.innerHTML = _escapeHtml(displayText) + '<span class="narrator-cursor"></span>';

            self._continueTypewriter();
        }, speed);
    };

    Narrator.prototype._finishTypewriter = function () {
        clearTimeout(this._typewriterTimer);
        this._typewriterIndex = this._typewriterText.length;
        this._els.text.innerHTML = _escapeHtml(this._typewriterText);
        this._onTypewriterDone();
    };

    Narrator.prototype._onTypewriterDone = function () {
        this._textComplete = true;
        // Remove cursor, show continue hint
        this._els.text.innerHTML = _escapeHtml(this._typewriterText);
        this._els.continueHint.classList.add('visible');

        // Auto-advance if configured
        if (this._pendingAutoAdvance > 0) {
            var self = this;
            this._autoAdvanceTimer = setTimeout(function () {
                if (self._isRunning && !self._isPaused) {
                    self.next();
                }
            }, this._pendingAutoAdvance);
        }
    };

    /* ────────────────────────────────────────────────────────────────
       HIGHLIGHT SYSTEM
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._setHighlight = function (selector) {
        var el = document.querySelector(selector);
        if (!el) {
            console.warn('Narrator: highlight target not found:', selector);
            this._clearHighlight();
            return;
        }

        // Remove previous highlight class
        if (this._previouslyHighlighted && this._previouslyHighlighted !== el) {
            this._previouslyHighlighted.classList.remove('narrator-highlighted');
        }

        el.classList.add('narrator-highlighted');
        this._previouslyHighlighted = el;

        this._positionRing(el);
        this._els.ring.classList.add('active');
    };

    Narrator.prototype._positionRing = function (el) {
        var rect = el.getBoundingClientRect();
        var pad = 6;
        var ring = this._els.ring;
        ring.style.top = (rect.top - pad + window.scrollY) + 'px';
        ring.style.left = (rect.left - pad) + 'px';
        ring.style.width = (rect.width + pad * 2) + 'px';
        ring.style.height = (rect.height + pad * 2) + 'px';
        ring.style.position = 'absolute';
    };

    Narrator.prototype._clearHighlight = function () {
        if (this._previouslyHighlighted) {
            this._previouslyHighlighted.classList.remove('narrator-highlighted');
            this._previouslyHighlighted = null;
        }
        if (this._els.ring) {
            this._els.ring.classList.remove('active');
        }
    };

    /* ────────────────────────────────────────────────────────────────
       ANIMATIONS
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._triggerAnimation = function (anim) {
        if (!anim || !anim.selector) return;

        var el = document.querySelector(anim.selector);
        if (!el) {
            console.warn('Narrator: animate target not found:', anim.selector);
            return;
        }

        var className = anim.class || '';

        // Check if it's a built-in animation name
        if (BUILTIN_ANIMATIONS[className]) {
            className = BUILTIN_ANIMATIONS[className];
        }

        if (className) {
            el.classList.add(className);
            this._animatedElements.push({ el: el, className: className });
        }
    };

    Narrator.prototype._cleanupAnimations = function () {
        for (var i = 0; i < this._animatedElements.length; i++) {
            var entry = this._animatedElements[i];
            entry.el.classList.remove(entry.className);
        }
        this._animatedElements = [];
    };

    /* ────────────────────────────────────────────────────────────────
       ACTION CALLS
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._callAction = function (actionName) {
        if (!actionName) return;
        try {
            if (window.narratorActions && typeof window.narratorActions[actionName] === 'function') {
                window.narratorActions[actionName]();
            } else {
                console.warn('Narrator: action not found: window.narratorActions.' + actionName);
            }
        } catch (e) {
            console.warn('Narrator: action error:', e);
        }
    };

    /* ────────────────────────────────────────────────────────────────
       ANNOTATIONS
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._showAnnotation = function (ann) {
        this._clearAnnotation();
        if (!ann || !ann.selector) return;

        var el = document.querySelector(ann.selector);
        if (!el) {
            console.warn('Narrator: annotation target not found:', ann.selector);
            return;
        }

        var bubble = document.createElement('div');
        bubble.className = 'narrator-annotation';
        bubble.textContent = ann.text || '';

        var arrow = document.createElement('div');
        arrow.className = 'narrator-annotation-arrow';
        bubble.appendChild(arrow);

        this._els.annotationWrap.appendChild(bubble);
        bubble._targetEl = el;
        this._activeAnnotation = bubble;

        this._positionAnnotation(bubble, el);

        // Animate in
        var self = this;
        requestAnimationFrame(function () {
            bubble.classList.add('visible');
        });
    };

    Narrator.prototype._positionAnnotation = function (bubble, el) {
        var rect = el.getBoundingClientRect();
        var arrow = bubble.querySelector('.narrator-annotation-arrow');

        // Remove old arrow classes
        arrow.className = 'narrator-annotation-arrow';

        // Reset position for measurement
        bubble.style.top = '0';
        bubble.style.left = '0';
        bubble.style.position = 'fixed';

        // Measure bubble
        var bRect = bubble.getBoundingClientRect();
        var bw = bRect.width;
        var bh = bRect.height;
        var vw = window.innerWidth;
        var vh = window.innerHeight;

        // Default: position above the element
        var top = rect.top - bh - 16;
        var left = rect.left + rect.width / 2 - bw / 2;
        var arrowPos = 'arrow-bottom';
        var arrowLeft = bw / 2 - 6;

        // If not enough room above, go below
        if (top < 10) {
            top = rect.bottom + 16;
            arrowPos = 'arrow-top';
        }

        // If dialogue box is in the way (bottom), check that
        if (top + bh > vh - 200) {
            top = rect.top - bh - 16;
            arrowPos = 'arrow-bottom';
        }

        // Clamp horizontal
        if (left < 10) {
            arrowLeft += left - 10;
            left = 10;
        }
        if (left + bw > vw - 10) {
            var overflow = (left + bw) - (vw - 10);
            arrowLeft += overflow;
            left = vw - 10 - bw;
        }

        // Clamp arrow
        arrowLeft = Math.max(12, Math.min(bw - 18, arrowLeft));

        bubble.style.top = top + 'px';
        bubble.style.left = left + 'px';
        arrow.classList.add(arrowPos);
        arrow.style.left = arrowLeft + 'px';
    };

    Narrator.prototype._clearAnnotation = function () {
        if (this._activeAnnotation && this._activeAnnotation.parentNode) {
            this._activeAnnotation.parentNode.removeChild(this._activeAnnotation);
        }
        this._activeAnnotation = null;
    };

    /* ────────────────────────────────────────────────────────────────
       PROGRESS & SPEED
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._updateProgress = function () {
        var total = this._script.length;
        var current = this._currentStep + 1;
        var pct = total > 0 ? (current / total * 100) : 0;

        this._els.progressFill.style.width = pct + '%';
        this._els.stepCount.textContent = current + ' / ' + total;
    };

    Narrator.prototype._setSpeed = function (speed) {
        if (!this._speedMultipliers[speed]) return;
        this._currentSpeed = speed;

        for (var i = 0; i < this._els.speedBtns.length; i++) {
            var btn = this._els.speedBtns[i];
            if (btn.getAttribute('data-speed') === speed) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    };

    /* ────────────────────────────────────────────────────────────────
       COMPLETION
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._complete = function () {
        this.stop();
        if (typeof this._onComplete === 'function') {
            try { this._onComplete(); } catch (e) { console.warn('Narrator onComplete error:', e); }
        }
    };

    /* ────────────────────────────────────────────────────────────────
       TIMERS
       ──────────────────────────────────────────────────────────────── */

    Narrator.prototype._clearTimers = function () {
        clearTimeout(this._typewriterTimer);
        clearTimeout(this._autoAdvanceTimer);
        clearTimeout(this._delayTimer);
    };

    /* ────────────────────────────────────────────────────────────────
       UTILITIES
       ──────────────────────────────────────────────────────────────── */

    function _escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function _rgba(hex, alpha) {
        if (!hex) return 'rgba(252,211,77,' + alpha + ')';
        // Handle hex colours
        var r = 252, g = 211, b = 77;
        if (hex.charAt(0) === '#') {
            var h = hex.substring(1);
            if (h.length === 3) {
                r = parseInt(h[0] + h[0], 16);
                g = parseInt(h[1] + h[1], 16);
                b = parseInt(h[2] + h[2], 16);
            } else if (h.length === 6) {
                r = parseInt(h.substring(0, 2), 16);
                g = parseInt(h.substring(2, 4), 16);
                b = parseInt(h.substring(4, 6), 16);
            }
        }
        return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    }

    return Narrator;
}));
