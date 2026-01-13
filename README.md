# capacitor-community-smdns

simple mdns

Currently only works on android.

## Install

```bash
npm install capacitor-community-smdns
npx cap sync
```

## Example

```ts
import { smdns } from 'capacitor-community-smdns'

if (Capacitor.isPluginAvailable('smdns')) {
  smdns.discoverServices('_http._tcp', {
    onServiceFound: (name, host, port) => {
      console.log(name, host, port)
    }
  })
}
```

## API

<docgen-index>

* [`discoverServices(...)`](#discoverservices)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### discoverServices(...)

```typescript
discoverServices(type: string, cb: DiscoverServicesCb) => void
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`type`** | <code>string</code>                                               |
| **`cb`**   | <code><a href="#discoverservicescb">DiscoverServicesCb</a></code> |

--------------------


### Type Aliases


#### DiscoverServicesCb

<code>{ onServiceFound?: (name: string, host?: string, port?: number) =&gt; void; onServiceLost?: (name: string, host?: string, port?: number) =&gt; void; }</code>

</docgen-api>
