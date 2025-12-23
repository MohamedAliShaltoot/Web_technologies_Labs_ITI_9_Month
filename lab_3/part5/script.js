function searchString() {
  const mainStr = document.getElementById("mainString").value;
  const subStr = document.getElementById("subString").value;
  const startIndex = parseInt(document.getElementById("startIndex").value);

  if (subStr === "") {
    alert("Please enter a substring to search for!");
    return;
  }

  const firstOcc = mainStr.indexOf(subStr);
  const lastOcc = mainStr.lastIndexOf(subStr);
  const firstFromIndex = mainStr.indexOf(subStr, startIndex);
  const lastBeforeIndex = mainStr.lastIndexOf(subStr, startIndex);

  document.getElementById("firstOcc").value = firstOcc;
  document.getElementById("lastOcc").value = lastOcc;
  document.getElementById("firstFromIndex").value = firstFromIndex;
  document.getElementById("lastBeforeIndex").value = lastBeforeIndex;
}
