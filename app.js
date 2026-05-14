function getDynamicDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const dateString = tomorrow.toLocaleDateString('es-MX', options);
  return dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

document.addEventListener('DOMContentLoaded', function() {
  const dynamicDateElement = document.getElementById('dynamicDate');
  if (dynamicDateElement) {
    dynamicDateElement.textContent = getDynamicDate();
  }
});
