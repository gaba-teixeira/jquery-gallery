$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown(150);
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp(150);
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaImagem = $("#url-nova-imagem").val();
    const novoItem = $("<li style='display: none'></li>");
    $(`<img
          src="${novaImagem}"
          width="300"
        />`).appendTo(novoItem);
    $(`
      <div class="overlink-style">
        <a
          href="${novaImagem}"
          target="_blank"
          title="Ver a imagem em tamanho real"
        >
          Ver a imagem em tamanho real
        </a>
      </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(200);
    $("#url-nova-imagem").val("");
  });
});
