/* RTP AIT LLC — BRAND_HUB Zero-Visitor-De-Anonymization Governance Stub (v1.6.0)
 * [CATEGORY_CONTEXT: BRAND_HUB — OVERRIDES ALL DEFAULT SPOKE BEHAVIORS]
 * Strict Zero-Visitor-De-Anonymization Policy:
 * - Zero third-party analytics beacons
 * - Zero cookies or persistent visitor identifiers
 * - Zero IP/device fingerprinting or behavioral tracking of public visitors
 * - All calculators execute 100% deterministically in ephemeral browser memory
 */
(function () {
  window.rtpBrandHubGovernance = {
    version: "1.6.0",
    productCategory: "BRAND_HUB",
    categoryContextTag: "[CATEGORY_CONTEXT: BRAND_HUB — OVERRIDES ALL DEFAULT SPOKE BEHAVIORS]",
    visitorAnonymityPolicy: "STRICT_ZERO_VISITOR_DE_ANONYMIZATION",
    zeroCookies: true,
    zeroFingerprinting: true,
    zeroThirdPartyBeacons: true,
    zeroAffiliateLinks: true
  };
})();
