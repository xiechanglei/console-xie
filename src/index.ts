import {createOffer} from "./rtc";

/**
 * 使用webrtc创建一个server端，接受客户端的消息
 */
export const createServer = async () => {
    const interconnection = new RTCPeerConnection();
    const datachannel = interconnection.createDataChannel("channel");
    datachannel.onmessage = console.log;
    // const offer = await interconnection.createOffer();
    const offer = createOffer();
    console.log(offer.sdp);
    await interconnection.setLocalDescription(offer);
    interconnection.onicecandidate = ({candidate}) => {
        if (candidate) {
            console.log("server candidate", candidate);
        }
    }
}

/**
 * 使用webrtc创建一个client端，发送消息给server端
 */

export const createClient = async () => {
    const interconnection = new RTCPeerConnection();
    const offer = createOffer();
    await interconnection.setRemoteDescription(offer);
    const answer = await interconnection.createAnswer();
    await interconnection.setLocalDescription(answer);
    interconnection.onicecandidate = ({candidate}) => {
        if (candidate) {
            console.log("client candidate", candidate);
        }
    }
}