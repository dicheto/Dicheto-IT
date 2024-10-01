if (localStorage.getItem("cookie_message-closed-notification") !== null) {
    gtag("consent", "update", {
        ad_user_data: "granted",
        ad_personalization: "granted",
        ad_storage: "granted",
        analytics_storage: "granted"
      })
}