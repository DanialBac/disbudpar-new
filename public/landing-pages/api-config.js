// public/landing-pages/api-config.js
// GENERATED FILE — DO NOT EDIT BY HAND.
// Source of truth: src/services/api/endpoints.ts (regenerate with `bun run api:sync`).
// Consumed by the static landing pages (kage.html, bidang-*.html), which are
// served as-is by Vite and cannot import TypeScript modules.
(function (global) {
  "use strict";

  function buildQuery(params) {
    if (!params) return "";
    var search = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
      search.append(key, String(params[key]));
    });
    var qs = search.toString();
    return qs ? "?" + qs : "";
  }

  var banyuwangiTourism = {
    newsDetail: function (value) {
          return "https://banyuwangitourism.com/api/news/detail/" + encodeURIComponent(value) + "";
        },
    newsUpload: function (value) {
          return "https://banyuwangitourism.com/upload/news/" + encodeURIComponent(value) + "";
        },
    newsArticle: function (value) {
          return "https://banyuwangitourism.com/berita/" + encodeURIComponent(value) + "";
        },
    newsIndex: "https://banyuwangitourism.com/berita",
    newsList: function (params) {
          return "https://banyuwangitourism.com" + "/api/news" + buildQuery(params);
        },
    newsPortalIndex: "https://banyuwangitourism.com/news",
    newsPortalArticle: function (value) {
          return "https://banyuwangitourism.com/news/" + encodeURIComponent(value) + "";
        },
  };

  var sijamuwangi = {
    events: function (params) {
          return "https://api-sijamuwangi.banyuwangikab.go.id" + "/v1/public/events" + buildQuery(params);
        },
    eventsViaProxy: function (params) {
          return "/api-sijamuwangi" + "/v1/public/events" + buildQuery(params);
        },
  };

  global.API_CONFIG = {
    BANYUWANGI_TOURISM_BASE_URL: "https://banyuwangitourism.com",
    SIJAMUWANGI_BASE_URL: "https://api-sijamuwangi.banyuwangikab.go.id",
    SIJAMUWANGI_PROXY_PATH: "/api-sijamuwangi",
    banyuwangiTourism: banyuwangiTourism,
    sijamuwangi: sijamuwangi,
  };
})(typeof window !== "undefined" ? window : globalThis);
