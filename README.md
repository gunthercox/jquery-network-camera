# JQuery Network Camera

[![npm version](https://badge.fury.io/js/jquery-network-camera.svg)](https://www.npmjs.com/package/jquery-network-camera)

This is a jQuery plugin that makes it possible to stream the feed from an open network camera onto an element on a web page. This plugin handles the process of loading the image in the background to prevent breaks and flickering from appearing in the output stream. The output of the video stream will be applied to an html canvas which will automatically change size to fill the selected element.

### Options

| Name | type | default | description |
|------|------|---------|-------------|
| url  | string | null | The url path to the streaming webcam image. |
| streaming | boolean | true | If the webcam image should be streamed live. If false, only an single image will be rendered. |

### Methods

#### `.networkCamera(options)`

Activates your content as a camera feed. Accepts an optional options `object`.

```javascript
$('#myCamera').networkCamera({
    'url': "http://192.168.1.12/image.jpg"
});
```

#### `.networkCamera('pause')`

Stops the process of refreshing the current image stream.

```javascript
$('#myCamera').networkCamera('pause');
```

#### `.networkCamera('stream')`

Starts the process of refreshing the current image stream.

```javascript
$('#myCamera').networkCamera('stream');
```

#### `.networkCamera('toggle')`

Toggles the state of the camera stream on or off.

```javascript
$('#myCamera').networkCamera('toggle');
```

### Events
|  Event Type  |  Description  |
|--------------|---------------|
|     pause    | Event triggered once the camera stream is paused. |
|    stream    | Event triggered once the camera stream is started. |

```javascript
$('#myCamera').on('pause', function () {
  // do something...
});
```
