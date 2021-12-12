import React from 'react';
import './style.css';

const currentURL = window.location.pathname

if (currentURL == '/petyourself-reactjs/shop4') {
    document.addEventListener('DOMContentLoaded', ready)
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Terima kasih sudah membeli')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Item sudah ditambahkan')
            return
        }
    }
    var cartRowContents = `
        <span>Harga</span>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span>Jumlah</span>
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-danger" type="button">Hapus</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rp', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rp' + total
}

class Isi_shop4 extends React.Component {
  render() {
      return (
        <div id='isi_ac'>
		<br></br>
		<table>
			<tr>
				<td width="40%" align="center">
					<div id="produk">
						<table>
							<tr><td colspan="2" class="shop-item-title" id="hidden">Whiskas</td></tr>
							<tr>
								<td width="30%"><img src={require("./gambar/whiskas3.png").default}></img></td>
								<td rowspan="3" width="70%"><img class="shop-item-image" src={require("./gambar/whiskas2.png").default}></img></td>
							</tr>
							<tr><td><img src={require("./gambar/whiskas3.png").default}></img></td></tr>
							<tr><td><img src={require("./gambar/whiskas3.png").default}></img></td></tr>
						</table>
						<span class="shop-item-price">Rp 1500000</span>
						<button type="button" class="shop-item-button">Checkout</button>
					</div>
				</td>
				<td width="3%"></td>
				<td rowspan="2" width="40%">
					<div id="deskripsi">
						<br></br>
						<h2>Deskripsi Barang</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit sem non dolor dapibus faucibus. Fusce dapibus sollicitudin viverra. Pellentesque porta enim purus, ac rutrum lectus pharetra nec. Maecenas vel lectus et massa ornare sollicitudin. Quisque ac tortor at mi fringilla molestie et et lorem. Integer in urna scelerisque, sodales diam nec, tempus magna. Praesent lobortis risus nisi, et pretium mi pretium quis. Praesent in leo nec metus ultricies varius. Proin fringilla nisi vitae augue condimentum, nec gravida est malesuada. Phasellus iaculis lobortis fermentum.</p>
						<p>Curabitur in condimentum augue, vel maximus diam. Praesent ultricies, diam a cursus hendrerit, lectus libero egestas augue, ac scelerisque nulla nulla quis enim. Integer nec placerat sapien. Suspendisse potenti. Nunc volutpat vel nunc et ultricies. Phasellus id leo sit amet mauris porta vulputate. Etiam consequat risus non ipsum sodales dictum convallis at est.</p>
						<h2>Ukuran dan Rasa</h2>
						<table>
							<tr>
								<td><button>Lorem ipsum dolor</button></td>
								<td><button>Lorem ipsum dolor</button></td>
								<td><button>Lorem ipsum dolor</button></td>
							</tr>
							<tr>
								<td><button>Lorem ipsum dolor</button></td>
								<td><button>Lorem ipsum dolor</button></td>
								<td><button>Lorem ipsum dolor</button></td>
							</tr>
							<tr>
								<td colspan="3">
									<section class="container content-section">
										<div class="cart-items">
										</div>
										<div class="cart-total">
											<strong class="cart-total-title">Total</strong>
											<span class="cart-total-price"> Rp0</span>
										</div>
									</section>
								</td>
							</tr>
						</table>
					</div>
				</td>
			</tr>
			<tr><td><button class="btn-purchase" type="button">Beli Sekarang</button></td></tr>
		</table>
		<br></br>
		<p align="left">Kamu mungkin juga suka</p>
		<div id='rekomen'>
			<table>
				<tr>
					<td><img src={require("./gambar/whiskas.png").default}></img></td>
					<td><img src={require("./gambar/whiskas.png").default}></img></td>
					<td><img src={require("./gambar/whiskas.png").default}></img></td>
					<td><img src={require("./gambar/whiskas.png").default}></img></td>
					<td><img src={require("./gambar/whiskas.png").default}></img></td>
				</tr>
			</table>	
		</div>
		<br></br>
		</div>
      );
  }
}

export default Isi_shop4;