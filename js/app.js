/* =========================================================
   ЛОГИКА КОНФИГУРАТОРА
   ========================================================= */

   const state = {
    buildClass: null,
    stepIndex: 0,
    selected: {}
};

const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatPrice(n) {
    return n.toLocaleString("ru-RU") + " ₽";
}

function showScreen(id) {
    $$(".screen").forEach(s => s.classList.remove("screen--active"));
    $("#" + id).classList.add("screen--active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startBuild(buildClass) {
    state.buildClass = buildClass;
    state.stepIndex = 0;
    state.selected = {};
    $("#summary-class").textContent = "Класс: " + CLASS_NAMES[buildClass];
    showScreen("screen-config");
    renderStep();
}

/* ---------- ПРОВЕРКА СОВМЕСТИМОСТИ ---------- */
function checkCompatibility(stepKey, item) {
    const sel = state.selected;

    if (stepKey === "motherboard" && sel.cpu) {
        if (sel.cpu.compat.socket !== item.compat.socket) {
            return { ok: false, reason: "Сокет не совпадает с процессором (" + sel.cpu.compat.socket + ")" };
        }
    }

    if (stepKey === "ram" && sel.motherboard) {
        if (sel.motherboard.compat.memory !== item.compat.memory) {
            return { ok: false, reason: "Тип памяти не совпадает с платой (" + sel.motherboard.compat.memory + ")" };
        }
    }

    if (stepKey === "case" && sel.motherboard) {
        const mbf = sel.motherboard.compat.formFactor;
        if (!item.compat.formFactor.includes(mbf)) {
            return { ok: false, reason: "Корпус не поддерживает форм-фактор " + mbf };
        }
    }

    if (stepKey === "case" && sel.gpu) {
        if (sel.gpu.compat.length > item.compat.maxGpuLength) {
            return { ok: false, reason: "Видеокарта длиннее, чем вмещает корпус" };
        }
    }

    if (stepKey === "psu") {
        const cpuTdp = sel.cpu ? parseInt((sel.cpu.specs.find(s => s.includes("TDP")) || "0").match(/\d+/)?.[0] || 0) : 0;
        const gpuTdp = sel.gpu ? sel.gpu.compat.power : 0;
        const recommended = cpuTdp + gpuTdp + 150;
        if (item.compat.wattage < recommended) {
            return { ok: false, reason: "Мощности мало. Рекомендуется ≥ " + recommended + " Вт" };
        }
    }

    if (stepKey === "cooling" && sel.cpu) {
        const cpuTdp = parseInt((sel.cpu.specs.find(s => s.includes("TDP")) || "0").match(/\d+/)?.[0] || 0);
        if (item.compat.tdp < cpuTdp) {
            return { ok: false, reason: "Кулер не справится с TDP процессора (" + cpuTdp + " Вт)" };
        }
    }

    return { ok: true };
}

/* ---------- РЕНДЕР ШАГА ---------- */
function renderStep() {
    const step = STEPS[state.stepIndex];
    const allItems = COMPONENTS[step.key] || [];
    const items = allItems.filter(it => it.classes.includes(state.buildClass));

    $("#step-counter").textContent = "Шаг " + (state.stepIndex + 1) + " / " + STEPS.length;
    $("#step-title").textContent = step.title;
    $("#step-hint").textContent = step.hint;
    $("#btn-back").disabled = state.stepIndex === 0;

    const cont = $("#cards-container");
    cont.innerHTML = "";

    items.forEach(item => {
        const compat = checkCompatibility(step.key, item);
        const card = document.createElement("div");
        card.className = "card";
        if (state.selected[step.key] && state.selected[step.key].id === item.id) {
            card.classList.add("card--selected");
        }

        card.innerHTML = `
            <div class="card__img-wrap">
                <img class="card__img" src="${item.img}" alt="${item.name}"
                     onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
            </div>
            <div class="card__name">${item.name}</div>
            <div class="card__price">${formatPrice(item.price)}</div>
            <ul class="card__specs">
                ${item.specs.map(s => `<li>${s}</li>`).join("")}
            </ul>
            ${!compat.ok ? `<div class="card__warn">⚠ ${compat.reason}</div>` : ""}
        `;

        if (compat.ok) {
            card.addEventListener("click", () => selectItem(step.key, item));
        } else {
            card.style.opacity = "0.5";
            card.style.cursor = "not-allowed";
        }

        cont.appendChild(card);
    });
}

function selectItem(stepKey, item) {
    state.selected[stepKey] = item;
    renderSummary();

    if (state.stepIndex < STEPS.length - 1) {
        state.stepIndex++;
        renderStep();
    } else {
        renderResult();
        showScreen("screen-result");
    }
}

function renderSummary() {
    const list = $("#summary-list");
    const selected = state.selected;

    if (Object.keys(selected).length === 0) {
        list.innerHTML = `<li class="summary__empty">Комплектующие не выбраны</li>`;
        $("#summary-total").textContent = "0 ₽";
        return;
    }

    list.innerHTML = "";
    let total = 0;

    STEPS.forEach(step => {
        const item = selected[step.key];
        if (!item) return;
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `<span>${step.title}</span><span>${formatPrice(item.price)}</span>`;
        list.appendChild(li);
    });

    $("#summary-total").textContent = formatPrice(total);
}

/* ---------- ИТОГОВЫЙ ЭКРАН ---------- */
function renderResult() {
    $("#result-class").textContent = "Класс сборки: " + CLASS_NAMES[state.buildClass];

    const tbody = $("#result-body");
    tbody.innerHTML = "";
    let total = 0;
    let n = 1;

    STEPS.forEach(step => {
        const item = state.selected[step.key];
        if (!item) return;
        total += item.price;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${n++}</td>
            <td>${step.title}</td>
            <td>
                <div class="result-table__cell">
                    <img class="result-table__img" src="${item.img}" alt="${item.name}"
                         onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
                    <span>${item.name}</span>
                </div>
            </td>
            <td>${item.specs.join("; ")}</td>
            <td>${formatPrice(item.price)}</td>
        `;
        tbody.appendChild(tr);
    });

    $("#result-total").textContent = formatPrice(total);
}

function restart() {
    state.buildClass = null;
    state.stepIndex = 0;
    state.selected = {};
    $("#summary-class").textContent = "Класс: —";
    renderSummary();
    showScreen("screen-start");
}

document.addEventListener("DOMContentLoaded", () => {
    $$(".btn--class").forEach(btn => {
        btn.addEventListener("click", () => startBuild(btn.dataset.class));
    });

    $("#btn-back").addEventListener("click", () => {
        if (state.stepIndex > 0) {
            state.stepIndex--;
            renderStep();
        }
    });

    $("#btn-restart").addEventListener("click", restart);
    $("#btn-restart-2").addEventListener("click", restart);
    $("#btn-print").addEventListener("click", () => window.print());
});
