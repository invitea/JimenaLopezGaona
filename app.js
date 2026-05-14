function getDynamicDate() {
  return 'Lunes 18 de Mayo';
}

document.addEventListener('DOMContentLoaded', function() {
  const dynamicDateElement = document.getElementById('dynamicDate');
  if (dynamicDateElement) {
    dynamicDateElement.textContent = getDynamicDate();
  }
});
