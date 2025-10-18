
document.addEventListener('DOMContentLoaded', function(){
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.dataset.full;
      modalTitle.textContent = img.alt || '';
      var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
      myModal.show();
    });
  });
});
