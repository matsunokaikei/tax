(function(){
  function init(){
    const input = document.getElementById("a");
    const out = document.getElementById("result");
    if(!input || !out) return;

    function calc(){
      const a = Number(input.value);
      out.textContent = Number.isFinite(a) ? `A×2 = ${a*2}` : "";
    }

    input.addEventListener("input", calc);
    calc();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
