(function() {
  var r, e, n, t, a, d, o, u, m, l, s, f, c, p, _, g, h, w, x, v;
  (r = jQuery)(function() {
      if (r('meta[name="viewport"]').length) return r("head").append('<meta content="width=device-width" name="viewport">')
  }), r(function() {
      return w(), r(window).resize(function() {
          return w()
      })
  }), r(function() {
      var i;
      return x(), null != s("unifd-organization") && (i = "https://lik.edinoepole.ru/widget/organizations?organization=" + s("unifd-organization"), _(i)), null != s("unifd-season-ticket-id") && (i = "https://lik.edinoepole.ru/widget/season_tickets/" + s("unifd-season-ticket-id") + "/seat_items", _(i)), null != s("unifd-order-id") && (i = "https://lik.edinoepole.ru/widget/orders/" + s("unifd-order-id") + "?unifd-status=" + s("unifd-status") + "&result_code=" + s("result_code"), _(i)), null == s("unifd-order-id") && (f() && _(a(t())), p() && _(u(o()))), r("body").on("click", ".js-unifd-trigger-link, .js\u2010unifd\u2010trigger\u2010link", function(i) {
          return i.preventDefault(), r(".unifd").remove(), _(v(r(this)))
      }), r("body").on("click", ".js-unifd-close", function(i) {
          return i.preventDefault(), r(".unifd").fadeOut()
      })
  }), x = function() {
      var i, e, n, t, a;
      for (e in n = [], i = {
              utm_source: s("utm_source"),
              utm_medium: s("utm_medium"),
              utm_term: s("utm_term"),
              utm_content: s("utm_content"),
              utm_campaign: s("utm_campaign"),
              roistat_id: l("roistat_visit"),
              from: s("from"),
              yclid: s("yclid"),
              gclid: s("gclid"),
              source_order_id: s("unifd-source-order-id")
          }) null != (a = i[e]) && n.push(e + "=" + a.toString().replace("'", ""));
      if (0 < n.length) return t = "https://lik.edinoepole.ru/widget/pages/utm?" + n.join("&"), r("body").append("<iframe src='" + t + "'style='display:none;'></iframe>")
  }, v = function(i) {
      return null != i.data("unifd-organization") ? g(i) : null != i.data("unifd-season-ticket-id") ? h(i, n(i)) : c(i) ? u(d(i)) : a(n(i))
  }, h = function(i, e) {
      var n, t, a, r;
      for (t in a = [], n = [], e) null != (r = e[t]) && a.push(t + "=" + r), null != r && -1 < ["refer", "user_email", "user_name", "user_phone", "locale", "client_user_id"].indexOf(t) && n.push(t + "=" + r);
      return 0 < n.length ? "https://lik.edinoepole.ru/widget/season_tickets/" + i.data("unifd-season-ticket-id") + "/seat_items?" + a.join("&") : "https://lik.edinoepole.ru/widget/season_tickets/" + i.data("unifd-season-ticket-id") + "/seat_items"
  }, g = function(i) {
      return "https://lik.edinoepole.ru/widget/organizations?organization=" + i.data("unifd-organization")
  }, e = function(i) {
      return r("body").append("<style> .unifd { top: 0; left: 0; right: 0; bottom: 0; overflow: scroll; z-index: 100000; position: fixed; background: rgba(0, 0, 0, 0.3); } .unifd__in{ position: static; top: 0; bottom: 0; left: 0; right: 0; z-index: 100001; } .unifd__frame { width: 900px; position: relative; margin: 20px 0px 100px -450px; left: 50%; z-index: 19002; display: block; background: #FFF; overflow: scroll; } .unifd__close { color: white !important; position: absolute; right: 50%; margin-right: -430px; top: 22px; display: block; z-index: 19003; font-size: 16px !important; } .unifd__close:hover { color: white; } @media screen and (min-width: 320px) { .unifd__frame { width: 280px; margin-left: -140px; } .unifd__close { margin-right: -140px; top: 0; background: rgba(255,255,255,0.9); color: #000 !important; padding: 0.2em 5px; } } @media screen and (min-width: 480px) { .unifd__frame { width: 430px; margin-left: -215px; } .unifd__close { margin-right: -215px; } } @media screen and (min-width: 640px) { .unifd__frame { width: 580px; margin-left: -290px; } .unifd__close { margin-right: -280px; background: none; color: #FFF !important; padding: 0; top: 26px; } } @media screen and (min-width: 750px) { .unifd__frame { width: 700px; margin-left: -350px; } .unifd__close { margin-right: -340px; top: 26px; } } @media screen and (min-width: 900px) { .unifd__close { top: 24px; } } @media screen and (min-width: 950px) { .unifd__frame { width: 900px; margin-left: -450px; } .unifd__close { margin-right: -430px; } } @media screen and (max-width: 900px) { .unifd__frame { margin-top: 0; margin-bottom: 0; } .unifd__in { padding-top: 26px; } } /*@media screen and (max-width: 900px) { .unifd__frame { margin-top: 0; margin-bottom: 0; } .unifd__in { width: 800px; margin: 0 auto; height: 100% !important; padding-top: 26px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; overflow: scroll !important; } .unifd__close { top: 0; } .unifd__frame { width: 100%; margin-left: 0; left: 0; } } @media screen and (max-width: 700px) { .unifd__in { width: 600px; } } @media screen and (max-width: 600px) { .unifd__in { width: 500px; } } @media screen and (max-width: 500px) { .unifd__in { width: 400px; } } @media screen and (max-width: 400px) { .unifd__in { width: 300px; } }*/ </style> <div class='unifd'><div class='unifd__in'><iframe src='" + i + "' frameborder='no' scrolling='no' class='unifd__frame', id='unifd__frame'></iframe><a href='#' class='js-unifd-close unifd__close'>X</a></div></div>")
  }, a = function(i) {
      var e, n, t, a;
      for (n in t = [], e = [], i) null != (a = i[n]) && t.push(n + "=" + a), null != a && -1 < ["tags", "hall", "date", "refer", "user_email", "user_name", "user_phone", "locale", "client_user_id", "filter_performance_id"].indexOf(n) && e.push(n + "=" + a);
      return 0 < e.length ? "https://lik.edinoepole.ru/widget/events?" + t.join("&") : "https://lik.edinoepole.ru/widget/events"
  }, u = function(i) {
      var e, n, t, a;
      for (n in t = [], e = [], i) null != (a = i[n]) && t.push(n + "=" + a.toString().replace("'", "")), null != a && -1 < ["event_id", "performance_id", "title", "showtime", "refer", "locale", "client_user_id", "user_email", "user_name", "user_phone"].indexOf(n) && e.push(n + "=" + a);
      return 0 < e.length ? "https://lik.edinoepole.ru/widget/events/finder?" + t.join("&") : "https://lik.edinoepole.ru/widget/events"
  }, f = function() {
      return null != s("unifd-date") || null != s("unifd-hall") || null != s("unifd-filter-performance-id") || null != s("unifd-tags")
  }, p = function() {
      return null != s("unifd-event-id") || null != s("unifd-performance-id") || null != s("unifd-title") || null != s("unifd-showtime")
  }, c = function(i) {
      return null != i.data("unifd-event-id") || null != i.data("unifd-performance-id") || null != i.data("unifd-title") || null != i.data("unifd-showtime")
  }, t = function() {
      return {
          hall: s("unifd-hall"),
          tags: s("unifd-tags"),
          date: s("unifd-date"),
          refer: s("unifd-refer"),
          locale: s("unifd-locale"),
          filter_performance_id: s("unifd-filter-performance-id"),
          organization: s("organization"),
          utm_source: s("utm_source"),
          utm_medium: s("utm_medium"),
          utm_term: s("utm_term"),
          utm_content: s("utm_content"),
          utm_campaign: s("utm_campaign"),
          roistat_id: l("roistat_visit"),
          user_email: s("unifd-user-email"),
          user_name: s("unifd-user-name"),
          user_phone: s("unifd-user-phone"),
          from: s("from"),
          ga_client_id: m(),
          source_order_id: s("unifd-source-order-id")
      }
  }, m = function() {
      var i;
      return "undefined" == typeof ga || null === ga || void 0 === ga.getAll ? null : ("", i = ga.getAll()[0], window.unifdClientId = i.get("clientId"), window.unifdClientId)
  }, _ = function(i) {
      return mobileAndTabletcheck() ? window.location.href = i : e(i)
  }, n = function(i) {
      return {
          hall: i.data("unifd-hall"),
          tags: i.data("unifd-tags"),
          date: i.data("unifd-date"),
          refer: i.data("unifd-refer"),
          locale: i.data("unifd-locale"),
          organization: i.data("unifd-organization"),
          filter_performance_id: i.data("unifd-filter-performance-id"),
          utm_source: s("utm_source") || i.data("unifd-utm-source"),
          utm_medium: s("utm_medium") || i.data("unifd-utm-medium"),
          utm_term: s("utm_term") || i.data("unifd-utm-term"),
          utm_content: s("utm_content") || i.data("unifd-utm-content"),
          utm_campaign: s("utm_campaign") || i.data("unifd-utm-campaign"),
          roistat_id: l("roistat_visit"),
          user_email: s("unifd-user-email") || i.data("unifd-user-email"),
          user_name: s("unifd-user-name") || i.data("unifd-user-name"),
          user_phone: s("unifd-user-phone") || i.data("unifd-user-phone"),
          from: s("from") || i.data("unifd-from"),
          ga_client_id: m(),
          client_user_id: i.data("unifd-client-user-id"),
          source_order_id: s("unifd-source-order-id")
      }
  }, o = function() {
      return {
          event_id: s("unifd-event-id"),
          performance_id: s("unifd-performance-id"),
          title: s("unifd-title"),
          showtime: s("unifd-showtime"),
          refer: s("unifd-refer"),
          locale: s("unifd-locale"),
          organization: s("unifd-organization"),
          utm_source: s("utm_source"),
          utm_medium: s("utm_medium"),
          utm_term: s("utm_term"),
          utm_content: s("utm_content"),
          utm_campaign: s("utm_campaign"),
          roistat_id: l("roistat_visit"),
          user_email: s("unifd-user-email"),
          user_name: s("unifd-user-name"),
          user_phone: s("unifd-user-phone"),
          from: s("from"),
          ga_client_id: m(),
          client_user_id: s("unifd-client-user-id"),
          source_order_id: s("unifd-source-order-id")
      }
  }, d = function(i) {
      return {
          event_id: i.data("unifd-event-id"),
          performance_id: i.data("unifd-performance-id"),
          title: i.data("unifd-title"),
          showtime: i.data("unifd-showtime"),
          refer: i.data("unifd-refer"),
          locale: i.data("unifd-locale"),
          organization: i.data("unifd-organization"),
          utm_source: s("utm_source") || i.data("unifd-utm-source"),
          utm_medium: s("utm_medium") || i.data("unifd-utm-medium"),
          utm_term: s("utm_term") || i.data("unifd-utm-term"),
          utm_content: s("utm_content") || i.data("unifd-utm-content"),
          utm_campaign: s("utm_campaign") || i.data("unifd-utm-campaign"),
          roistat_id: l("roistat_visit"),
          user_email: s("unifd-user-email") || i.data("unifd-user-email"),
          user_name: s("unifd-user-name") || i.data("unifd-user-name"),
          user_phone: s("unifd-user-phone") || i.data("unifd-user-phone"),
          from: s("from") || i.data("unifd-from"),
          ga_client_id: m(),
          client_user_id: i.data("unifd-client-user-id"),
          source_order_id: s("unifd-source-order-id")
      }
  }, s = function(i) {
      var e, n, t, a, r;
      for (e = {}, n = 0, t = (r = window.location.search.substring(1).split("&")).length; n < t; n++) e[(a = r[n].split("="))[0]] = a[1];
      return e[i]
  }, l = function(i) {
      var e, n, t, a;
      for (a = i + "=", n = document.cookie.split(";"), t = 0; t < n.length;) {
          for (e = n[t];
              " " === e.charAt(0);) e = e.substring(1);
          if (0 === e.indexOf(a)) return e.substring(a.length, e.length);
          t++
      }
      return ""
  }, window.addEventListener("message", function(i) {
      var e;
      if (console.log(i.data), e = i.data.height) return r("iframe.unifd__frame").css("height", e + "px"), w()
  }), w = function() {
      var i;
      if (i = r(window).height(), null != document.getElementById("unifd__frame")) return document.getElementById("unifd__frame").contentWindow.postMessage({
          "outer-height": i
      }, "*")
  }, window.mobileAndTabletcheck = function() {
      var i, e;
      return i = !1, e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (i = !0), i
  }
}).call(this);