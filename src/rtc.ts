export const createOffer = (): RTCSessionDescriptionInit => {
    return {
        type: "offer",
        sdp: "v=0\n" +
            "o=- " + Date.now() + " 2 IN IP4 127.0.0.1\n" +
            "s=-\n" +
            "t=0 0\n" +
            "a=group:BUNDLE 0\n" +
            "a=extmap-allow-mixed\n" +
            "a=msid-semantic: WMS\n" +
            "m=application 9 UDP/DTLS/SCTP webrtc-datachannel\n" +
            "c=IN IP4 0.0.0.0\n" +
            //
            // "a=ice-ufrag:EvZM\n" + //
            // "a=ice-pwd:xwj8C4rr66toA1eiLbaF/ABn\n" +//
            "a=ice-options:trickle\n" +
            // "a=fingerprint:sha-256 87:68:78:23:A6:20:05:0A:D1:9A:76:D8:58:AB:11:1A:27:AB:FC:03:B5:61:2B:97:AB:41:BC:36:A0:02:4C:3E\n" +//
            "a=setup:actpass\n" +
            "a=mid:0\n" +
            "a=sctp-port:5000\n" +
            "a=max-message-size:262144"
    }
}