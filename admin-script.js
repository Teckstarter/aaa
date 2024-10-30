document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращаем перезагрузку страницы

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').files[0];

    console.log("Название продукта:", productName);
    console.log("Описание продукта:", productDescription);
    console.log("Изображение продукта:", productImage);

    // Здесь можно реализовать логику сохранения данных, например, на сервер
    alert("Продукт добавлен!");

    // Очистка формы после отправки
    this.reset();
});
