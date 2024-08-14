このリポジトリは Zenn の記事 **[「📄 export は名前付きエクスポートでやりましょう」](https://zenn.dev/cocomina/articles/recommended-export)** と連動したリポジトリです。

# named export と default export の違いについて

### export

```js
/** named export */
export function Hoge() {}

/** default export */
export default function Hoge() {}
```

### import

上記の export された **Hoge** コンポーネントを import する時

```js
/** named export */
import { Hoge } from "./Hoge";

/** default export */
import Hoge from "./Hoge";

// または
import HogeDef from "./Hoge"; // 名前を変更できる;
```

**default export**されていると import 先でコンポーネント名が変更できてしまうのは混乱を招きやすい。

下記のように**複数のコンポーネントをまとめて index.tsx で import & export を行う**場合を考えると**named export**を使用している方が安心だと思われる。

```
components
  ├ Fuga.tsx
  ├ Hoge.tsx
  ├ index.tsx // Hoge, Fuga, Piyoをまとめてexportする
  └ Piyo.tsx
```

上記をサンプルとして"named export"と"default export"を使用した場合を比較してます。

### named export の場合

```js
/**　index.tsx　*/
export { Fuga } from "./Fuga";
export { Hoge } from "./Hoge";
export { Piyo } from "./Piyo";
```

### default export の場合

`as` を使用してデフォルトエクスポートに別名をつけています。
別名なので命名も自由にできます。

```js
/**　index.tsx　*/
export { default as Fuga } from "./Fuga";
export { default as Hoge } from "./Hoge";
export { default as Piyo } from "./Piyo";
```
