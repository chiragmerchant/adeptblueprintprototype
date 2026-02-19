import { brandings } from './branding.js';
let currentSlide = 0;
let currentEditable = null;
let originalBlueprint = null;
let selectedBrandingKey = 'light'; // default
function loadEdits() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === blueprint.slides.length) {
        blueprint.slides = parsed;
      }
    } catch (e) {
      console.warn("Corrupted save data - using original slides");
    }
  }
}

function saveEdits() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blueprint.slides));
}

function attachEditHandlers() {
  const frame = document.getElementById('slideFrame');

  // Title
  const titleEl = frame.querySelector('.slide-title');
  if (titleEl) {
    const field = titleEl.dataset.field;
    titleEl.onblur = () => {
      blueprint.slides[currentSlide][field] = titleEl.textContent.trim();
      saveEdits();
      updateThumbnail(currentSlide);
    };
  }

  // Subtitles
  frame.querySelectorAll('.slide-subtitle').forEach(el => {
    const field = el.dataset.field;
    el.onblur = () => {
      blueprint.slides[currentSlide][field] = el.textContent.trim();
      saveEdits();
    };
  });

  // Headline & main text
  frame.querySelectorAll('[data-field="headline"], [data-field="text"]').forEach(el => {
    const field = el.dataset.field;
    el.onblur = () => {
      blueprint.slides[currentSlide][field] = el.textContent.trim();
      saveEdits();
      updateThumbnail(currentSlide);
    };
  });

  // Visual
  const visualEl = frame.querySelector('.image-desc');
  if (visualEl) {
    visualEl.onblur = () => {
      blueprint.slides[currentSlide].visual = visualEl.textContent.trim();
      saveEdits();
    };
  }

  // Bullets & talking points
  frame.querySelectorAll('.bullets li, .talking-points li').forEach(li => {
    const field = li.dataset.field;
    const idx = parseInt(li.dataset.index);
    li.onblur = () => {
      blueprint.slides[currentSlide][field][idx] = li.textContent.trim();
      saveEdits();
      if (field === 'bullets') updateThumbnail(currentSlide);
    };
  });

// Magic icons
frame.querySelectorAll('.edit-icon').forEach(icon => {
  icon.addEventListener('click', e => {
    e.preventDefault();          //  stop default behavior
    e.stopPropagation();         //  stop bubbling to parent

    // Optional: explicitly blur the parent editable element
    const editableParent = icon.closest('.editable');
    if (editableParent) {
      editableParent.blur();
    }

    showAIMenu(icon.parentElement, e);
  });

  // prevent mousedown from focusing (some browsers are aggressive)
  icon.addEventListener('mousedown', e => {
    e.preventDefault();
  });
});
}

function updateThumbnail(idx) {
  const thumb = document.querySelectorAll('.thumb')[idx];
  if (thumb) {
    const titleEl = thumb.querySelector('.slide-title');
    const slide = blueprint.slides[idx];
    titleEl.textContent = (slide.title || slide.headline || slide.text || 'Untitled').substring(0, 60);
  }
}
function renderSlide() {
  const frame = document.getElementById('slideFrame');
  const slide = blueprint.slides[currentSlide];

  let html = '';

  const displayTitle = slide.title || slide.headline || `Slide ${currentSlide + 1}`;
  const titleField = slide.title !== undefined ? 'title' : 'headline';
  const titleAnchor = `--ai-trigger-${currentSlide}-${titleField}`;

  html += `
    <div class="slide-title editable" contenteditable="true" data-field="${titleField}">
      ${displayTitle}<span class="edit-icon" style="anchor-name: ${titleAnchor};">✨</span>
    </div>`;

  if (slide.subtitle) {
    const subAnchor = `--ai-trigger-${currentSlide}-subtitle`;
    html += `
      <div class="slide-subtitle editable" contenteditable="true" data-field="subtitle">
        ${slide.subtitle}<span class="edit-icon" style="anchor-name: ${subAnchor};">✨</span>
      </div>`;
  }
  if (slide.presenter) {
    const presAnchor = `--ai-trigger-${currentSlide}-presenter`;
    html += `
      <div class="slide-subtitle editable" contenteditable="true" data-field="presenter">
        ${slide.presenter}<span class="edit-icon" style="anchor-name: ${presAnchor};">✨</span>
      </div>`;
  }
  if (slide.oneLineProblem) {
    const probAnchor = `--ai-trigger-${currentSlide}-oneLineProblem`;
    html += `
      <div class="slide-subtitle editable" contenteditable="true" data-field="oneLineProblem">
        ${slide.oneLineProblem}<span class="edit-icon" style="anchor-name: ${probAnchor};">✨</span>
      </div>`;
  }

  html += `<div class="slide-body"><div class="content-left">`;

  if (slide.headline && !slide.title) {
    const hlAnchor = `--ai-trigger-${currentSlide}-headline`;
    html += `
      <h4>Headline</h4>
      <div class="editable" contenteditable="true" data-field="headline">
        ${slide.headline}<span class="edit-icon" style="anchor-name: ${hlAnchor};">✨</span>
      </div>`;
  }
  if (slide.text) {
    const textAnchor = `--ai-trigger-${currentSlide}-text`;
    html += `
      <h4>Main Text</h4>
      <div class="editable" contenteditable="true" data-field="text">
        ${slide.text}<span class="edit-icon" style="anchor-name: ${textAnchor};">✨</span>
      </div>`;
  }

  html += `</div><div class="content-right">
    <h4>Visual / Image Description</h4>
    <div class="image-desc editable" contenteditable="true" data-field="visual">
      ${slide.visual || 'No visual description'}<span class="edit-icon" style="anchor-name: --ai-trigger-${currentSlide}-visual;">✨</span>
    </div>
  </div></div>`;

  if (slide.talkingPoints?.length) {
    html += `<div class="speaker-notes">
      <h4>Speaker Notes / Talking Points</h4>
      <ul class="talking-points">`;
    slide.talkingPoints.forEach((p, i) => {
      const tpAnchor = `--ai-trigger-${currentSlide}-talkingPoints-${i}`;
      html += `
        <li class="editable" contenteditable="true" data-field="talkingPoints" data-index="${i}">
          ${p}<span class="edit-icon" style="anchor-name: ${tpAnchor};">✨</span>
        </li>`;
    });
    html += `</ul></div>`;
  }

  frame.innerHTML = html;

  document.getElementById('counter').textContent = `Slide ${currentSlide + 1} of ${blueprint.slides.length}`;
  document.getElementById('prevBtn').disabled = currentSlide === 0;
  document.getElementById('nextBtn').disabled = currentSlide === blueprint.slides.length - 1;

  document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === currentSlide));

  attachEditHandlers();
}

function renderRibbon() {
  const ribbon = document.getElementById('ribbon');
  ribbon.innerHTML = '';
  blueprint.slides.forEach((slide, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    const display = slide.title || slide.headline || slide.text || 'Untitled';
    thumb.innerHTML = `<div class="slide-num">Slide ${i+1}</div><div class="slide-title">${display.substring(0,60)}</div>`;
    thumb.onclick = () => { currentSlide = i; renderSlide(); };
    ribbon.appendChild(thumb);
  });
}


// AI Menu
function showAIMenu(el, event) {
  currentEditable = el;
  const menu = document.getElementById('ai-menu');
  const altsList = document.getElementById('ai-alts');

  let key = `${currentSlide}-${el.dataset.field}`;
  if (el.dataset.index !== undefined) {
    key += `-${el.dataset.index}`;
  }

  const suggestions = alternatives[key] || ["No suggestions available."];

  altsList.innerHTML = '';
  suggestions.forEach(alt => {
    const li = document.createElement('li');
    li.textContent = alt;
    li.onclick = () => {
      // Safe text update: remove icon, set textContent, re-add icon
      const icon = el.querySelector('.edit-icon');
      if (icon) icon.remove();

      el.textContent = alt;

      if (icon) el.appendChild(icon);

      // Save
      const field = el.dataset.field;
      const idx = el.dataset.index;
      if (idx !== undefined) {
        blueprint.slides[currentSlide][field][parseInt(idx)] = alt;
      } else {
        blueprint.slides[currentSlide][field] = alt;
      }
      saveEdits();

      menu.style.display = 'none';
    };
    altsList.appendChild(li);
  });

  // Smart positioning
  const rect = el.getBoundingClientRect();
  const menuW = menu.offsetWidth || 280;
  const menuH = menu.offsetHeight || 200;
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  const iconRect = el.querySelector('.edit-icon') ? el.querySelector('.edit-icon').getBoundingClientRect() : rect;
  const iconCenterX = iconRect.left + iconRect.width / 2;
  const iconCenterY = iconRect.top + iconRect.height / 2;

  const space = {
    topLeft:     { w: iconCenterX, h: iconCenterY },
    topRight:    { w: viewportW - iconCenterX, h: iconCenterY },
    bottomLeft:  { w: iconCenterX, h: viewportH - iconCenterY },
    bottomRight: { w: viewportW - iconCenterX, h: viewportH - iconCenterY }
  };

  let bestCorner = 'bottomRight';
  let bestScore = 0;
  for (const [corner, s] of Object.entries(space)) {
    const score = s.w * s.h;
    if (score > bestScore) {
      bestScore = score;
      bestCorner = corner;
    }
  }

  let left, top;
  const offset = 6;

  switch (bestCorner) {
    case 'topLeft':
      left = iconRect.left - menuW - offset;
      top = iconRect.top - menuH - offset;
      break;
    case 'topRight':
      left = iconRect.right + offset;
      top = iconRect.top - menuH - offset;
      break;
    case 'bottomLeft':
      left = iconRect.left - menuW - offset;
      top = iconRect.bottom + offset;
      break;
    case 'bottomRight':
    default:
      left = iconRect.right + offset;
      top = iconRect.bottom + offset;
      break;
  }

  left = Math.max(8, Math.min(left, viewportW - menuW - 8));
  top = Math.max(8, Math.min(top, viewportH - menuH - 8));

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.display = 'block';
}

function simulateAIRequest() {
  const input = document.getElementById('ai-input').value.trim();
  if (input && currentEditable) {
    alert(`Simulated response to "${input}". Under development. Use provided alternatives.`);
  } else {
    alert("That's a blank request.");
  }
}

document.addEventListener('click', e => {
  const menu = document.getElementById('ai-menu');
  if (menu.style.display === 'block' && !menu.contains(e.target) && !e.target.classList.contains('edit-icon')) {
    menu.style.display = 'none';
  }
});



function prevSlide() { if (currentSlide > 0) { currentSlide--; renderSlide(); } }
function nextSlide() { if (currentSlide < blueprint.slides.length - 1) { currentSlide++; renderSlide(); } }

function toggleTheme() {
  document.body.classList.toggle('dark');
  document.getElementById('modeLabel').textContent = document.body.classList.contains('dark') ? 'Dark' : 'Light';
}

function exportToPPTOld() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';

  blueprint.slides.forEach(slide => {
    const s = pptx.addSlide();
    s.background = { color: document.body.classList.contains('dark') ? '000000' : 'FFFFFF' };

    s.addText(slide.title || slide.headline || 'Untitled', {
      x: '10%', y: '5%', w: '80%', h: '15%',
      fontSize: 44, bold: true, color: document.body.classList.contains('dark') ? 'FFFFFF' : '000000', align: 'center'
    });

    let yPos = 20;
    if (slide.subtitle) {
      s.addText(slide.subtitle, { x: '10%', y: yPos + '%', w: '80%', h: '8%', fontSize: 28, color: document.body.classList.contains('dark') ? 'CCCCCC' : '333333', align: 'center' });
      yPos += 8;
    }
    if (slide.presenter) {
      s.addText(slide.presenter, { x: '10%', y: yPos + '%', w: '80%', h: '5%', fontSize: 18, color: document.body.classList.contains('dark') ? 'CCCCCC' : '333333', align: 'center' });
      yPos += 6;
    }
    if (slide.oneLineProblem) {
      s.addText(slide.oneLineProblem, { x: '10%', y: yPos + '%', w: '80%', h: '10%', fontSize: 20, italic: true, color: document.body.classList.contains('dark') ? 'CCCCCC' : '333333', align: 'center' });
      yPos += 12;
    }

    if (slide.text || slide.headline) {
      s.addText(slide.text || slide.headline, {
        x: '10%', y: yPos + '%', w: '55%', h: '50%',
        fontSize: 24, color: document.body.classList.contains('dark') ? 'FFFFFF' : '000000', bullet: true
      });
      yPos += 50;
    }

    s.addText(`[Visual Placeholder]\n${slide.visual || 'Insert image here'}`, {
      x: '70%', y: '25%', w: '25%', h: '50%',
      fontSize: 18, color: document.body.classList.contains('dark') ? 'CCCCCC' : '666666', italic: true, align: 'center'
    });

    if (slide.talkingPoints) {
      s.addNotes(
        slide.talkingPoints.map(point => `• ${point}`).join('\n')
      );
    }
  });

  pptx.writeFile({ fileName: 'ADEPT_Blueprint' });
}
function resetToOriginal() {
  if (!confirm("This will discard ALL your edits and revert to the original blueprint. Continue?")) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);

  // Restore from the preserved original snapshot
  blueprint.slides = JSON.parse(JSON.stringify(originalBlueprint.slides));

  currentSlide = 0;

  const ribbon = document.getElementById('ribbon');
  ribbon.innerHTML = '';

  renderRibbon();
  renderSlide();

  setTimeout(() => {
    alert("Reset complete — back to original blueprint.");
  }, 50);
}


function exportToPPT() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';

  // Read the current selection from the dropdown
  const brandingSelect = document.getElementById('brandingSelect');
  const selectedKey = brandingSelect?.value || 'light';  // fallback to 'light' if missing

  // Get the chosen branding config
  const selectedBranding = brandings[selectedKey] || brandings['light'];

  // Apply global font defaults from the selected branding
  pptx.theme = {
    headFontFace: selectedBranding.fonts.heading.face,
    bodyFontFace: selectedBranding.fonts.body.face
  };

  // Define branded master slide using the selected branding
  pptx.defineSlideMaster({
    title: 'ADEPT_MASTER',
    margin: [0.5, 0.5, 0.75, 0.5],
    background: { color: selectedBranding.colors.background },
    objects: [
      // Logo
      { image: { 
          x: selectedBranding.brandingElements.logo.x, 
          y: selectedBranding.brandingElements.logo.y, 
          w: selectedBranding.brandingElements.logo.w, 
          h: selectedBranding.brandingElements.logo.h, 
          path: selectedBranding.brandingElements.logo.path 
        } 
      },
      // Footer banner rectangle
      { rect: selectedBranding.brandingElements.footerBanner.rect },
      // Footer text
      { text: { 
          text: selectedBranding.brandingElements.footerBanner.text.content, 
          options: selectedBranding.brandingElements.footerBanner.text.options 
        } 
      }
    ],
    slideNumber: selectedBranding.brandingElements.slideNumber
  });

  blueprint.slides.forEach(slide => {
    const s = pptx.addSlide({ masterName: 'ADEPT_MASTER' });

    s.addText(slide.title || slide.headline || 'Untitled', {
      x: '10%', y: '5%', w: '80%', h: '15%',
      fontSize: selectedBranding.fonts.heading.size,
      bold: selectedBranding.fonts.heading.bold,
      color: selectedBranding.colors.primary,
      align: 'center'
    });

    let yPos = 20;
    if (slide.subtitle) {
      s.addText(slide.subtitle, { 
        x: '10%', y: yPos + '%', w: '80%', h: '8%', 
        fontSize: selectedBranding.fonts.subtitle.size, 
        color: selectedBranding.colors.secondary, 
        align: 'center' 
      });
      yPos += 8;
    }
    if (slide.presenter) {
      s.addText(slide.presenter, { 
        x: '10%', y: yPos + '%', w: '80%', h: '5%', 
        fontSize: 18, 
        color: selectedBranding.colors.secondary, 
        align: 'center' 
      });
      yPos += 6;
    }
    if (slide.oneLineProblem) {
      s.addText(slide.oneLineProblem, { 
        x: '10%', y: yPos + '%', w: '80%', h: '10%', 
        fontSize: 20, italic: true, 
        color: selectedBranding.colors.secondary, 
        align: 'center' 
      });
      yPos += 12;
    }

    if (slide.text || slide.headline) {
      s.addText(slide.text || slide.headline, {
        x: '10%', y: yPos + '%', w: '55%', h: '50%',
        fontSize: selectedBranding.fonts.body.size, 
        color: selectedBranding.colors.text, 
        bullet: true
      });
      yPos += 50;
    }

    s.addText(`[Visual Placeholder]\n${slide.visual || 'Insert image here'}`, {
      x: '70%', y: '25%', w: '25%', h: '50%',
      fontSize: 18, 
      color: selectedBranding.colors.accent, 
      italic: true, 
      align: 'center'
    });

    if (slide.talkingPoints) {
      s.addNotes(
        slide.talkingPoints.map(point => `• ${point}`).join('\n')
      );
    }
  });

  pptx.writeFile({ fileName: `ADEPT_Blueprint_${selectedKey}` });
}

window.onload = () => {
  // Capture pristine original BEFORE loadEdits can overwrite it
  if (!originalBlueprint) {
    originalBlueprint = JSON.parse(JSON.stringify(blueprint));
  }

  loadEdits();       // now safe — edits overwrite the working copy only
  renderRibbon();
  renderSlide();

  document.body.classList.remove('dark');
  document.getElementById('themeSwitch').checked = false;
  document.getElementById('modeLabel').textContent = 'Light';

 
};

 // Wire up all buttons once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prevBtn')?.addEventListener('click', prevSlide);
    document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
    document.getElementById('exportBtn')?.addEventListener('click', exportToPPT);
    document.getElementById('resetBtn')?.addEventListener('click', resetToOriginal);
    document.getElementById('simulateAIBtn')?.addEventListener('click', simulateAIRequest);

    // Theme toggle (instead of onchange inline)
    document.getElementById('themeSwitch')?.addEventListener('change', toggleTheme);

    const brandingSelect = document.getElementById('brandingSelect');
    if (brandingSelect) {
      brandingSelect.innerHTML = ''; // clear any static options

      Object.entries(brandings).forEach(([key, config]) => {

        console.log(key);
        const option = document.createElement('option');
        option.value = key;
        option.textContent = config.label || key; // fallback to key if no label
        brandingSelect.appendChild(option);
      });

      // Restore last selection (or default to first key)
      const saved = localStorage.getItem('adeptBranding');
      brandingSelect.value = saved && brandings[saved] ? saved : Object.keys(brandings)[0];

      brandingSelect.addEventListener('change', (e) => {
        selectedBrandingKey = e.target.value;
        localStorage.setItem('adeptBranding', selectedBrandingKey);
        console.log(`Branding changed to: ${selectedBrandingKey} (${brandings[selectedBrandingKey].label})`);
      });
    }
});