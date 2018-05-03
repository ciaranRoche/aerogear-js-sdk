declare let IRoot: any;

export class DeviceTrust{

    detectRoot(): void{
        var self = this;
        IRoot.isRooted(function(rooted:any){
            if(rooted){
                console.log("Root Access Detected");
            }else{
                console.log("Root Access Not Detected");
            }
        }, function(error:any){
            console.log(error);
        })
    }
}