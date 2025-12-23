function splitString() {
  const sentence = document.getElementById("sentence").value;
  const delimiter = document.getElementById("delimiter").value;
  const outputArea = document.getElementById("output");
  const firstTen = document.getElementById("firstTen");

  if (delimiter == "") {
    alert("Please enter a delimiter!");
    return;
  }

  const words = sentence.split(delimiter); 

  outputArea.value = words.join("\n");

  firstTen.value = sentence.substring(0, 10);
}
