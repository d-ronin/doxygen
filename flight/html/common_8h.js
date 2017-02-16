var common_8h =
[
    [ "DownloadDelay", "common_8h.html#ga1a608506d5e29928aa8008ad921b2fb5", null ],
    [ "MAX_DEL_RETRYS", "common_8h.html#gab98ad41f0f40e6edd46ea98d46edb0af", null ],
    [ "MAX_WRI_RETRYS", "common_8h.html#ga41083d32916124e29522e8d0f67dda3d", null ],
    [ "SPI", "common_8h.html#gaadd93900fc87105fa3ef514675d4133b", null ],
    [ "USB", "common_8h.html#ga779bf099075a999d1074357fccbd466b", null ],
    [ "DeviceType", "common_8h.html#gad258d4c51629346fceac4679b3209ad9", [
      [ "High_Density", "common_8h.html#ggad258d4c51629346fceac4679b3209ad9aa0aca1e1d4dc2547144dd3021be121c8", null ],
      [ "Medium_Density", "common_8h.html#ggad258d4c51629346fceac4679b3209ad9aa3ea3fe11e3705395d454ebb0b528105", null ]
    ] ],
    [ "DFUCommands", "common_8h.html#ga882a151e21837eb51e9459f7c213918f", [
      [ "Reserved", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa6136a0872216f91100b42ea04333af70", null ],
      [ "Req_Capabilities", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa8b0b0751877d231c1eaf72152d1160b5", null ],
      [ "Rep_Capabilities", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa4f3d7d90050fe535a4424794b2e324b4", null ],
      [ "EnterDFU", "common_8h.html#gga882a151e21837eb51e9459f7c213918fac3e4960bd05471812a158fc40a2bcd54", null ],
      [ "JumpFW", "common_8h.html#gga882a151e21837eb51e9459f7c213918fab5d62dece14ee5e83c171140cbf377e8", null ],
      [ "Reset", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa92793663441ced378f4676b8a6524385", null ],
      [ "Abort_Operation", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa877381fade53fb29c9a261ba8d37fa31", null ],
      [ "Upload", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa46f3e2fa8b48c8010febfacc693bd3b7", null ],
      [ "Op_END", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa4a64120dfb643420f03325daa38f13ed", null ],
      [ "Download_Req", "common_8h.html#gga882a151e21837eb51e9459f7c213918fad77b02b555d20eb5bcd3218a470c2e50", null ],
      [ "Download", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa5a3ce8971b8570cbf1ba621d50e864ff", null ],
      [ "Status_Request", "common_8h.html#gga882a151e21837eb51e9459f7c213918fab91702aa5a803e1be0897d2a8e53d715", null ],
      [ "Status_Rep", "common_8h.html#gga882a151e21837eb51e9459f7c213918fa5bb01c5e992ff81a80920c2cd7e1afbf", null ]
    ] ],
    [ "DFUPort", "common_8h.html#gaa7a384c9d9aaba1daaa6ba46bd884900", [
      [ "Usb", "common_8h.html#ggaa7a384c9d9aaba1daaa6ba46bd884900ae5e6d66f7159a38e8400f4bb64798fd8", null ],
      [ "Serial", "common_8h.html#ggaa7a384c9d9aaba1daaa6ba46bd884900aab27270f353006b03c91367e05e44b94", null ]
    ] ],
    [ "DFUProgType", "common_8h.html#ga0137f05f9f13737114e6bd864c448688", [
      [ "Self_flash", "common_8h.html#gga0137f05f9f13737114e6bd864c448688a7c4783a857fcc6fe6852002c3dbcce42", null ],
      [ "Remote_flash_via_spi", "common_8h.html#gga0137f05f9f13737114e6bd864c448688a07b3bf72bfd7b7e79e15896d63b85508", null ]
    ] ],
    [ "DFUStates", "common_8h.html#ga9a9e510f2da4e725074c7191d9d75d37", [
      [ "DFUidle", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a5560869486fcea5ddc5cda1ecfdc8404", null ],
      [ "uploading", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37af035363c7de9b49ac7b26d1d366eea2e", null ],
      [ "wrong_packet_received", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a10e85c20a054b4f3566daf03ccc5fa95", null ],
      [ "too_many_packets", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a583f8d734e063487063ed71a4651e1f2", null ],
      [ "too_few_packets", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a59f786fb3ba3508dfbf4f61b25b90946", null ],
      [ "Last_operation_Success", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37acce93144acfd5bf749409b44531d6329", null ],
      [ "downloading", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37ac11a9e1683ed24627ab6a8d3ddb30b28", null ],
      [ "BLidle", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a1c3d35c6232dd83c8d85688c758a0124", null ],
      [ "Last_operation_failed", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37ad1504cc235ba9b3018ae8f846cbdd32e", null ],
      [ "uploadingStarting", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a13ad001bdde7a61d190b9ca6a81a4c0f", null ],
      [ "outsideDevCapabilities", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37ae37b6c89cdb353f41bec61a82ac5e5ca", null ],
      [ "CRC_Fail", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a865129af1d1ea79ecab6f82c22c71695", null ],
      [ "failed_jump", "common_8h.html#gga9a9e510f2da4e725074c7191d9d75d37a77b323a446c491f5e635b3eaaa37cfd4", null ]
    ] ],
    [ "DFUTransfer", "common_8h.html#ga0b23a3b03386f81782f1b57b69804064", [
      [ "FW", "common_8h.html#gga0b23a3b03386f81782f1b57b69804064acf11f02bedc5ce283a41a6819ac04a20", null ],
      [ "Descript", "common_8h.html#gga0b23a3b03386f81782f1b57b69804064ad0c85b3f0ef3826a336fdbfa22e7499d", null ]
    ] ],
    [ "DownloadAction", "common_8h.html#ga3758da4ce9164f008216ba0fc2a82edc", [
      [ "start", "common_8h.html#gga3758da4ce9164f008216ba0fc2a82edca0e97c69c73117f6c0109b2d7d1d9cedc", null ],
      [ "keepgoing", "common_8h.html#gga3758da4ce9164f008216ba0fc2a82edca8c6d8b2abac8e68e45d85a5bd9424bd7", null ]
    ] ]
];