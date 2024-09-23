# capacitor-community-q962-smdns

mdns

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
discoverServices(opt: { type: string; }, cb: (arg: DiscoverServicesArgType) => void) => Promise<CallbackId>
```

| Param     | Type                                                                                          |
| --------- | --------------------------------------------------------------------------------------------- |
| **`opt`** | <code>{ type: string; }</code>                                                                |
| **`cb`**  | <code>(arg: <a href="#discoverservicesargtype">DiscoverServicesArgType</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### Type Aliases


#### DiscoverServicesArgType

<code>{ onServiceFound?: { name: string; host?: string; port?: number; }; onServiceLost?: { name: string; host?: string; port?: number; }; }</code>


#### CallbackId

<code>string</code>

</docgen-api>
