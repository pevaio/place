document.addEventListener("DOMContentLoaded", () => {
  const markdownInput = document.getElementById("markdown-input");
  const preview = document.getElementById("preview");

    function updatePreview() {
    const markdownText = markdownInput.value;
    const html = marked.parse(markdownText);

    marked.use({
      breaks: true,
    });

    preview.innerHTML = html;
  }

  markdownInput.addEventListener("input", updatePreview);

  updatePreview();
});
