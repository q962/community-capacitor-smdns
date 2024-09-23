# capacitor-community-q962-smdns

simple mdns

Currently only works on android.

## Hint

You may not be able to get the host and port. It is not clear to me what is going on.

My suggestion is to use the server name to pass the information.

## Install

```bash
npm install capacitor-community-q962-smdns
npx cap sync
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
discoverServices(type: string, cb: DiscoverServicesCbArgs) => Promise<CallbackId>
```

| Param      | Type                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| **`type`** | <code>string</code>                                                       |
| **`cb`**   | <code><a href="#discoverservicescbargs">DiscoverServicesCbArgs</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### Type Aliases


#### DiscoverServicesCbArgs

<code>{ onServiceFound?: (name: string, host?: string, port?: number) =&gt; void; onServiceLost?: (name: string, host?: string, port?: number) =&gt; void; }</code>


#### CallbackId

<code>string</code>

</docgen-api>
