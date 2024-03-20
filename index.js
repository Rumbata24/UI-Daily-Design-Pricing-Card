function toggleBorder(checkbox) {
  var boxes = document.querySelectorAll(".box");
  var checkedBox = checkbox.closest(".box");

  // Remove border from all boxes
  boxes.forEach(function (box) {
    box.style.borderColor = "#e9ebf8";
  });

  // Uncheck other checkboxes
  var checkboxes = document.querySelectorAll(
    '.checkbox input[type="checkbox"]'
  );
  checkboxes.forEach(function (cb) {
    if (cb !== checkbox) {
      cb.checked = false;
    }
  });

  // Apply border to checked box
  if (checkbox.checked) {
    checkedBox.style.borderColor = "#2f42ee";
  }
}
