function truncate(str, maxlength) {
  // ваш код...
  if (str.length > 20) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

truncate("Всем привет!", 20);
