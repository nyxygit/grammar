(() => {
  "use strict";

  const baseData = window.GRAMMAR_DATA;
  const a2Data = window.GRAMMAR_DATA_A2 || { points: [] };
  const b1Data = window.GRAMMAR_DATA_B1 || { points: [] };
  const b2Data = window.GRAMMAR_DATA_B2 || { points: [] };
  const exampleBank = window.GRAMMAR_EXAMPLES || {};

  const categories = baseData.categories;
  const points = [
    ...baseData.points,
    ...a2Data.points,
    ...b1Data.points,
    ...b2Data.points
  ].map((point) => {
    const expanded = exampleBank[point.wiki];
    return {
      ...point,
      level: point.level || "A1",
      examples: Array.isArray(expanded) && expanded.length ? expanded : point.examples
    };
  });

  const STORAGE_KEY = "grammar-lab-a1b2-browse-v1";
  const LEGACY_STORAGE_KEYS = ["grammar-lab-a1a2-browse-v1", "grammar-lab-a1-browse-v1", "grammar-lab-a1-v1"];
  const LEVELS = ["all", "A1", "A2", "B1", "B2"];

  const pointById = new Map(points.map((point) => [point.id, point]));
  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const pointPositionById = new Map(points.map((point, index) => [point.id, index + 1]));
  const levelPoints = new Map();

  ["A1", "A2", "B1", "B2"].forEach((level) => {
    levelPoints.set(level, points.filter((point) => point.level === level));
  });

  const levelTotals = {
    all: points.length,
    A1: levelPoints.get("A1").length,
    A2: levelPoints.get("A2").length,
    B1: levelPoints.get("B1").length,
    B2: levelPoints.get("B2").length
  };

  const els = {
    headerProgress: document.getElementById("headerProgress"),
    browseView: document.getElementById("browseView"),
    lessonView: document.getElementById("lessonView"),
    reviewView: document.getElementById("reviewView"),
    reviewButton: document.getElementById("reviewButton"),
    reviewCount: document.getElementById("reviewCount"),
    levelNav: document.getElementById("levelNav"),
    categoryNav: document.getElementById("categoryNav"),
    searchInput: document.getElementById("searchInput"),
    clearSearchButton: document.getElementById("clearSearchButton"),
    hideLearned: document.getElementById("hideLearned"),
    resetProgressButton: document.getElementById("resetProgressButton"),
    listHeading: document.getElementById("listHeading"),
    resultCount: document.getElementById("resultCount"),
    listLabels: document.getElementById("listLabels"),
    pointList: document.getElementById("pointList"),
    emptyState: document.getElementById("emptyState"),
    clearFiltersButton: document.getElementById("clearFiltersButton"),
    breadcrumbLevel: document.getElementById("breadcrumbLevel"),
    breadcrumbCategory: document.getElementById("breadcrumbCategory"),
    lessonMeta: document.getElementById("lessonMeta"),
    lessonTitle: document.getElementById("lessonTitle"),
    learnButton: document.getElementById("learnButton"),
    learnButtonBottom: document.getElementById("learnButtonBottom"),
    lessonPattern: document.getElementById("lessonPattern"),
    lessonSummary: document.getElementById("lessonSummary"),
    lessonDetail: document.getElementById("lessonDetail"),
    lessonExamples: document.getElementById("lessonExamples"),
    lessonWiki: document.getElementById("lessonWiki"),
    prevPoint: document.getElementById("prevPoint"),
    prevPointTitle: document.getElementById("prevPointTitle"),
    nextPoint: document.getElementById("nextPoint"),
    nextPointTitle: document.getElementById("nextPointTitle"),
    reviewProgress: document.getElementById("reviewProgress"),
    reviewCard: document.getElementById("reviewCard"),
    reviewEmpty: document.getElementById("reviewEmpty"),
    reviewInstruction: document.getElementById("reviewInstruction"),
    reviewHanzi: document.getElementById("reviewHanzi"),
    reviewActions: document.getElementById("reviewActions"),
    knowButton: document.getElementById("knowButton"),
    notKnowButton: document.getElementById("notKnowButton"),
    reviewResult: document.getElementById("reviewResult"),
    reviewPointLabel: document.getElementById("reviewPointLabel"),
    reviewPointTitle: document.getElementById("reviewPointTitle"),
    reviewPinyin: document.getElementById("reviewPinyin"),
    reviewTranslation: document.getElementById("reviewTranslation"),
    reviewRefresher: document.getElementById("reviewRefresher"),
    reviewPattern: document.getElementById("reviewPattern"),
    reviewSummary: document.getElementById("reviewSummary"),
    reviewExtra: document.getElementById("reviewExtra"),
    reviewExtraHanzi: document.getElementById("reviewExtraHanzi"),
    reviewExtraPinyin: document.getElementById("reviewExtraPinyin"),
    reviewExtraTranslation: document.getElementById("reviewExtraTranslation"),
    reviewWiki: document.getElementById("reviewWiki"),
    nextReviewButton: document.getElementById("nextReviewButton")
  };

  const state = {
    learned: loadLearned(),
    query: "",
    hideLearned: false,
    level: "all",
    category: "all",
    currentPointId: null
  };

  const reviewState = {
    current: null,
    reviewed: 0,
    usedExamples: new Set(),
    lastPointId: null
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function plural(count, singular, pluralForm) {
    return count === 1 ? singular : (pluralForm || `${singular}s`);
  }

  function loadLearned() {
    const validIds = new Set(points.map((point) => point.id));

    const readIds = (raw) => {
      try {
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.learned)) return null;
        return [...new Set(parsed.learned.filter((id) => validIds.has(id)))];
      } catch (error) {
        return null;
      }
    };

    try {
      const keys = [STORAGE_KEY, ...LEGACY_STORAGE_KEYS];
      for (const key of keys) {
        const raw = window.localStorage.getItem(key);
        if (!raw) continue;
        const ids = readIds(raw);
        if (ids) return new Set(ids);
      }
    } catch (error) {
      return new Set();
    }

    return new Set();
  }

  function saveLearned() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        learned: [...state.learned]
      }));
    } catch (error) {
      // The app still works for the current session if storage is unavailable.
    }
  }

  function updateHeader() {
    els.headerProgress.textContent = `${state.learned.size} of ${points.length} learned`;
    els.resetProgressButton.disabled = state.learned.size === 0;
    els.reviewButton.disabled = state.learned.size === 0;
    els.reviewCount.textContent = String(state.learned.size);
  }

  function browseHref(level, category) {
    const targetCategory = category || "all";
    if (level === "all") {
      return targetCategory === "all" ? "#/" : `#/category/${encodeURIComponent(targetCategory)}`;
    }
    const base = `#/level/${level.toLowerCase()}`;
    return targetCategory === "all" ? base : `${base}/category/${encodeURIComponent(targetCategory)}`;
  }

  function pointHref(pointId) {
    return `#/point/${encodeURIComponent(pointId)}`;
  }

  function categoryHasPoints(level, categoryId) {
    return points.some((point) => (
      point.category === categoryId
      && (level === "all" || point.level === level)
    ));
  }

  function scopedPoints(level) {
    return level === "all" ? points : levelPoints.get(level) || [];
  }

  function renderLevelNav() {
    const items = [
      { id: "all", name: "All" },
      { id: "A1", name: "A1" },
      { id: "A2", name: "A2" },
      { id: "B1", name: "B1" },
      { id: "B2", name: "B2" }
    ];

    els.levelNav.innerHTML = items.map((item) => {
      const active = state.level === item.id;
      const category = state.category !== "all" && categoryHasPoints(item.id, state.category)
        ? state.category
        : "all";
      return `
        <a class="level-link${active ? " is-active" : ""}" href="${browseHref(item.id, category)}"${active ? ' aria-current="page"' : ""}>
          ${item.name}
          <span class="level-count">${levelTotals[item.id]}</span>
        </a>
      `;
    }).join("");
  }

  function renderCategoryNav() {
    const scoped = scopedPoints(state.level);
    const items = [
      { id: "all", name: "All categories", count: scoped.length },
      ...categories
        .map((category) => ({
          id: category.id,
          name: category.name,
          count: scoped.filter((point) => point.category === category.id).length
        }))
        .filter((category) => category.count > 0)
    ];

    els.categoryNav.innerHTML = items.map((item) => {
      const active = state.category === item.id;
      const href = browseHref(state.level, item.id);
      return `
        <a class="category-link${active ? " is-active" : ""}" href="${href}"${active ? ' aria-current="page"' : ""}>
          <span>${escapeHtml(item.name)}</span>
          <span class="category-count">${item.count}</span>
        </a>
      `;
    }).join("");
  }

  function pointMatchesQuery(point, query) {
    if (!query) return true;
    const category = categoryById.get(point.category);
    const searchable = [
      point.title,
      point.pattern,
      point.summary,
      point.detail,
      point.level,
      category ? category.name : "",
      ...point.examples.flatMap((example) => [example.zh, example.pinyin, example.en])
    ].join(" ").toLowerCase();
    return searchable.includes(query);
  }

  function getVisiblePoints() {
    const query = state.query.trim().toLowerCase();
    return points.filter((point) => {
      if (state.level !== "all" && point.level !== state.level) return false;
      if (state.category !== "all" && point.category !== state.category) return false;
      if (state.hideLearned && state.learned.has(point.id)) return false;
      return pointMatchesQuery(point, query);
    });
  }

  function renderList() {
    const visible = getVisiblePoints();
    const category = categoryById.get(state.category);

    if (category) {
      els.listHeading.textContent = category.name;
    } else if (state.level !== "all") {
      els.listHeading.textContent = `${state.level} points`;
    } else {
      els.listHeading.textContent = "All points";
    }

    els.resultCount.textContent = `${visible.length} ${plural(visible.length, "point")}`;
    els.emptyState.hidden = visible.length > 0;
    els.listLabels.hidden = visible.length === 0;
    els.pointList.hidden = visible.length === 0;

    els.pointList.innerHTML = visible.map((point) => {
      const pointCategory = categoryById.get(point.category);
      const position = pointPositionById.get(point.id) || 0;
      const isLearned = state.learned.has(point.id);
      return `
        <li>
          <a class="point-row${isLearned ? " is-learned" : ""}" href="${pointHref(point.id)}">
            <span class="point-index">${String(position).padStart(2, "0")}</span>
            <span class="point-main">
              <span class="point-title">${escapeHtml(point.title)}</span>
              <span class="point-category">${point.level} · ${escapeHtml(pointCategory ? pointCategory.name : "")}</span>
            </span>
            <span class="point-pattern" lang="zh-Hans">${escapeHtml(point.pattern)}</span>
            <span class="point-status"${isLearned ? ' aria-label="Learned"' : ' aria-hidden="true"'}>${isLearned ? "✓" : ""}</span>
            <span class="point-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      `;
    }).join("");
  }

  function renderBrowse(level, categoryId) {
    state.level = level;
    state.category = categoryId;
    renderLevelNav();
    renderCategoryNav();
    renderList();

    const category = categoryById.get(categoryId);
    if (category) {
      const levelLabel = level === "all" ? "A1–B2" : level;
      document.title = `${category.name} (${levelLabel}) · Chinese Grammar`;
    } else if (level !== "all") {
      document.title = `${level} Grammar Points · Chinese Grammar`;
    } else {
      document.title = "A1–B2 Grammar Points · Chinese Grammar";
    }

    els.browseView.hidden = false;
    els.lessonView.hidden = true;
    els.reviewView.hidden = true;
    state.currentPointId = null;
  }

  function updateLearnButton(pointId) {
    const isLearned = state.learned.has(pointId);
    [els.learnButton, els.learnButtonBottom].forEach((button) => {
      button.classList.toggle("is-learned", isLearned);
      button.setAttribute("aria-pressed", String(isLearned));
      button.textContent = isLearned ? "✓ Learned" : "Mark as learned";
      button.title = isLearned
        ? "Click to mark this point as not learned"
        : "Mark this point as learned";
    });
  }

  function setPageLink(link, label, point) {
    if (!point) {
      link.hidden = true;
      link.removeAttribute("href");
      label.textContent = "";
      return;
    }

    link.hidden = false;
    link.href = pointHref(point.id);
    label.textContent = point.title;
  }

  function renderLesson(pointId) {
    const point = pointById.get(pointId);
    if (!point) return false;

    const category = categoryById.get(point.category);
    const index = points.findIndex((item) => item.id === point.id);

    state.currentPointId = point.id;

    els.breadcrumbLevel.href = browseHref(point.level, "all");
    els.breadcrumbLevel.textContent = point.level;
    els.breadcrumbCategory.href = browseHref(point.level, point.category);
    els.breadcrumbCategory.textContent = category ? category.name : "Category";
    els.lessonMeta.textContent = `Point ${index + 1} of ${points.length} · ${point.level} · ${category ? category.name : ""}`;
    els.lessonTitle.textContent = point.title;
    els.lessonPattern.textContent = point.pattern;
    els.lessonSummary.textContent = point.summary || "";
    els.lessonSummary.hidden = !point.summary;
    els.lessonDetail.textContent = point.detail || "";
    els.lessonDetail.hidden = !point.detail;
    els.lessonWiki.href = point.wiki;

    els.lessonExamples.innerHTML = point.examples.map((example, index) => {
      const supportId = `example-support-${index + 1}`;
      const hasSupport = Boolean(example.pinyin || example.en);
      const hanzi = `<span class="example-hanzi" lang="zh-Hans">${escapeHtml(example.zh)}</span>`;
      const support = hasSupport ? `
        <span class="example-support" id="${supportId}">
          ${example.pinyin ? `<span class="example-pinyin" lang="zh-Latn">${escapeHtml(example.pinyin)}</span>` : ""}
          ${example.en ? `<span class="example-translation">${escapeHtml(example.en)}</span>` : ""}
        </span>
        <span class="example-chevron" aria-hidden="true"></span>
      ` : "";

      if (!hasSupport) {
        return `<div class="example">${hanzi}</div>`;
      }

      return `
        <button class="example" type="button" aria-expanded="false" aria-controls="${supportId}">
          ${hanzi}
          ${support}
        </button>
      `;
    }).join("");

    setPageLink(els.prevPoint, els.prevPointTitle, points[index - 1]);
    setPageLink(els.nextPoint, els.nextPointTitle, points[index + 1]);
    updateLearnButton(point.id);

    document.title = `${point.title} · ${point.level} Grammar`;

    els.browseView.hidden = true;
    els.lessonView.hidden = false;
    els.reviewView.hidden = true;
    return true;
  }

  function updateReviewProgress() {
    const count = reviewState.reviewed;
    els.reviewProgress.textContent = `${count} ${plural(count, "example")} reviewed`;
  }

  function chooseReviewExample() {
    const learnedPoints = points.filter((point) => state.learned.has(point.id));
    if (!learnedPoints.length) return null;

    const allExamples = learnedPoints.flatMap((point) => point.examples.map((example, index) => ({
      point,
      example,
      index,
      key: `${point.id}:${index}`
    })));

    let available = allExamples.filter((candidate) => !reviewState.usedExamples.has(candidate.key));
    if (!available.length) {
      reviewState.usedExamples.clear();
      available = allExamples;
    }

    const differentPoint = available.filter((candidate) => candidate.point.id !== reviewState.lastPointId);
    const candidates = differentPoint.length ? differentPoint : available;
    const current = candidates[Math.floor(Math.random() * candidates.length)];

    reviewState.current = current;
    reviewState.lastPointId = current.point.id;
    reviewState.usedExamples.add(current.key);
    return current;
  }

  function renderReviewExample() {
    const current = reviewState.current;
    if (!current) return;

    els.reviewCard.hidden = false;
    els.reviewEmpty.hidden = true;
    els.reviewInstruction.textContent = "Read the sentence. Do you understand it?";
    els.reviewHanzi.textContent = current.example.zh;
    els.reviewActions.hidden = false;
    els.reviewResult.hidden = true;
    els.reviewRefresher.hidden = true;
    els.knowButton.disabled = false;
    els.notKnowButton.disabled = false;
    els.nextReviewButton.textContent = "Next example";
  }

  function renderReview() {
    els.browseView.hidden = true;
    els.lessonView.hidden = true;
    els.reviewView.hidden = false;
    document.title = "Review learned · Chinese Grammar";

    if (!state.learned.size) {
      reviewState.current = null;
      reviewState.reviewed = 0;
      reviewState.usedExamples.clear();
      reviewState.lastPointId = null;
      els.reviewCard.hidden = true;
      els.reviewEmpty.hidden = false;
      updateReviewProgress();
      return;
    }

    els.reviewEmpty.hidden = true;

    if (!reviewState.current || !state.learned.has(reviewState.current.point.id)) {
      chooseReviewExample();
    }

    renderReviewExample();
  }

  function gradeReview(understood) {
    const current = reviewState.current;
    if (!current || !els.reviewResult.hidden) return;

    const { point, example, index } = current;
    const category = categoryById.get(point.category);

    reviewState.reviewed += 1;
    updateReviewProgress();

    els.reviewActions.hidden = true;
    els.reviewResult.hidden = false;
    els.reviewInstruction.textContent = understood
      ? "Here's how that sentence reads."
      : "Let's review this grammar point.";
    els.reviewPointLabel.textContent = `${point.level} · ${category ? category.name : ""}`;
    els.reviewPointTitle.textContent = point.title;
    els.reviewPinyin.textContent = example.pinyin || "";
    els.reviewPinyin.hidden = !example.pinyin;
    els.reviewTranslation.textContent = example.en || "";
    els.reviewTranslation.hidden = !example.en;
    els.reviewRefresher.hidden = understood;
    els.nextReviewButton.textContent = understood ? "Next example" : "Try another example";

    if (!understood) {
      els.reviewPattern.textContent = point.pattern;
      els.reviewSummary.textContent = point.summary || "";
      els.reviewWiki.href = point.wiki;

      const otherExamples = point.examples
        .map((item, itemIndex) => ({ item, itemIndex }))
        .filter(({ itemIndex }) => itemIndex !== index);
      const extra = otherExamples.length
        ? otherExamples[Math.floor(Math.random() * otherExamples.length)].item
        : null;

      if (extra) {
        els.reviewExtra.hidden = false;
        els.reviewExtraHanzi.textContent = extra.zh;
        els.reviewExtraPinyin.textContent = extra.pinyin || "";
        els.reviewExtraPinyin.hidden = !extra.pinyin;
        els.reviewExtraTranslation.textContent = extra.en || "";
        els.reviewExtraTranslation.hidden = !extra.en;
      } else {
        els.reviewExtra.hidden = true;
      }
    }
  }

  function nextReviewExample() {
    if (!state.learned.size) {
      renderReview();
      return;
    }
    chooseReviewExample();
    renderReviewExample();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#\/?/, "").replace(/\/+$/, "");

    if (raw === "review") {
      return { view: "review" };
    }

    if (raw.startsWith("point/")) {
      return {
        view: "lesson",
        pointId: decodeURIComponent(raw.slice("point/".length))
      };
    }

    let level = "all";
    let rest = raw;

    const levelMatch = raw.match(/^level\/(a1|a2|b1|b2)(?:\/(.*))?$/);
    if (levelMatch) {
      level = levelMatch[1].toUpperCase();
      rest = levelMatch[2] || "";
    }

    let categoryId = "all";
    if (rest.startsWith("category/")) {
      categoryId = decodeURIComponent(rest.slice("category/".length));
    }

    return { view: "browse", level, categoryId };
  }

  function renderRoute() {
    const route = parseRoute();

    if (route.view === "review") {
      renderReview();
    } else if (route.view === "lesson") {
      if (pointById.has(route.pointId)) {
        renderLesson(route.pointId);
      } else {
        window.history.replaceState(null, "", "#/");
        renderBrowse("all", "all");
      }
    } else {
      let level = LEVELS.includes(route.level) ? route.level : "all";
      let categoryId = categoryById.has(route.categoryId) ? route.categoryId : "all";

      if (categoryId !== "all" && !categoryHasPoints(level, categoryId)) {
        categoryId = "all";
      }

      const canonicalHash = browseHref(level, categoryId);
      if (window.location.hash !== canonicalHash) {
        window.history.replaceState(null, "", canonicalHash);
      }

      renderBrowse(level, categoryId);
    }

    updateHeader();
    window.scrollTo(0, 0);
  }

  function clearSearch() {
    state.query = "";
    els.searchInput.value = "";
    els.clearSearchButton.hidden = true;
    renderList();
    els.searchInput.focus();
  }

  function clearFilters() {
    state.query = "";
    state.hideLearned = false;
    els.searchInput.value = "";
    els.clearSearchButton.hidden = true;
    els.hideLearned.checked = false;

    if (window.location.hash !== "#/" && window.location.hash !== "") {
      window.location.hash = "#/";
    } else {
      renderBrowse("all", "all");
    }
  }

  function bindEvents() {
    els.searchInput.addEventListener("input", () => {
      state.query = els.searchInput.value;
      els.clearSearchButton.hidden = !state.query;
      renderList();
    });

    els.searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && state.query) {
        event.preventDefault();
        clearSearch();
      }
    });

    els.clearSearchButton.addEventListener("click", clearSearch);
    els.clearFiltersButton.addEventListener("click", clearFilters);

    els.hideLearned.addEventListener("change", () => {
      state.hideLearned = els.hideLearned.checked;
      renderList();
    });

    els.resetProgressButton.addEventListener("click", () => {
      if (state.learned.size === 0) return;
      const confirmed = window.confirm("Reset all learned points?");
      if (!confirmed) return;

      state.learned.clear();
      reviewState.current = null;
      reviewState.reviewed = 0;
      reviewState.usedExamples.clear();
      reviewState.lastPointId = null;
      saveLearned();
      updateHeader();
      updateReviewProgress();
      renderList();
    });

    [els.learnButton, els.learnButtonBottom].forEach((button) => {
      button.addEventListener("click", () => {
        if (!state.currentPointId) return;

        if (state.learned.has(state.currentPointId)) {
          state.learned.delete(state.currentPointId);
        } else {
          state.learned.add(state.currentPointId);
        }

        saveLearned();
        updateHeader();
        updateLearnButton(state.currentPointId);
      });
    });

    els.lessonExamples.addEventListener("click", (event) => {
      const example = event.target.closest("button.example");
      if (!example) return;

      const expanded = !example.classList.contains("is-revealed");
      example.classList.toggle("is-revealed", expanded);
      example.setAttribute("aria-expanded", String(expanded));
    });

    els.reviewButton.addEventListener("click", () => {
      window.location.hash = "#/review";
    });

    els.knowButton.addEventListener("click", () => gradeReview(true));
    els.notKnowButton.addEventListener("click", () => gradeReview(false));
    els.nextReviewButton.addEventListener("click", nextReviewExample);

    window.addEventListener("hashchange", renderRoute);

    document.addEventListener("keydown", (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target;
      const isTyping = target instanceof Element && target.matches("input, textarea, select");

      if (event.key === "/" && !isTyping && !els.browseView.hidden) {
        event.preventDefault();
        els.searchInput.focus();
      }
    });
  }

  function initialize() {
    bindEvents();
    updateHeader();

    const hash = window.location.hash;
    const validHash = !hash
      || hash === "#/"
      || hash === "#/review"
      || /^#\/?point\//.test(hash)
      || /^#\/?category\//.test(hash)
      || /^#\/?level\/(a1|a2|b1|b2)(\/category\/[^/]+)?\/?$/i.test(hash);

    if (!hash || !validHash) {
      window.history.replaceState(null, "", "#/");
    }

    renderRoute();
  }

  initialize();
})();
