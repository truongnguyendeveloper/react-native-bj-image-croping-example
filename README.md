

# react-native-bj-image-croping-sample

## Only support iOS
## Getting started

`$ npm install`
`$ react-native run-ios`


# react-native-bj-image-croping

## Getting started

`$ npm install react-native-bj-image-croping --save`

### Mostly automatic installation

`$ react-native link react-native-bj-image-croping`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-bj-image-croping` and add `RNBJImageCroping.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNBJImageCroping.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<


## Usage
```javascript
import RNBJImageCroping from 'react-native-bj-image-croping';

// TODO: What to do with the module?
RNBJImageCroping;
```

## Option
```javascript
interface Options {
    type?: 'camera' | 'library';
    aspectRatio?: 'AspectRatioSquare'
    | 'AspectRatio3x2'
    | 'AspectRatio5x3'
    | 'AspectRatio4x3'
    | 'AspectRatio5x4'
    | 'AspectRatio7x5'
    | 'AspectRatio16x9';
    isCropping?: boolean; // Enable crop or no
}
```

## Crop the image with aspect ratio
```javascript
RNBJImageCroping.openImagePicker({
    type: 'library',
    aspectRatio: 'AspectRatio4x3',
    isCropping: true
}).then(image => {
    // TODO:
    // Image is saved in NSTemporaryDirectory!
    // image = {uri, width, height}  
}, error => console.log(error))
```