var cp = require('child_process');
var keyPath = 'HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\InputMethod\\Settings\\CHS'
var keyName = '"Enable Double Pinyin"'

cp.exec(`REG QUERY ${keyPath} /v ${keyName}`,function(error,stdout,stderr) {
    console.log(error)
    console.log(stdout)

    if(stderr){
        utools.showNotification('获取双拼配置失败')
        return
    }

    if(stdout.indexOf('0x1') >= 0){
        cp.exec(`REG ADD ${keyPath} /v ${keyName} /t REG_DWORD /d ${0x0} /f`,function(error,stdout,stderr) {
            if(stderr){
                utools.showNotification('关闭双拼失败')
                return
            }

            utools.showNotification('双拼已关闭')
        });

    }else{
        cp.exec(`REG ADD ${keyPath} /v ${keyName} /t REG_DWORD /d ${0x1} /f`);
        if(stderr){
            utools.showNotification('开启双拼失败')
            return
        }

        utools.showNotification('双拼已开启')
    }
});


