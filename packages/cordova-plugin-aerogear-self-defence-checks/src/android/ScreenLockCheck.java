package android;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import android.app.KeyguardManager;
import android.content.Context;
import android.os.Build;

public class ScreenLockCheck extends CordovaPlugin{

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException{
        Context context = this.cordova.getActivity().getApplicationContext();
        final KeyguardManager keyguardManager = (KeyguardManager) context.getSystemService(Context.KEYGUARD_SERVICE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
            return keyguardManager.isDeviceSecure();
        }
        return keyguardManager.isKeyguardSecure();
    }

}