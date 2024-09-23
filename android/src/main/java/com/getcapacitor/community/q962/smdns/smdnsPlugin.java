package com.getcapacitor.community.q962.smdns;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.net.nsd.NsdManager;
import android.net.nsd.NsdServiceInfo;
import android.content.Context;

@CapacitorPlugin(name = "smdns")
public class smdnsPlugin extends Plugin {

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void discoverServices(PluginCall call) {

        String type = call.getString("type");

        if (type == null || type.isEmpty()) {
            JSObject ret = new JSObject();
            ret.put("error", "type cannot be empty");
            ret.put("call", call.toString());
            call.resolve(ret);
            return;
        }

        try {
            call.setKeepAlive(true);

            NsdManager mNsdManager = (NsdManager) getContext().getSystemService(Context.NSD_SERVICE);
            mNsdManager.discoverServices(type, NsdManager.PROTOCOL_DNS_SD, new NsdManager.DiscoveryListener() {

                @Override
                public void onStartDiscoveryFailed(String var1, int var2) {
                }

                @Override
                public void onStopDiscoveryFailed(String var1, int var2) {
                }

                @Override
                public void onDiscoveryStarted(String var1) {
                }

                @Override
                public void onDiscoveryStopped(String var1) {
                }

                @Override
                public void onServiceFound(NsdServiceInfo service) {
                    JSObject ret = new JSObject();
                    ret.put("onServiceFound", new JSObject().put("name", service.getServiceName()).put("host", service.getHost()).put("port", service.getPort()));

                    call.resolve(ret);
                }

                @Override
                public void onServiceLost(NsdServiceInfo service) {
                    JSObject ret = new JSObject();
                    ret.put("onServiceLost", new JSObject().put("name", service.getServiceName()).put("host", service.getHost()).put("port", service.getPort()));

                    call.resolve(ret);
                }
            });
        } catch (Exception e) {
            call.setKeepAlive(false);

            JSObject ret = new JSObject();
            ret.put("error", e.toString());
            call.resolve(ret);
        }
    }

}
