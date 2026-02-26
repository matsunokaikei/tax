(function () {
  function start() {
    const input = document.querySelector(".tax2x-a");
    const out = document.querySelector(".tax2x-result");
    if (!input || !out) return false;

    function calc() {
      const a = Number(input.value);
      out.textContent = Number.isFinite(a) ? `A×2 = ${a * 2}` : "";
    }

    input.addEventListener("input", calc);
    calc();
    return true;
  }

  // FC2対策：少し待ちながら複数回トライ
  let n = 0;
  const timer = setInterval(() => {
    n++;
    if (start() || n >= 40) clearInterval(timer); // 最大約10秒
  }, 250);
})();
