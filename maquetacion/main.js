const collapse = (idContent, idBtn) => {
    const contenido = document.getElementById(idContent);
    const btn = document.getElementById(idBtn);
    contenido.classList.toggle('cerrado');
    if (contenido.classList.contains('cerrado')) {
        btn.textContent = '+';
    }
    else {
        btn.textContent = '-';
    }
};
