var group___vtol_path_follower =
[
    [ "VtolNavigationFsmMethods", "group___vtol_navigation_fsm_methods.html", "group___vtol_navigation_fsm_methods" ],
    [ "VtolNavigationDo", "group___vtol_navigation_do.html", "group___vtol_navigation_do" ],
    [ "VtolNavigationEnable", "group___vtol_navigation_enable.html", "group___vtol_navigation_enable" ],
    [ "vtol_follower_control.c", "vtol__follower__control_8c.html", null ],
    [ "vtol_follower_fsm.c", "vtol__follower__fsm_8c.html", null ],
    [ "vtol_follower_priv.h", "vtol__follower__priv_8h.html", null ],
    [ "vtolpathfollower.c", "vtolpathfollower_8c.html", null ],
    [ "vtol_fsm_transition", "structvtol__fsm__transition.html", [
      [ "entry_fn", "group___tau_labs_modules.html#gaee6622bae804f1c41177facffb8ca7b3", null ],
      [ "next_state", "group___tau_labs_modules.html#ga07d4010f28091289bd740f33c9131ce8", null ],
      [ "static_fn", "group___tau_labs_modules.html#ga7c1cd3e781499d4a07757203b35d2d51", null ],
      [ "timeout", "group___tau_labs_modules.html#ga1cc2043f2c25a4c271ff1ee71c1b4515", null ]
    ] ],
    [ "MAX_QUEUE_SIZE", "group___vtol_path_follower.html#ga623ec78b7909090dbedac4af1d52abb4", null ],
    [ "MILLI", "group___vtol_path_follower.html#gadeb4b9151c69e22165f63162cc43e459", null ],
    [ "STACK_SIZE_BYTES", "group___vtol_path_follower.html#ga8ba6b61bd4ff2677b6d5f6be4c5d8725", null ],
    [ "TASK_PRIORITY", "group___vtol_path_follower.html#ga82dd0a9ae27bdb2c3cdd33bb7804861c", null ],
    [ "vtol_fsm_event", "group___vtol_path_follower.html#ga0cb5a99d49a425cbdeb852658dd4f05f", [
      [ "FSM_EVENT_AUTO", "group___vtol_path_follower.html#gga0cb5a99d49a425cbdeb852658dd4f05fab2ab0ad04a6b172055abd54451ae6e6d", null ],
      [ "FSM_EVENT_TIMEOUT", "group___vtol_path_follower.html#gga0cb5a99d49a425cbdeb852658dd4f05faf4f068ab3e0c86a14a3cccbb9cd682c5", null ],
      [ "FSM_EVENT_HIT_TARGET", "group___vtol_path_follower.html#gga0cb5a99d49a425cbdeb852658dd4f05fa9f2c5b8c62e89377e2c893e146971a1d", null ],
      [ "FSM_EVENT_LEFT_TARGET", "group___vtol_path_follower.html#gga0cb5a99d49a425cbdeb852658dd4f05fa416ad4adad5e83a934fd5d80b248720f", null ],
      [ "FSM_EVENT_NUM_EVENTS", "group___vtol_path_follower.html#gga0cb5a99d49a425cbdeb852658dd4f05fa2ac6ab5fffdbaa83ab8b01968458f2ee", null ]
    ] ],
    [ "vtol_fsm_state", "group___vtol_path_follower.html#gaae52e42ee6e9f92eb6ff431f3c7f7a99", [
      [ "FSM_STATE_FAULT", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a42f1dba485dea79dfac74b44cbbe8771", null ],
      [ "FSM_STATE_INIT", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99aa8714ecb72965f8fd91a2f7aab4449a6", null ],
      [ "FSM_STATE_HOLDING", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a04e7449f919352dc65a91d027b0eea46", null ],
      [ "FSM_STATE_FLYING_PATH", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a99293590b983ddd12446c3cf954fbcc3", null ],
      [ "FSM_STATE_LANDING", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99aac2cacb98f5928eb429dd8a19dfcda0e", null ],
      [ "FSM_STATE_PRE_RTH_RISE", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a82974eddc0fcad02531b2d0a2469be2f", null ],
      [ "FSM_STATE_POST_RTH_HOLD", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a503ed1787324dd405cacc94e4ee7735b", null ],
      [ "FSM_STATE_DISARM", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a5f1999868b2eff12b0fa4c7142c9e20a", null ],
      [ "FSM_STATE_UNCHANGED", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a3c2252cc7b2814cda1c4b3b7b34065f3", null ],
      [ "FSM_STATE_NUM_STATES", "group___vtol_path_follower.html#ggaae52e42ee6e9f92eb6ff431f3c7f7a99a61cf13b8437f4f141ac2a27ae143be07", null ]
    ] ],
    [ "vtol_goals", "group___vtol_path_follower.html#gaac48ec6a7965fc739d8e41b4c4beb595", [
      [ "GOAL_LAND_NONE", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595a483fecb99b8d02f94bb979efccc23df0", null ],
      [ "GOAL_HOLD_POSITION", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595ab3907d913212e61409bea7520f39fab6", null ],
      [ "GOAL_FLY_PATH", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595a8137c0cbb51a4f8919a1632b391cb868", null ],
      [ "GOAL_LAND_HERE", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595a9d97b35cfaa4ed95f485b8bdb8e381f7", null ],
      [ "GOAL_LAND_HOME", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595ac59376f8fcd8215e937f531d872d7245", null ]
    ] ],
    [ "vtol_pid", "group___vtol_path_follower.html#gaa1cc793c473ad52ad906c7feecdb3a37", [
      [ "NORTH_VELOCITY", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37ae45cff8467cdb386a31197540e5bdd56", null ],
      [ "EAST_VELOCITY", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37aedb9ece820ccb3967caa3a880963724e", null ],
      [ "DOWN_VELOCITY", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37ac40aaeb4635693d0cf03af8e9372708d", null ],
      [ "NORTH_POSITION", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37a3f46558976ca7c653cc8c08475bcab2a", null ],
      [ "EAST_POSITION", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37a16d8665516d2ff93c39520ff3a7aaa10", null ],
      [ "DOWN_POSITION", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37a545c2f2e31b041e3c0dec80772eacc04", null ],
      [ "VTOL_PID_NUM", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37ac92fcbf75f1c93775999e6788aa2342d", null ]
    ] ],
    [ "DOWN_POSITION", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37a545c2f2e31b041e3c0dec80772eacc04", null ],
    [ "DOWN_VELOCITY", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37ac40aaeb4635693d0cf03af8e9372708d", null ],
    [ "EAST_POSITION", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37a16d8665516d2ff93c39520ff3a7aaa10", null ],
    [ "EAST_VELOCITY", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37aedb9ece820ccb3967caa3a880963724e", null ],
    [ "GOAL_FLY_PATH", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595a8137c0cbb51a4f8919a1632b391cb868", null ],
    [ "GOAL_HOLD_POSITION", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595ab3907d913212e61409bea7520f39fab6", null ],
    [ "GOAL_LAND_HERE", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595a9d97b35cfaa4ed95f485b8bdb8e381f7", null ],
    [ "GOAL_LAND_HOME", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595ac59376f8fcd8215e937f531d872d7245", null ],
    [ "GOAL_LAND_NONE", "group___vtol_path_follower.html#ggaac48ec6a7965fc739d8e41b4c4beb595a483fecb99b8d02f94bb979efccc23df0", null ],
    [ "NORTH_POSITION", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37a3f46558976ca7c653cc8c08475bcab2a", null ],
    [ "NORTH_VELOCITY", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37ae45cff8467cdb386a31197540e5bdd56", null ],
    [ "VTOL_PID_NUM", "group___vtol_path_follower.html#ggaa1cc793c473ad52ad906c7feecdb3a37ac92fcbf75f1c93775999e6788aa2342d", null ],
    [ "go_enable_fly_path", "group___vtol_path_follower.html#ga6de2230c9b10fb92700361232739f61a", null ],
    [ "loiter_deadband", "group___vtol_path_follower.html#ga1fb5bf24111b36b2c0c37f1f749d06d8", null ],
    [ "MODULE_INITCALL", "group___vtol_path_follower.html#ga304541063acff929281e0000e4a966da", null ],
    [ "vtol_follower_control_accel", "group___vtol_path_follower.html#gad21b62e5d1e75c1b856e79bad01a3162", null ],
    [ "vtol_follower_control_altitude", "group___vtol_path_follower.html#gad2c1ad5c14192cec0c10508a99b53296", null ],
    [ "vtol_follower_control_altrate", "group___vtol_path_follower.html#ga4bde896955b52b18b38bfb169fb41f61", null ],
    [ "vtol_follower_control_attitude", "group___vtol_path_follower.html#gaf74c8d82d0da6f0684a18142a4443feb", null ],
    [ "vtol_follower_control_endpoint", "group___vtol_path_follower.html#ga933c9e672f1d310326f12149b084332c", null ],
    [ "vtol_follower_control_impl", "group___vtol_path_follower.html#ga6254305ca0f052a4d6aa6afbe9282e81", null ],
    [ "vtol_follower_control_land", "group___vtol_path_follower.html#ga3bb184686da274df1ce2c02d0b7d5484", null ],
    [ "vtol_follower_control_loiter", "group___vtol_path_follower.html#ga5e66d16b252c7eb235b845dca9216d66", null ],
    [ "vtol_follower_control_path", "group___vtol_path_follower.html#gaa888e9f4c0744cc967fdea6fc25024b7", null ],
    [ "vtol_follower_control_settings_updated", "group___vtol_path_follower.html#ga11c00ff1937f75fc54067a5e4a7e9631", null ],
    [ "vtol_follower_fsm_activate_goal", "group___vtol_path_follower.html#ga039469a77d5cf372122c15b804f556ac", null ],
    [ "vtol_follower_fsm_update", "group___vtol_path_follower.html#gaf39bd45642b5b246242f59102ed2e828", null ],
    [ "vtol_fsm_timer_expired", "group___vtol_path_follower.html#ga77b33078cab59e20f7de7b66bc50ce39", null ],
    [ "vtol_fsm_timer_set", "group___vtol_path_follower.html#gaacaa06c3ef0c6b5a0204686d00484f20", null ],
    [ "VtolPathFollowerInitialize", "group___vtol_path_follower.html#gaec33cc9b4cda3af1231529c8ef0dc9d1", null ],
    [ "VtolPathFollowerStart", "group___vtol_path_follower.html#ga961a79aed22b448a7401bcca54fbeed4", null ],
    [ "vtolPathFollowerTask", "group___vtol_path_follower.html#ga9538403f2d70b8d5bd8ae92c1520b9c8", null ],
    [ "altitudeHoldSettings", "group___vtol_path_follower.html#ga833d8e0c875a93fc327dae79b3a4fea4", null ],
    [ "DT", "group___vtol_path_follower.html#ga6017ffae59f47b16d8bf2070452f1405", null ],
    [ "fsm_follow_path", "group___vtol_path_follower.html#ga28fde3f6dabb28e2a914188fe679b0c6", null ],
    [ "fsm_hold_position", "group___vtol_path_follower.html#gac7c84f785a63d0ac94d3ae46300a73bb", null ],
    [ "fsm_land_home", "group___vtol_path_follower.html#ga3e128e1d10aedb247940407f46d888a1", null ],
    [ "guidanceSettings", "group___vtol_path_follower.html#gad96f7dbb8c0b5508b220f0aa0874b44e", null ],
    [ "guidanceSettings", "group___vtol_path_follower.html#gad96f7dbb8c0b5508b220f0aa0874b44e", null ],
    [ "loiter_brakealpha", "group___vtol_path_follower.html#ga26e67dbf59cc44ee583f49c2b1b9e35c", null ],
    [ "loiter_errordecayalpha", "group___vtol_path_follower.html#gabd99495c8858b7684b30c41baf131b3b", null ],
    [ "module_enabled", "group___vtol_path_follower.html#ga8a40b3b298ebb34ef7da48a31631e2ac", null ],
    [ "pathfollowerTaskHandle", "group___vtol_path_follower.html#ga199fcee97cd90f6dacc6eb22cc6f9125", null ],
    [ "queue", "group___vtol_path_follower.html#ga99a334ed9cdb3e7a7c694d5519d08d30", null ],
    [ "RTH_ALT_ERROR", "group___vtol_path_follower.html#gac6d43aa5291ed72b6f65a07ba5ef632d", null ],
    [ "RTH_CLIMB_SPEED", "group___vtol_path_follower.html#ga1ce224574fa2fb728c835a2d3e970bb3", null ],
    [ "RTH_MIN_ALTITUDE", "group___vtol_path_follower.html#ga9f24404bb693281ef2d7b11347f4c235", null ],
    [ "RTH_MIN_RISE", "group___vtol_path_follower.html#ga18e5a0c5d15678325576a5097696affc", null ],
    [ "vtol_end_m", "group___vtol_path_follower.html#gaa2575889d62976c0b13458f85f23458c", null ],
    [ "vtol_end_r", "group___vtol_path_follower.html#ga2fa90306327b02b68b72ee525a894866", null ],
    [ "vtol_fsm_timer_expiration", "group___vtol_path_follower.html#ga7a9fc8af7285b342984342ffdbcc3f7e", null ],
    [ "vtol_path_m", "group___vtol_path_follower.html#ga605ad82c6f555d6cbf17d4b80112f615", null ],
    [ "vtol_path_r", "group___vtol_path_follower.html#ga7da7c056e8fad13dc9b31d51ad2caa8c", null ],
    [ "vtol_pids", "group___vtol_path_follower.html#gadc513a71374f3eb19fdce6b8584b73f4", null ],
    [ "vtol_pids", "group___vtol_path_follower.html#gadc513a71374f3eb19fdce6b8584b73f4", null ]
];