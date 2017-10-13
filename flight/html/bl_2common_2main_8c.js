var bl_2common_2main_8c =
[
    [ "BL_DETECT_BREAK_TO_BL_TIMER_NO_VSENSE", "bl_2common_2main_8c.html#ga49d8715a02825b5cde9967033fab2824", null ],
    [ "BL_DETECT_BREAK_TO_BL_TIMER_WITH_VSENSE", "bl_2common_2main_8c.html#gab7eb5ea618db28dda28f1088838b7e15", null ],
    [ "BL_RECOVER_FROM_FAULT_TIMER", "bl_2common_2main_8c.html#ga9891b2d0e9d30b6cb37bf85d8a240594", null ],
    [ "BL_WAIT_FOR_DFU_TIMER", "bl_2common_2main_8c.html#gac09dc0fe4a22025f5a0f5e253d338f4f", null ],
    [ "MSEC_TO_USEC", "bl_2common_2main_8c.html#ga7f931bc67b924518fc682022f1ec2831", null ],
    [ "SEC_TO_MSEC", "bl_2common_2main_8c.html#gaeaff7570caa39f05be4e96cfeb58efa2", null ],
    [ "SEC_TO_USEC", "bl_2common_2main_8c.html#ga9ffa3a32e59f6376b79235ba24d62dbc", null ],
    [ "bl_events", "bl_2common_2main_8c.html#ga152c8a798ccee362d7d773c5f1563f5e", [
      [ "BL_EVENT_ENTER_DFU", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5eaf7331da80cd8e5e7b02e808cbd5bed23", null ],
      [ "BL_EVENT_USB_CONNECTED", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5eaef788cefbf94071e23cc3fc29d4a66b7", null ],
      [ "BL_EVENT_USB_DISCONNECTED", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5eaf9eed05b0a71c190de3dd3b938e28f48", null ],
      [ "BL_EVENT_JUMP_TO_APP", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5eaa4551ca83e25c3f27c99cb0fc2266e83", null ],
      [ "BL_EVENT_TIMER_EXPIRY", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ea982f3d8ea0da46a809342a9c97fd0d02", null ],
      [ "BL_EVENT_READ_START", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ead5518d4ce7f9b543ca951ea68d3f7dda", null ],
      [ "BL_EVENT_WRITE_START", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ea757f42fb2ecb47c540514408061705f2", null ],
      [ "BL_EVENT_ABORT_OPERATION", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5eac88e1b8c512d7079070fc14124253b1c", null ],
      [ "BL_EVENT_TRANSFER_DONE", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ea58d41ca24632abd258b2648e64b095f2", null ],
      [ "BL_EVENT_TRANSFER_ERROR", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ea388d3cb1e175d1952fccc25c4969af14", null ],
      [ "BL_EVENT_AUTO", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ea252b1cc656c45fd8279f4254ab6ca01f", null ],
      [ "BL_EVENT_FORCE_BOOT", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ea9b0b5c0b60782edc77c7ce8f08716108", null ],
      [ "BL_EVENT_NUM_EVENTS", "bl_2common_2main_8c.html#gga152c8a798ccee362d7d773c5f1563f5ea64f277c08f7b0aec2077aa6eb468a5c6", null ]
    ] ],
    [ "bl_states", "bl_2common_2main_8c.html#ga31f2574038cb70b7ee36f95bf76085c8", [
      [ "BL_STATE_FSM_FAULT", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8ae12e84999c94059873440f9b15ec63f4", null ],
      [ "BL_STATE_INIT", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8a6ecb7d5fe195166c4c63c4e1c64bad62", null ],
      [ "BL_STATE_DETECT_BREAK_TO_BL", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8a2aa828d44d00293fa21f803aa4b98b50", null ],
      [ "BL_STATE_WAIT_FOR_DFU", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8abd67c80739baaca8018d5ffe3c27924d", null ],
      [ "BL_STATE_JUMPING_TO_APP", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8ac92283b53d3ebe3c04083c91107a9352", null ],
      [ "BL_STATE_JUMP_FAILED", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8a87f7ff194620e83391ef1f37e5c000ac", null ],
      [ "BL_STATE_DFU_OPERATION_FAILED", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8a80517e5050c7234614ceb525c5fc4a30", null ],
      [ "BL_STATE_DFU_OPERATION_OK", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8a7f7fb4dd43b2dc42173dd48908a62df7", null ],
      [ "BL_STATE_DFU_IDLE", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8adf159d1544c01bf5aa3577962905b14a", null ],
      [ "BL_STATE_DFU_READ_IN_PROGRESS", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8a4ce24d9c390c89027072ade56af48a9c", null ],
      [ "BL_STATE_DFU_WRITE_IN_PROGRESS", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8a3b7f6dd9df75cdb7dfae8d6fc8a4451e", null ],
      [ "BL_STATE_NUM_STATES", "bl_2common_2main_8c.html#gga31f2574038cb70b7ee36f95bf76085c8af93ea79cff477ccf2583a988089a899b", null ]
    ] ],
    [ "legacy_dfu_states", "bl_2common_2main_8c.html#gac7bf2f42d83376caaec963c96905ebf5", [
      [ "DFU_IDLE", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a6750bb1bc3aa5e183a24e5f1eebbc134", null ],
      [ "DFU_WRITING", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a257e1083cde1b9047188ace4706489c8", null ],
      [ "DFU_WRONG_PACKET_RX", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a8b85cb3f2c32e7fe11de1a1dd83e88f8", null ],
      [ "DFU_TOO_MANY_PACKETS", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a31ac526b36b3c2285ecebf895f258d17", null ],
      [ "DFU_TOO_FEW_PACKETS", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5ac6a2e5d11ebcefe2ce84d3c5f84d28e5", null ],
      [ "DFU_LAST_OP_SUCCESS", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a6bcae174974fbc09cb5fd28f4598ea1d", null ],
      [ "DFU_READING", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5aa277c0eecc2439010bed6f9762a778fa", null ],
      [ "DFU_BL_IDLE", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5abd89c9922117610e92013af9854d4e75", null ],
      [ "DFU_LAST_OP_FAILED", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a0161dad87f4ca40e4d9bcc0230c2b842", null ],
      [ "DFU_WRITE_START", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a991cc6ae4fa9c7ddeb99b74c064b6477", null ],
      [ "DFU_OUTSIDE_DEV_CAP", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5ace648968a6c4f6f5fcc6c479a2d875aa", null ],
      [ "DFU_CRC_FAIL", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a7e18c7ed14ca8e0d55e47c71dbb7c6c1", null ],
      [ "DFU_FAILED_JUMP", "bl_2common_2main_8c.html#ggac7bf2f42d83376caaec963c96905ebf5a961d028bb3cc08d0eef33266c050baed", null ]
    ] ],
    [ "bl_fsm_get_state", "bl_2common_2main_8c.html#ga62166ad92275d2347cbd98c1878db4a0", null ],
    [ "bl_fsm_init", "bl_2common_2main_8c.html#ga649e6a8795714cf3839a796a08708339", null ],
    [ "bl_fsm_inject_event", "bl_2common_2main_8c.html#ga72043c0ebfa473060ef366ed5cb0862c", null ],
    [ "bl_fsm_process_auto", "bl_2common_2main_8c.html#gaa33ac24dccda48440634fb2f1f3a923a", null ],
    [ "bl_fsm_timer_add_ticks", "bl_2common_2main_8c.html#ga0f27a8131fc955346e6dd02dcdc3ee7a", null ],
    [ "bl_fsm_timer_cancel", "bl_2common_2main_8c.html#ga9265c2439a24233d7f760c7ae41bc394", null ],
    [ "bl_fsm_timer_expired_p", "bl_2common_2main_8c.html#ga31b81ecbd23b83a9d09c9e6c5ac920ab", null ],
    [ "bl_fsm_timer_start", "bl_2common_2main_8c.html#gafb2c0b3645baba2bc891b628619364cf", null ],
    [ "bl_select_dfu_device", "bl_2common_2main_8c.html#gaaa86dc26ce8cfdd0fac02be6012e7818", null ],
    [ "bl_send_capabilities", "bl_2common_2main_8c.html#ga646c9e637ff2f15fa5ba2144218fbab4", null ],
    [ "bl_send_status", "bl_2common_2main_8c.html#gaeb0cc07571fc97ee48c48d7cd4d784f7", null ],
    [ "go_detect_break_to_bl", "bl_2common_2main_8c.html#ga23a1189440e47725f99e88dd9f191e2f", null ],
    [ "go_dfu_idle", "bl_2common_2main_8c.html#ga7a4099a65aa350ea23ac565ca6b6fb93", null ],
    [ "go_dfu_operation_failed", "bl_2common_2main_8c.html#ga0c6d40772200a382946f82ef170a8a6a", null ],
    [ "go_dfu_operation_ok", "bl_2common_2main_8c.html#gaeabcb2f3cc8a2230d8af5ff3cfeb9925", null ],
    [ "go_fsm_fault", "bl_2common_2main_8c.html#ga65e8ee831b743959cad66c099a3bb793", null ],
    [ "go_jumping_to_app", "bl_2common_2main_8c.html#ga5c1fc70b0fedc38fa237f4c72169657a", null ],
    [ "go_read_in_progress", "bl_2common_2main_8c.html#gada88a2998b841ba9d4f470bfe18b82c1", null ],
    [ "go_wait_for_dfu", "bl_2common_2main_8c.html#ga7c50a72ffc076f1b0e665b074fa41daf", null ],
    [ "go_write_in_progress", "bl_2common_2main_8c.html#gaaac65a830f1334a77c35e28ffb05d747", null ],
    [ "main", "bl_2common_2main_8c.html#ga840291bc02cba5474a4cb46a9b9566fe", null ],
    [ "PIOS_Board_Init", "bl_2common_2main_8c.html#ga902009c5b1cb57d9f9d60092eb7cacfb", null ],
    [ "process_packet_rx", "bl_2common_2main_8c.html#ga59bf0888321d9ef018e8c078d01fab88", null ],
    [ "bl_transitions", "bl_2common_2main_8c.html#ga1010081207d22097ea807e2b9c709069", null ],
    [ "fsm_to_dfu_state_map", "bl_2common_2main_8c.html#ga42ed271893f4f14875ec66d714985339", null ],
    [ "have_vsense", "bl_2common_2main_8c.html#gafb3b9cb9ff6301d47dd97effb82dc1d8", null ]
];