# SETUP

pakage.json

```bash
yarn init -y
```

parcel 및 react 설치

```bash
yarn add -D parcel-bundler
yarn add react react-router
```

index.html

```bash
mkdir public
touch index.html
```

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React, Parcel</title>
  </head>

  <body>
    <div id="root"></div>
    <!-- src 폴더에 index.tsx을 만들어 줍니다 -->
    <script src="../src/index.tsx" type="text/javascript"></script>
  </body>
</html>
```

index.tsc

```bash
mkdir src
touch index.tsx
```

```js
// src/index.tsc
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<div>Parcel with React!</div>, document.getElementById('root'));
```

```json
// package.json
...
"scripts": {
    "dev": "parcel ./public/index.html",
    "build": "parcel build ./public/index.html"
},
```

dev 실행

```
yarn dev
```

# quilljs

# loadable components
