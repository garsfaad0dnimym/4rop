function getSystemInfo() {
    const systemInfo = {
        platform: navigator.platform, // Identifies the platform (OS)
        userAgent: navigator.userAgent, // Identifies the browser and OS
        language: navigator.language, // Browser language
        isMobile: /Mobi|Android/i.test(navigator.userAgent), // Checks if it's a mobile device
        isMac: navigator.platform.indexOf('Mac') > -1, // Checks if MacOS
        isWindows: navigator.platform.indexOf('Win') > -1, // Checks if Windows OS
        isLinux: navigator.platform.indexOf('Linux') > -1, // Checks if Linux
        browser: (function() {
            const userAgent = navigator.userAgent;
            if (/Chrome/.test(userAgent)) return "Chrome";
            if (/Safari/.test(userAgent)) return "Safari";
            if (/Firefox/.test(userAgent)) return "Firefox";
            if (/Edge/.test(userAgent)) return "Edge";
            if (/MSIE/.test(userAgent) || /Trident/.test(userAgent)) return "Internet Explorer";
            return "Unknown";
        })(),
    };

    console.log(systemInfo);
    return systemInfo;
}

// Call the function to display the system information
getSystemInfo();