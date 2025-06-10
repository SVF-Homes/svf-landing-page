function learnMore() {
  window.open("https://www.svfhomes.com");
}

<script>
function callNow() {
  const choice = prompt("Call which number?\n1. +91 9444892265\n2. +91 9876543210");

  if (choice === "1") {
    window.location.href = "tel:+919444892265";
  } else if (choice === "2") {
    window.location.href = "tel:+919876543210";
  } else {
    alert("Invalid choice. Please enter 1 or 2.");
  }
}
</script>