/*
 * Victoria Ainodion — Portfolio interactions
 * No build tools, external dependencies, data collection, or contact-form backend.
 * Contact links, portrait, and CV are configured in config.js.
 */
(() => {
  'use strict';

  const cfg = window.PORTFOLIO_CONFIG || {};
  const clean = (value) => typeof value === 'string' ? value.trim() : '';
  const email = clean(cfg.email);
  const linkedin = clean(cfg.linkedin);

  // Keep links usable even if config.js is deleted or JavaScript is disabled.
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelectorAll('[data-email-link]').forEach((link) => {
      link.href = 'mailto:' + email;
    });
    document.querySelectorAll('[data-email-text]').forEach((node) => {
      node.textContent = email;
    });
  }
  if (/^https:\/\/([\w-]+\.)*linkedin\.com\//i.test(linkedin)) {
    document.querySelectorAll('[data-linkedin-link]').forEach((link) => {
      link.href = linkedin;
    });
  }

  // Show CV buttons only when the supplied PDF has been placed in assets/.
  const cvFile = clean(cfg.cvFile);
  if (cvFile && !/^javascript:/i.test(cvFile)) {
    document.querySelectorAll('[data-cv-button]').forEach((link) => {
      link.href = cvFile;
      link.hidden = false;
    });
  }

  const phone = clean(cfg.phone);
  if (/^\+\d{10,15}$/.test(phone.replace(/\s/g, ''))) {
    const phoneUrl = 'tel:' + phone.replace(/\s/g, '');
    document.querySelectorAll('[data-phone-link]').forEach((link) => link.href = phoneUrl);
    document.querySelectorAll('[data-phone-text]').forEach((node) => node.textContent = phone);
  }

  // No broken portrait: show initials until an actual image successfully loads.
  const photoFile = clean(cfg.portraitFile);
  const photo = document.querySelector('#portrait-image');
  const placeholder = document.querySelector('#portrait-placeholder');
  if (photoFile && photo && placeholder && !/^javascript:/i.test(photoFile)) {
    photo.addEventListener('load', () => {
      photo.hidden = false;
      placeholder.hidden = true;
    }, { once: true });
    photo.src = photoFile;
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile menu is a real keyboard-accessible control.
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    };
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener('pointerdown', (event) => {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.matchMedia('(min-width: 941px)').addEventListener('change', (event) => {
      if (event.matches) closeMenu();
    });
  }

  // Project filters show/hide authored cards; there is no external search or API.
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const workCards = [...document.querySelectorAll('.work-card[data-categories]')];
  const workCount = document.querySelector('#work-count');
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((b) => {
      const active = b === button;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    workCards.forEach((card) => {
      const categories = card.dataset.categories.split(/\s+/);
      const show = selected === 'all' || categories.includes(selected);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (workCount) workCount.textContent = visible + (visible === 1 ? ' case study' : ' case studies');
  }));

  // Every project has the same clear evidence model: task, approach, sample output,
  // tools and value. No invented employer outcomes, testimonials or client records.
  const cases = {
    calendar: {
      category: 'Executive support / Virtual assistance',
      title: 'Executive calendar management',
      lead: 'A sample executive week designed to keep appointments, preparation time and follow-up in one place.',
      problem: 'Busy calendars are easier to manage when meetings are not treated as isolated events. Preparation, protected work time, reminders and decisions taken afterwards all need space.',
      approach: [
        'Bring confirmed appointments and deadlines into one schedule.',
        'Add preparation blocks ahead of important meetings.',
        'Protect work time and allow for travel or transitions between commitments.',
        'Track reminders and actions that follow each meeting.',
        'For remote work, check each participant’s local time before confirming.'
      ],
      output: 'A weekly view with clearly separated commitments, meeting preparation, review time and follow-up reminders.',
      value: 'An executive can see what is coming, what needs preparation and which follow-ups remain open.',
      tools: ['Google Calendar', 'Microsoft Excel'],
      disclaimer: 'This schedule uses sample appointments and dates. No private client calendar entries are shown.'
    },
    meetings: {
      category: 'Executive support / Operations / Communication',
      title: 'Meetings and action-point tracking',
      lead: 'A meeting pack and action log that connects the discussion to the work assigned afterwards.',
      problem: 'Meeting decisions can become difficult to follow when owners, deadlines and next actions are recorded in different places or not recorded at all.',
      approach: [
        'Prepare an agenda with the items that need discussion or a decision.',
        'Record decisions and agreed action points clearly.',
        'Assign each action to a responsible person with a due date.',
        'Separate completed items from those awaiting a response.',
        'Prepare a short status update before the next management meeting.'
      ],
      output: 'An agenda, structured minutes and a follow-up register showing item, owner, due date and current status.',
      value: 'Makes it easier to know what was agreed, who is responsible and what still needs attention.',
      tools: ['Microsoft Word', 'Microsoft Excel', 'Google Docs'],
      disclaimer: 'Names, action items and deadlines are sample entries. No confidential employer or client meeting notes are shown.'
    },
    finance: {
      category: 'Operations / Reporting / Financial administration',
      title: 'Expenditure and receipt reconciliation',
      lead: 'A sample management check comparing money released, reported spending, receipts and documentation gaps.',
      problem: 'A report can contain expenditure that does not yet have matching supporting documents, or the same expenditure may be counted twice across summaries.',
      approach: [
        'List the amounts released and the periods or activities they relate to.',
        'Organise the reported expenditure by date, category and description.',
        'Match each expenditure line with the available receipt or invoice.',
        'Compare purchased items against the quotation and flag omissions or differences.',
        'Check carried-forward figures before combining reports, then present unresolved items for review.'
      ],
      output: 'A reconciliation table, a receipts checklist, a quotation-to-purchase comparison and a brief expenditure chart.',
      value: 'Makes differences visible without assuming that an undocumented item is automatically an improper expense.',
      tools: ['Microsoft Excel', 'Google Sheets', 'Microsoft Word'],
      disclaimer: 'Sample figures are used to protect confidential financial information. They are not actual transaction figures or verified employer results.',
      exampleTable: 'finance'
    },
    records: {
      category: 'Operations / Spreadsheet management',
      title: 'Spreadsheet and membership record management',
      lead: 'An illustrative before-and-after view of a contact register that needs a careful data-quality review.',
      problem: 'Member records can include duplicate entries, missing fields and inconsistent name or contact formats, making reliable follow-up difficult.',
      approach: [
        'Review the data structure and agree on the required fields.',
        'Find possible duplicates using names, phone numbers and other reference fields.',
        'Standardise formats without guessing missing personal details.',
        'Flag uncertain matches for review rather than silently merging them.',
        'Maintain a clean tracker and a separate list of questions to resolve.'
      ],
      output: 'An organised membership register and a review queue for unresolved or duplicate entries.',
      value: 'Provides a clearer record for administration and a reliable place to start when contacting members.',
      tools: ['Microsoft Excel', 'Google Sheets'],
      disclaimer: 'Names and contact details are sample entries. No private membership records are displayed.'
    },
    travel: {
      category: 'Research / Travel / Virtual assistance',
      title: 'Executive travel research and fare comparison',
      lead: 'A sample comparison for a business-class journey between Abuja and Guangzhou.',
      problem: 'Displayed prices can differ from final totals, while airport connections, stopovers, dates and fare conditions can change the practical choice.',
      approach: [
        'Set out the journey dates, cabin type and departure or arrival requirements.',
        'Record options from each booking source and check the full route.',
        'Compare stopovers, total travel time and return-arrival dates.',
        'Separate a displayed quotation from a verified final payable total.',
        'Flag baggage rules, ticket flexibility and details requiring re-checking before booking.'
      ],
      output: 'A side-by-side fare table and short executive note identifying the conditions that need confirmation.',
      value: 'Allows an executive to review comparable options without overlooking route details or unconfirmed charges.',
      tools: ['Google Sheets', 'Microsoft Excel', 'Online research'],
      disclaimer: 'The fare amounts are examples for comparison only, not current quotations, historical fares or booking offers.'
    },
    inbox: {
      category: 'Executive support / Virtual assistance / Communication',
      title: 'Email and inbox organisation',
      lead: 'A sample inbox label system that separates messages needing action from messages that are already resolved.',
      problem: 'When new requests, approvals and general information share one undifferentiated inbox, it is harder to see what is waiting for a response.',
      approach: [
        'Identify priority or time-sensitive messages.',
        'Separate items for executive review from items that can be handled directly.',
        'Tag messages that are awaiting a reply or a follow-up date.',
        'Keep finance and documentation messages grouped for easy retrieval.',
        'Archive completed conversations once the needed action has been recorded.'
      ],
      output: 'A structured set of Gmail-style labels: Priority, Executive Review, Awaiting Response, Follow-up, Finance and Archived.',
      value: 'Creates a simple way to see pending decisions and find the information behind a request.',
      tools: ['Gmail', 'Google Workspace'],
      disclaimer: 'The sender names, subjects and messages are sample entries. No private emails are shown.'
    },
    tasks: {
      category: 'Operations / Virtual assistance',
      title: 'Task and project follow-up board',
      lead: 'A small sample task board showing owners, status and the next action required.',
      problem: 'Assignments can be delayed when no one has a current view of what is in progress and which items are waiting for another person.',
      approach: [
        'Record each task as an action with an owner and an expected date.',
        'Separate items into To Do, In Progress, Awaiting Feedback and Completed.',
        'Add the next action rather than relying on a vague task title.',
        'Review waiting items regularly and send appropriate reminders.',
        'Close a task only when the required output has been confirmed.'
      ],
      output: 'A Trello-style board or spreadsheet tracker with task, owner, deadline, current status and next action.',
      value: 'Makes hand-offs and waiting points easier to see and follow up.',
      tools: ['Trello', 'Microsoft Excel', 'Google Sheets'],
      disclaimer: 'The tasks, owners and deadlines are examples. This is a recreated layout, not a screenshot of an employer’s internal board.'
    },
    writing: {
      category: 'Executive support / Communication',
      title: 'Executive and corporate communications',
      lead: 'A sample follow-up note showing direct wording, a clear request and an identifiable deadline.',
      problem: 'Administrative messages need to be respectful and precise, especially when asking recipients to act or provide an update.',
      approach: [
        'Identify the audience, the decision or the information needed.',
        'Use a subject line that makes the request easy to find.',
        'State the reason for writing without unnecessary background.',
        'Make the required action and requested date explicit.',
        'Review names, dates, attachments and confidentiality before sending.'
      ],
      output: 'A professional follow-up draft, business letter format or short internal announcement that can be reviewed before use.',
      value: 'Helps recipients understand the request and what response is expected.',
      tools: ['Microsoft Word', 'Gmail', 'Google Docs'],
      disclaimer: 'This is a sample message drafted for the portfolio, not an employer instruction, private correspondence or an approved published post.'
    }
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const dialog = document.querySelector('#case-dialog');
  const dialogContent = document.querySelector('#case-dialog-content');
  const dialogClose = document.querySelector('.modal-close');
  let previousFocus = null;
  const openCase = (key) => {
    const details = cases[key];
    const preview = document.querySelector('#preview-' + key);
    if (!details || !preview || !dialog || !dialogContent) return;
    previousFocus = document.activeElement;
    dialogContent.innerHTML = `
      <div class="case-category">${escapeHtml(details.category)}</div>
      <h2 class="case-title" id="case-dialog-title">${escapeHtml(details.title)}</h2>
      <p class="case-lead">${escapeHtml(details.lead)}</p>
      <div class="case-preview-wrap" id="modal-visual"></div>
      <p class="case-demo-note">ILLUSTRATIVE EXAMPLE — ${escapeHtml(details.disclaimer)}</p>
      ${details.exampleTable === 'finance' ? `<div class="case-extra"><h3>Illustrative expenditure summary</h3><table class="example-table"><thead><tr><th scope="col">Description</th><th scope="col">Sample amount (₦)</th></tr></thead><tbody><tr><td>Funds released</td><td>2,500,000</td></tr><tr><td>Reported expenditure</td><td>2,180,000</td></tr><tr><td>Expenditure with matched receipts</td><td>1,920,000</td></tr><tr><td>Reported expenditure awaiting receipt support</td><td>260,000</td></tr><tr><td>Funds released less reported expenditure</td><td>320,000</td></tr></tbody></table><p class="example-table-note">Illustrative arithmetic only. The reported spending exceeds receipt-supported spending by ₦260,000; this is a documentation gap, not evidence of misuse. Quotation item checks would be reviewed separately.</p></div>` : ''}
      <div class="case-detail-grid">
        <div class="case-section"><h3>The administrative problem</h3><p>${escapeHtml(details.problem)}</p><h3>Example output</h3><p>${escapeHtml(details.output)}</p></div>
        <div class="case-section"><h3>Approach</h3><ul>${details.approach.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
      </div>
      <div class="case-section"><h3>Practical value</h3><p>${escapeHtml(details.value)}</p></div>
      <div class="case-tools"><span>RELEVANT TOOLS</span><div class="case-tools-list">${details.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join('')}</div></div>
    `;
    const copy = preview.cloneNode(true);
    copy.removeAttribute('id');
    dialogContent.querySelector('#modal-visual').appendChild(copy);
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      dialogClose?.focus();
    } else {
      // Fallback for a browser without native HTML dialog support.
      dialog.setAttribute('open', '');
      dialogClose?.focus();
    }
  };

  document.querySelectorAll('[data-open-case]').forEach((button) => {
    button.addEventListener('click', () => openCase(button.dataset.openCase));
  });
  if (dialog && dialogClose) {
    dialogClose.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    });
    dialog.addEventListener('click', (event) => {
      // Clicking outside the inner panel dismisses the modal.
      if (event.target === dialog) dialog.close();
    });
  }
})();
