function run() {
  let htmlcode = document.getElementById("htmlcode").value;
  let csscode = document.getElementById("csscode").value;
  let javascriptcode = document.getElementById("javascriptcode").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    htmlcode + "<style>" + csscode + "<style>";
  output.contentWindow.eval(javascriptcode);
}
q