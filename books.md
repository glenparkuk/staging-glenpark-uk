---
layout: responsive
title: Books and CD&#39;s&hellip;
permalink: /books/
id: books
header_slider:
- quote: If nothing ever changed there'd be no butterflies
  credit: Glen Beaman
  img: bg4.jpg
  credit_class: quotecreditblack
- quote: Change always comes bearing gifts
  credit: Price Pritchett
  img: bg12.jpg
  credit_class: quotecreditblack
- quote: You translate everything–whether physical, mental or spiritual into muscular tension
  credit: FM Alexander
  img: bg13.jpg
  credit_class: quotecreditwhite
---

<main>
    <h1 class="runinheading">Books &amp; CD&#39;s&hellip;</h1>
    <br>
    {% if site.data.products.size > 1 %}
        {%- include products-list.html -%}
    {%- endif -%}
    <!-- <p>Buy multiple items and save on postage - <a href="#multiple-items">see below</a></p> -->
    <!-- .content-block 1 ends -->
    <a name="theartofchangingcd" id="theartofchangingcd"></a>
    <div class="clear"></div>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <div class="content-block">
            <!-- .content-block 3 ends -->
            <div class="clear"></div>
            <a id="multiple-items"></a>
            <br />
            <br />
            <hr>
            <p id="buyNow"><span class="boldsubtitle">Buy Now</span></p>
            <!-- <div style="float:left;">
      <p>Buy multiple items and save on postage.</p>
      </div> -->
            <div class="checkout">
                <span class="no-js no-js-error-message">*Sorry, javascript must be enabled to purchase a product.</span>
                <form action="#">
                    <fieldset class="items">
                        <table>
                            <thead>
                                <tr>
                                    <th class="first-table-header">Item</th>
                                    <th class="price-column">Price</th>
                                    <th class="quantity-column">Quantity</th>
                                    <th class="totals-column last-table-header">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="item">
                                    <td>The Art of Changing paperback</td>
                                    <td class="price-column">£12.50</td>
                                    <td class="quantity-column">
                                        <input type="number" min="0" value="0" placeholder="0" max="10" name="quantity-aoc-paperback" id="quantityAOCPaperback" required />
                                    </td>
                                    <td class="totals-column" id="totalAOCPaperback">£0.00</td>
                                </tr>
                                <tr class="item">
                                    <td>The Art of Changing - Audio CD</td>
                                    <td class="price-column">£10.00</td>
                                    <td class="quantity-column">
                                        <input type="number" min="0" value="0" placeholder="0" max="10" name="quantity-aoc-paperback" id="quantityAOCAudioCD" required />
                                    </td>
                                    <td class="totals-column" id="totalAOCAudioCD">£0.00</td>
                                </tr>
                                <tr class="item">
                                    <td>Peggy Williams Pamphlet</td>
                                    <td class="price-column">£2.50</td>
                                    <td class="quantity-column">
                                        <input type="number" min="0" value="0" placeholder="0" max="10" name="quantity-aoc-paperback" id="quantityPWPamphlet" required />
                                    </td>
                                    <td class="totals-column" id="totalPWPamphlet">£0.00</td>
                                </tr>
                                <tr class="sub-total">
                                    <td colspan="2" class="price-column">Subtotal</td>
                                    <td colspan="1" class="totals-column" id="totalSubTotal">£0.00</td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <span id="cartItemsInvalid" class="cart-error-message">*please add at least one item to the cart</span>
                                    </td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td colspan="4" class="shipping">
                                        <p>Please select your region to calculate postage and packaging.</p>
                                        <ul id="shippingOptions">
                                            <li>
                                                <input type="radio" id="shippingUnitedKingdon" name="shipping-region" value="1"><span>United Kingdom</span></li>
                                            <li>
                                                <input type="radio" id="shippingEurope" name="shipping-region" value="2"><span>Europe</span></li>
                                            <li>
                                                <input type="radio" id="shippingAmericaCanadaAsia" name="shipping-region" value="3"><span>America, South America, Canada and Asia</span></li>
                                            <li>
                                                <input type="radio" id="shippingWorld" name="shipping-region" value="4"><span>Rest of World</span></li>
                                        </ul>
                                        <span id="shippingTotalInvalid" class="shipping-error-message">*one shipping option must be selected</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="price-column">Postage &amp; Packaging</td>
                                    <td></td>
                                    <td colspan="1" class="totals-column" id="totalShippingTotal">£0.00</td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="price-column">Total</td>
                                    <td></td>
                                    <td colspan="1" class="totals-column" id="totalTotal">£0.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td colspan="1" class="totals-column">
                                        <div id="paynowButton" class="disabled"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <em style="float: right; text-align: right;font-size: 12px; margin-top: 10px;">You do not need a Paypal account<br>to use this safe checkout</em>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <span id="cartTotalInvalid" class="cart-error-message">*Sorry there has been an error. Please refresh your page or update your browser.</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>
                <p id="paymentSuccessful" class="disabled">Thank you for your purchase!</p>
                <!-- <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="3MKLVBT7VJ3XQ">
    <table>
    <tr><td><input type="hidden" name="on0" value="Options:"><p>Options:</p></td></tr><tr><td><select name="os0">
      <option value="Book & CD -">Book & CD - £22.50 GBP</option>
      <option value="Book & PW Pamphlet -">Book & PW Pamphlet - £15.00 GBP</option>
      <option value="CD & PW Pamphlet -">CD & PW Pamphlet - £12.50 GBP</option>
      <option value="Book, CD & PW Pamphlet -">Book, CD & PW Pamphlet - £25.00 GBP</option>
    </select> </td></tr>
    </table>
    <input type="hidden" name="currency_code" value="GBP">
    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
    </form>-->
            <!-- <div style="float:left;padding:10px 0 0 40px;">-->
            <div class="clear"></div>
            <p class="form-error-contact">Having trouble using this form? Please <a href="mailto:{{ site.email }}" title="Let us know">let us know</a>.</p>
            <hr>
            <div class="clear"></div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
    </div>
</main>