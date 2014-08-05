module.exports = function() {
  // If you want options, they should be passed in here.
  // https://github.com/markdalgleish/bespoke.js#plugins-with-options

  return function(deck) {
    // Use the 'deck' instance to interact with the presentation.
    // https://github.com/markdalgleish/bespoke.js#deck-instances
    document.addEventListener('keydown', function(e) {
      if (e.which === 57) { deck.next(); }
    });

  };
};
