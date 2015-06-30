Formal.js
=====

Validate your forms the classier way, using CSS classes and data attributes.

![Formal.js](http://media.giphy.com/media/AeK5hedXN0cAE/giphy.gif "Formal.js")

Why?
---------

Too many validation libraries require you to write lots of Javascript. Validating a form element should be as simple as adding a CSS class.

```html
<form action="/">
  <input type="text" class="validate-number" />
  <input type="text" class="validate-length" data-min-length="5" />
  <input type="submit" value="Submit Me If You Can!" />
</form>
```

Behavior
---------

The form only submits if all fields validate. If the form doesn't validate, three things happen (and three things only!):

1. Every invalid field gets the `invalid` class. You choose how to style it.
2. The cursor gets focused on the first invalid field in the form.
3. Once you start typing in an invalid field, the `invalid` class is removed.

Simple Setup
--------------------
```javascript
$(function() {
  Formal.initialize();
})
```

Validator Types
------------------------------

Covers the most common validations.

```html
<input type="text" class="validate-presence" />
<input type="text" class="validate-email" />
<input type="text" class="validate-number" />
<input type="text" class="validate-phone-number" />
<input type="text" class="validate-length" data-min-length="5" />
<input type="text" class="validate-length" data-max-length="10" />
```

You can use also use multiple validators together:

```html
<input type="text" class="validate-number validate-length" data-min-length="5">
```

AJAX? No problem.
-----------------

Just bind to the `validated` event.

```javascript
$('#form-with-ajax').on('validated', function() {
  $.ajax(function() {
    // do some crazy ajax
  })
)
```

This library works by capturing the `submit` event, so don't bind to that.


No validations?
--------------------------------------

The form will submit as usual if no validators are attached.

```html
<form action="/">
  <input type="text" />
  <input type="submit" value="Submit Whatever You Want!" />
</form>
```

You'll still want to bind to the `validated` event if you're using AJAX.

Skip Validations
-----------------------------------

Bypass all validations by adding the `skip-validations` class.

```html
<form class="skip-validations">
  <input type="text" class="validate-email" />
  <input type="submit" class="I'm feeling lucky!" />
</form>
```

This is handy if you decide to add the `skip-validations` class after the page has loaded.


Want to contribute?
---------------------

I'd love to hear your ideas. Current wishlist:

- Add Jasmine tests.
- Add support for error messages.
- Add support for select dropdown.
- Add support for radio buttons.
- Add support for custom validators.

License
-------------

MIT


Authors
-------------
- Tal Safran
