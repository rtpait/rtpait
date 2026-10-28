/* RTP AIT LLC Client-Side Telemetry Stub (v1.5.7 — Zero Public Keys, Zero PII) */
(function () {
  window.rtpAnalytics = {
    version: "1.5.7",
    mode: "privacy_first_client_side",
    trackEvent: function (eventName, props) {
      return { event: eventName, timestamp: new Date().toISOString(), props: props || {} };
    }
  };
})();
