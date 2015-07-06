QUnit.module('Event test');

QUnit.test('pause event triggered', function(assert) {
  assert.expect(1);

  var $camera = $('<div></div>');

  $camera.networkCamera({
    url: './test.png'
  });

  $camera.on('pause', function() {
    assert.ok(true, 'Pause event was triggered.');
  });

  $camera.networkCamera('pause');
});

QUnit.test('stream event triggered', function(assert) {
  assert.expect(1);

  var $camera = $('<div></div>');

  $camera.networkCamera({
    url: './test.png'
  });

  $camera.on('stream', function() {
    assert.ok(true, 'Stream event was triggered.');
  });

  $camera.networkCamera('stream');
});

QUnit.module('Validation test');

QUnit.test('no image url provided', function(assert) {

  assert.throws(
    function() {
      $('<div></div>').networkCamera()
    },
    Error('The url parameter is required to initialize camera feed.'),
    'Instance of error raised matches the Error instance.'
  );
});
