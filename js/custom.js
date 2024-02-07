// -------------------- MULTI-CURRENCY --------------------

// apply currency changes on HTML
function changeCurrency(fromProductPage){
  // set currencies
  old_currency = sessionStorage.getItem('store_currency');
  new_currency = $.trim(sessionStorage.getItem('global_currency'));

  // current currency on top-bar
  $('#current_currency').html('<i class="fas fa-dollar-sign"></i>' + new_currency + '<i class="fas fa-angle-down"></i>');


  if(!fromProductPage){
    // homepage product blocks
    $('.product-block__price_value').each(function(){
      item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
    });

    $('.product-block__price-old').each(function(){
      item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text('Antes ' + accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
    });
  }

  // homepage product modal
  $('.product-modal__price-current').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  $('.product-modal__price-old').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text('Antes ' + accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  // product page price
  $('.product-info__price-current').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  $('.product-info__price-old > span').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });


  // ----------- cart/review page START

  $('.cart-order__produdct-price_value').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  $('.cart-order__produdct-price-old').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  $('.cart-summary__totals-string.text-right').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  $('.cart-summary__product-price-value').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  // ----------- cart/review page END

  $('.success-content__product-price-value').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  $('.success-content__list-string.value').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  // ----------- client detail page START

  $('.customer-orders__block-info-value').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]})).append('&nbsp;');
  });

  $('.customer-orders__accordion-product-number.value').each(function(){
    item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
    $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
  });

  // ----------- client detail page END

  // estimate shipping list
  $('#estimates').find('dd').each(function(){
    if($(this).text() != 'Error') { // for Correios Brasil
      item_amount = accounting.unformat($(this).text(), i18n_decimal_mark);
      $(this).text(accounting.formatMoney(fx.convert(item_amount, {from: old_currency, to: new_currency}), {symbol: {'EUR' : '€', 'GBP': '₤'}[new_currency]}));
    }
  });
}

$(document).ready(function(){ if(typeof(open_exchange_rates_token) !== "undefined"){Jumpseller.multiCurrency({token: open_exchange_rates_token, callback: changeCurrency});} });
