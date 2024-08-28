$(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 4,
            //nav: true
          },
          600: {
            items: 6,
            //nav: false
          },
          1000: {
            items: 8,
            //nav: true,
            loop: false,
            margin: 20
          }
        }
      })
    })
    // Wait for the document to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        // Get all the image elements with the class 'img-fluid'
        const images = document.querySelectorAll(".img-fluid");

        // Loop through each image
        images.forEach(function(image) {
            // Add a mouseover event listener
            image.addEventListener("mouseover", function() {
                // Scale the image when hovered
                image.style.transform = "scale(1.1)";
                image.style.transition = "transform 0.5s ease"; // Add transition effect
            });

            // Add a mouseout event listener
            image.addEventListener("mouseout", function() {
                // Reset the image scale when mouse leaves
                image.style.transform = "scale(1)";
                image.style.transition = "transform 0.5s ease"; // Add transition effect
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
      const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
      const cartItemsContainer = document.getElementById("cart-items");
      const totalQuantity = document.getElementById("total-quantity");
      const totalPrice = document.getElementById("total-price");
  
      let cart = [];
  
      // Thêm sự kiện cho nút "Thêm vào giỏ hàng"
      addToCartButtons.forEach(function(button) {
          button.addEventListener("click", function() {
              const product = button.parentElement;
              const productName = product.querySelector("h3").innerText;
              const productPrice = product.querySelector("p").innerText;
              
              addToCart(productName, productPrice);
              displayCart();
          });
      });
  
      // Hàm thêm sản phẩm vào giỏ hàng
      function addToCart(name, price) {
          cart.push({ name, price });
      }
  
      // Hàm hiển thị giỏ hàng
  //     function displayCart() {
  //         cartItemsContainer.innerHTML = "";
  //         let total = 0;
  //         cart.forEach(function(item) {
  //             const li = document.createElement("li");
  //             li.innerText = `${item.name} - ${item.price}`;
  //             cartItemsContainer.appendChild(li);
  
  //             total += parseFloat(item.price.replace("$", ""));
  //         });
  
  //         totalQuantity.innerText = cart.length;
  //         totalPrice.innerText = "$" + total.toFixed(2);
  //     }
   });
  //  sự kiện giỏ hàng
  // Định vị nút "Thêm vào giỏ hàng"
const addToCartBtn = document.querySelector('.add-to-cart-btn');

// Lắng nghe sự kiện khi người dùng nhấp vào nút "Thêm vào giỏ hàng"
addToCartBtn.addEventListener('click', function() {
    // Lấy số lượng sản phẩm hiện tại trong giỏ hàng
    let cartItemsCount = parseInt(document.getElementById('cart-items-count').textContent);

    // Tăng số lượng sản phẩm trong giỏ hàng lên 1
    cartItemsCount++;

    // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện
    document.getElementById('cart-items-count').textContent = cartItemsCount;
});


  

