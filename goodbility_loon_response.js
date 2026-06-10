// Goodbility 解锁 - Loon 响应脚本（兼容版）
var url = $request.url;
var now = new Date();
var isoTime = now.toISOString();
var dateStr = isoTime.split('.')[0] + "Z";

if (url.indexOf('notability.com') !== -1) {
  var body = {
    "data": {
      "processAppleReceipt": {
        "__typename": "SubscriptionResult",
        "isClassic": false,
        "subscription": {
          "productId": "com.gingerlabs.Notability.premium_subscription",
          "originalTransactionId": "500000961211891",
          "tier": "premium",
          "refundedDate": null,
          "refundedReason": null,
          "isInBillingRetryPeriod": false,
          "expirationDate": "2099-12-31T12:13:14.000Z",
          "gracePeriodExpiresAt": null,
          "overDeviceLimit": false,
          "expirationIntent": "CUSTOMER",
          "__typename": "AppStoreSubscription",
          "user": null,
          "status": "active",
          "originalPurchaseDate": "2021-11-01T23:58:48.000Z"
        },
        "error": 0
      }
    }
  };
  console.log("Goodbility Notability OK");
  $done({ "body": JSON.stringify(body) });
} else {
  var body = {
    "request_date": dateStr,
    "request_date_ms": Date.now(),
    "subscriber": {
      "entitlements": {
        "apple_access": {
          "grace_period_expires_date": null,
          "purchase_date": "2022-09-08T01:04:17Z",
          "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999"
        },
        "gn5": {
          "grace_period_expires_date": null,
          "purchase_date": "2022-09-08T01:04:17Z",
          "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999"
        },
        "crossplatform_access": {
          "grace_period_expires_date": null,
          "purchase_date": "2022-09-08T01:04:17Z",
          "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999"
        }
      },
      "first_seen": "2025-02-21T15:10:07Z",
      "last_seen": dateStr,
      "management_": null,
      "original_app_user_id": "10fdb8be-9230-4d6f-91c5-ed36d8cdca88",
      "original_application_version": "2395679.285305451",
      "original_purchase_date": "2023-12-31T13:14:20Z",
      "subscriptions": {
        "com.goodnotes.gn6_one_time_unlock_3999": {
          "is_sandbox": false,
          "ownership_type": "PURCHASED",
          "billing_issues_detected_at": null,
          "period_type": "normal",
          "grace_period_expires_date": null,
          "unsubscribe_detected_at": null,
          "original_purchase_date": "2022-09-08T01:04:18Z",
          "purchase_date": "2022-09-08T01:04:17Z",
          "store": "app_store"
        }
      }
    },
    "Attention": "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！"
  };
  console.log("Goodbility GoodNotes OK");
  $done({ "body": JSON.stringify(body) });
}
