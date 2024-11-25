"use client";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/img/teacher/helium_edu.png";

// const YOUR_DOMAIN = "meet.heliumlearn.com";
const YOUR_DOMAIN = "meet.grannydr.com";


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage spinner visibility
  const [meetingEnded, setMeetingEnded] = useState(false);
  const searchParams = useSearchParams();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const renderNoInternetConnection = () => (
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
            <Image
              style={{ width: "auto", height: "auto" }}
              src={logo}
              alt="logo"
            />
            <div className="mt-4 font-bold text-lg">No Internet Connection</div>
            <div className="font-bold text-lg">
              Please Check Your Network Settings..!!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const goBack = () => {
    setMeetingEnded(true);
  };

  const user_name = searchParams.get("user_name") ?? "";
  const room_key = searchParams.get("room_key") ?? "defaultRoom";
  const configOverwrite: any = {
    prejoinPageEnabled: false,
    disableThirdPartyRequests: true,
    disablePolls: true,
    disableDeepLinking: true,
    startWithAudioMuted: true,
    startWithVideoMuted: true,
    hideParticipantsStats: true,
    participantsPane: {
      enabled: false,
      hideModeratorSettingsTab: true,
    },
    toolbarButtons: ['chat'],
    hideDominantSpeakerBadge: true,
    filmstrip: {
      disabled: true,
    },
    tileView: {
      disabled: true,
    },
    remoteVideoMenu: {
      //     // Whether the remote video context menu to be rendered or not.
          disabled: false,
      //     // If set to true the 'Switch to visitor' button will be disabled.
      //     disableDemote: true,
      //     // If set to true the 'Kick out' button will be disabled.
      //     disableKick: true,
      //     // If set to true the 'Grant moderator' button will be disabled.
      //     disableGrantModerator: true,
      //     // If set to true the 'Send private message' button will be disabled.
      //     disablePrivateChat: true,
      },
    hideConferenceSubject: true,
    hideConferenceTimer: true,
    conferenceInfo: {
      alwaysVisible: ["recording", "raised-hands-count"],
      autoHide: ["subject"],
    },
    notifications: [],
  };

  const interfaceConfigOverwrite: any = {
    // VIDEO_LAYOUT_FIT: "both",
    MOBILE_APP_PROMO: false,
    TOOLBAR_BUTTONS: [],
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
    DISABLE_VIDEO_BACKGROUND: true,
    DISABLE_FOCUS_INDICATOR: false,
    // HIDE_RECORDING_WARNING: true, // Hide the recording warning
  };

  const getIFrameRef: any = (iframeRef: HTMLIFrameElement) => {
    iframeRef.style.height = "100vh";
  };

  const userInfo: any = {
    displayName: user_name,
  };

  const renderSpinner = () => (
    // <div
    //   style={{
    //     fontFamily: "sans-serif",
    //     textAlign: "center",
    //   }}
    // >
    //   Loading..
    // </div>
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
            <Image
              style={{ width: "auto", height: "auto" }}
              src={logo}
              alt="logo"
            />
            <div>
              <div className="preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {meetingEnded ? (
        <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                <Image
                  style={{ width: "auto", height: "auto" }}
                  src={logo}
                  alt="logo"
                />
                <div className="mt-4 font-bold text-lg">
                  Thank you for attending{" "}
                </div>
                <div className="font-bold text-lg">the meeting..!!!</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {!isOnline ? (
            <>{renderNoInternetConnection()}</>
          ) : (
            <>
              {isLoading && renderSpinner()}
              <JitsiMeeting
                domain={YOUR_DOMAIN}
                roomName={room_key}
                configOverwrite={configOverwrite}
                interfaceConfigOverwrite={interfaceConfigOverwrite}
                getIFrameRef={getIFrameRef}
                userInfo={userInfo}
                spinner={renderSpinner}
                onApiReady={(externalApi) => {
                  externalApi.addListener("videoConferenceJoined", () => {
                    setIsLoading(false);
                    // console.log("nidhi joined");
                  });
                  externalApi.addListener("participantRoleChanged", (event) => {
                    if (event.role === "moderator") {
                      // Check if the participant is supposed to be a moderator
                      externalApi.executeCommand("hangup");
                    }
                  });
                  externalApi.addListener("videoConferenceLeft", goBack);
                  // externalApi.addListener('networkChanged', ()=>{
                  //   externalApi.executeCommand("hangup");
                  // });
                 

                  // externalApi.addListener('recordingStatusChanged', (status) => {
                  //   if (status.on) {
                  //     console.log('Recording started');
                  //   } else {
                  //     console.log('Recording stopped');
                  //   }
                  // });
                }}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;


// "use client";

// import { useEffect, useState, useCallback, memo } from "react";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import { JitsiMeeting } from "@jitsi/react-sdk";
// import logo from "../../../public/assets/img/teacher/helium_edu.png";

// // Constants
// const DOMAIN = "meet.grannydr.com";
// const MIN_BANDWIDTH_FOR_VIDEO = 300; // kbps
// const NETWORK_CHECK_INTERVAL = 5000; // 5 seconds

// // Configuration objects
// const BASE_CONFIG = {
//   prejoinPageEnabled: false,
//   disableThirdPartyRequests: true,
//   disablePolls: true,
//   disableDeepLinking: true,
//   startWithAudioMuted: true,
//   startWithVideoMuted: true,
//   hideParticipantsStats: true,
//   participantsPane: { enabled: false, hideModeratorSettingsTab: true },
//   toolbarButtons: ['chat'],
//   hideDominantSpeakerBadge: true,
//   filmstrip: { disabled: true },
//   tileView: { disabled: true },
//   remoteVideoMenu: { disabled: false },
//   hideConferenceSubject: true,
//   hideConferenceTimer: true,
//   conferenceInfo: { 
//     alwaysVisible: ["recording", "raised-hands-count"], 
//     autoHide: ["subject"] 
//   },
//   notifications: [],
//   // Video quality optimization
//   videoQuality: {
//     maxBitratesVideo: {
//       low: 200000,    // 200 kbps
//       standard: 500000, // 500 kbps
//       high: 1500000    // 1.5 Mbps
//     },
//     minHeightForQualityLvl: {
//       180: 'low',
//       360: 'standard',
//       720: 'high'
//     },
//     preferredCodec: 'VP9'
//   },
//   // Performance optimizations
//   p2p: {
//     enabled: false // Disable P2P for one-to-many structure
//   },
//   enableLayerSuspension: true, // Optimize video quality based on viewport visibility
//   channelLastN: 1, // Only receive video from the active speaker (teacher)
// } as const;

// const INTERFACE_CONFIG = {
//   MOBILE_APP_PROMO: false,
//   TOOLBAR_BUTTONS: [],
//   DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
//   DISABLE_VIDEO_BACKGROUND: true,
//   DISABLE_FOCUS_INDICATOR: false,
//   SHOW_CHROME_EXTENSION_BANNER: false,
// } as const;

// // Memoized UI components
// const LoadingSpinner = memo(() => (
//   <div className="loading-center absolute inset-0 flex items-center justify-center">
//     <div className="text-center space-y-4">
//       <Image src={logo} alt="logo" priority className="mx-auto" />
//       <div className="preloader">
//         <span className="bg-blue-500"></span>
//         <span className="bg-blue-500"></span>
//       </div>
//     </div>
//   </div>
// ));
// LoadingSpinner.displayName = 'LoadingSpinner';

// const MessageScreen = memo(({ title, subtitle }: { title: string; subtitle?: string }) => (
//   <div className="absolute inset-0 flex items-center justify-center">
//     <div className="text-center space-y-4">
//       <Image src={logo} alt="logo" priority className="mx-auto" />
//       <div className="space-y-2">
//         <div className="text-lg font-bold">{title}</div>
//         {subtitle && <div className="text-lg font-bold">{subtitle}</div>}
//       </div>
//     </div>
//   </div>
// ));
// MessageScreen.displayName = 'MessageScreen';

// const JitsiMeetingComponent = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [meetingEnded, setMeetingEnded] = useState(false);
//   const [isOnline, setIsOnline] = useState(navigator.onLine);
//   const [bandwidth, setBandwidth] = useState<number | null>(null);
//   const [searchParams] = useSearchParams();

//   const userName = searchParams.get("user_name") || "";
//   const roomKey = searchParams.get("room_key") || "defaultRoom";

//   // Network quality monitoring
//   const checkNetworkQuality = useCallback(async () => {
//     try {
//       const start = Date.now();
//       const response = await fetch('/api/ping');
//       const end = Date.now();
//       const latency = end - start;
      
//       // Simple bandwidth estimation based on latency
//       const estimatedBandwidth = 1000 / latency * 100; // rough estimation in kbps
//       setBandwidth(estimatedBandwidth);
      
//       return estimatedBandwidth;
//     } catch (error) {
//       console.warn('Network quality check failed:', error);
//       return null;
//     }
//   }, []);

//   // Network monitoring setup
//   useEffect(() => {
//     const handleConnectionChange = () => setIsOnline(navigator.onLine);
    
//     const networkMonitor = setInterval(checkNetworkQuality, NETWORK_CHECK_INTERVAL);
    
//     window.addEventListener("online", handleConnectionChange);
//     window.addEventListener("offline", handleConnectionChange);

//     return () => {
//       clearInterval(networkMonitor);
//       window.removeEventListener("online", handleConnectionChange);
//       window.removeEventListener("offline", handleConnectionChange);
//     };
//   }, [checkNetworkQuality]);

//   // Dynamic configuration based on network conditions
//   const configOverwrite = {
//     ...BASE_CONFIG,
//     startWithVideoMuted: bandwidth ? bandwidth < MIN_BANDWIDTH_FOR_VIDEO : true,
//   };

//   const handleApiReady = useCallback((externalApi: any) => {
//     // Set up event listeners
//     externalApi.addListener("videoConferenceJoined", () => setIsLoading(false));
    
//     externalApi.addListener("participantRoleChanged", (event: { role: string }) => {
//       if (event.role === "moderator") externalApi.executeCommand("hangup");
//     });
    
//     externalApi.addListener("videoConferenceLeft", () => setMeetingEnded(true));

//     // Network quality monitoring
//     let lastBandwidth = bandwidth;
//     externalApi.addListener("networkQualityChanged", (quality: number) => {
//       if (quality < 2 && lastBandwidth && lastBandwidth >= MIN_BANDWIDTH_FOR_VIDEO) {
//         externalApi.executeCommand('toggleVideo');
//       }
//     });

//     // Cleanup
//     return () => {
//       externalApi.removeAllListeners();
//       externalApi.dispose();
//     };
//   }, [bandwidth]);

//   if (meetingEnded) {
//     return <MessageScreen title="Thank you for attending" subtitle="the meeting..!!!" />;
//   }

//   if (!isOnline) {
//     return <MessageScreen title="No Internet Connection" subtitle="Please Check Your Network Settings..!!!" />;
//   }

//   return (
//     <>
//       {isLoading && <LoadingSpinner />}
//       <JitsiMeeting
//         domain={DOMAIN}
//         roomName={roomKey}
//         configOverwrite={configOverwrite}
//         interfaceConfigOverwrite={INTERFACE_CONFIG}
//         getIFrameRef={(iframeRef: HTMLIFrameElement) => {
//           if (iframeRef) iframeRef.style.height = "100vh";
//         }}
//         userInfo={{ displayName: userName }}
//         onApiReady={handleApiReady}
//       />
//     </>
//   );
// };

// export default memo(JitsiMeetingComponent);