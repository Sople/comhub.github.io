In JavaScript, collections are data structures that allow you to store and manage groups of related data. The primary collection types in JavaScript include:

## Arrays
- **Definition**: Ordered lists of values.
- **Methods**: `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, `forEach`, `find`, `indexOf`, `slice`, `splice`, etc.
- **Usage**:
  ```javascript
  let arr = [1, 2, 3];
  arr.push(4); // [1, 2, 3, 4]
  ```

## Sets
- **Definition**: Collections of unique values.
- **Methods**: `add`, `delete`, `has`, `clear`, `forEach`.
- **Usage**:
  ```javascript
  let set = new Set([1, 2, 3]);
  set.add(4); // Set {1, 2, 3, 4}
  ```

## Maps
- **Definition**: Collections of key-value pairs.
- **Methods**: `set`, `get`, `delete`, `has`, `clear`, `forEach`.
- **Usage**:
  ```javascript
  let map = new Map();
  map.set('key', 'value');
  console.log(map.get('key')); // 'value'
  ```

## WeakSets
- **Definition**: Collections of objects, where the objects are held weakly.
- **Methods**: `add`, `delete`, `has`.
- **Usage**:
  ```javascript
  let weakSet = new WeakSet();
  let obj = {};
  weakSet.add(obj);
  ```

## WeakMaps
- **Definition**: Collections of key-value pairs where keys are objects and are held weakly.
- **Methods**: `set`, `get`, `delete`, `has`.
- **Usage**:
  ```javascript
  let weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, 'value');
  ```

## Typed Arrays
- **Definition**: Arrays of specific numeric types.
- **Types**: `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`.
- **Usage**:
  ```javascript
  let typedArray = new Uint8Array([1, 2, 3]);
  ```
