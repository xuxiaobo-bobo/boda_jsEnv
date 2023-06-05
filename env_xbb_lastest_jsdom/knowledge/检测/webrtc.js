
function test_get_ip() {
    //webrtc
    function getIPs(callback) {
        var ip_dups = {};

        var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        var useWebKit = !!window.webkitRTCPeerConnection;

        if (!RTCPeerConnection) {
            var win = iframe.contentWindow;
            RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection;
            useWebKit = !!win.webkitRTCPeerConnection;
        }

        var mediaConstraints = {
            optional: [{
                RtpDataChannels: true
            }]
        };

        var servers = {
            iceServers: [{
                urls: "stun:stun.l.google.com:19302"
            }]
        };

        var pc = new RTCPeerConnection(servers,mediaConstraints);

        function handleCandidate(candidate) {
            var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
            var ip_addr = ip_regex.exec(candidate) && ip_regex.exec(candidate)[1];

            if (!ip_addr)
                return;
            if (ip_dups[ip_addr] === undefined)
                callback(ip_addr);

            ip_dups[ip_addr] = true;
        }

        pc.onicecandidate = function(ice) {
            if (ice.candidate)
                handleCandidate(ice.candidate.candidate);
        }
        ;

        pc.createDataChannel("");

        pc.createOffer(function(result) {

            pc.setLocalDescription(result, function() {}, function() {});

        }, function() {});

        setTimeout(function() {
            var lines = pc.localDescription.sdp.split('\n');

            lines.forEach(function(line) {
                if (line.indexOf('a=candidate:') === 0)
                    handleCandidate(line);
            });
        }, 1000);
    }

    getIPs(function(ip) {

        let res = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(ip.toString())
        //true
        if (res) {
            console.log(`test_get_ip 检测通过`)

        } else {
            console.log(`test_get_ip 可以被检测`)
        }

    });
}

test_get_ip()