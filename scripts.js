document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.tag');
  tags.forEach((tag, i) => {
    const index = (i + 1) % 3;
    tag.classList.remove('tag-style-1', 'tag-style-2', 'tag-style-3');
    if (index === 1) tag.classList.add('tag-style-1');
    else if (index === 2) tag.classList.add('tag-style-2');
    else tag.classList.add('tag-style-3');
});
  const reg_button = document.querySelectorAll('.reg_button');
  reg_button.forEach((reg_button, i) => {
    const index = (i + 1) % 3;
    reg_button.classList.remove('button-style-1', 'button-style-2', 'button-style-3');
    if (index === 1) reg_button.classList.add('button-style-1');
    else if (index === 2) reg_button.classList.add('button-style-2');
    else reg_button.classList.add('button-style-3');
});
});
