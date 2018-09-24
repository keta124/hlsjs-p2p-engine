
import { config as btConfig } from './bittorrent';

//时间单位统一为秒
let defaultP2PConfig = {
    wsSignalerAddr: 'wss://signal.cdnbye.com/wss',          // 信令服务器地址
    wsMaxRetries: 3,                            // websocket连接重试次数
    wsReconnectInterval: 5,                     // websocket重连时间间隔

    p2pEnabled: true,                           // 是否开启P2P，默认true

    dcRequestTimeout: 5,                        // datachannel接收二进制数据的超时时间
    dcUploadTimeout: 5,                         // datachannel上传二进制数据的超时时间
    dcPings: 5,                                 // datachannel发送ping数据包的数量
    dcTolerance: 5,                             // 请求超时或错误多少次淘汰该peer

    packetSize: 64*1024,                        // 每次通过datachannel发送的包的大小
    maxBufSize: 1024*1024*50,                   // p2p缓存的最大数据量
    loadTimeout: 4,                             // p2p下载的超时时间

    enableLogUpload: false,                      // 上传log到服务器，默认false
    logUploadAddr: "wss://api.cdnbye.com/trace", // log上传地址
    logUploadLevel: 'warn',                      // log上传level，分为debug、info、warn、error、none，默认warn
    logLevel: 'none',                            // log的level，分为debug、info、warn、error、none，设为true等于debug，设为false等于none，默认none

    tag: '',                                     // 用户自定义标签，可用于在后台查看参数调整效果

    channelId: null,                             // 标识channel的字段，默认是'[path]-[protocol version]'
    segmentId: null,                             // 标识ts文件的字段，默认是'[level]-[sn]'

    webRTCConfig: {},                            // 传入channelConfig用于createDataChannel，config用于RTCPeerConnection

    ...btConfig
};

export default defaultP2PConfig;
