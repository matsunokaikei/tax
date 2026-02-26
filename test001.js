(function () {
  function bindOne(box) {
    if (box.dataset.bound) return; // 二重バインド防止
    const input = box.querySelector(".tax2x-a");
    const out = box.querySelector(".tax2x-result");
    if (!input || !out) return;

    function calc() {
      const a = Number(input.value);
      out.textContent = Number.isFinite(a) ? `A×2 = ${a * 2}` : "";
    }

    input.addEventListener("input", calc);
    calc();
    box.dataset.bound = "1";
  }

  function scan() {
    document.querySelectorAll(".tax2x").forEach(bindOne);
  }

  // FC2は描画順が前後することがあるので複数回スキャン
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
  } else {
    scan();
  }
  setTimeout(scan, 300);
  setTimeout(scan, 1500);
})();
