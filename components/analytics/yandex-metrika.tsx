import Script from "next/script"

/** Yandex.Metrika counter id — single source of truth for script + noscript. */
export const YANDEX_METRIKA_ID = 109118528

const TAG_SCRIPT_SRC = `https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}`

function buildInlineInit(): string {
  return `(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) { return; }
  }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script',${JSON.stringify(TAG_SCRIPT_SRC)}, 'ym');

ym(${YANDEX_METRIKA_ID}, 'init', {
  ssr:true,
  webvisor:true,
  clickmap:true,
  ecommerce:"dataLayer",
  referrer: document.referrer,
  url: location.href,
  accurateTrackBounce:true,
  trackLinks:true
});`
}

/**
 * Loads Yandex Metrika once per document (dedupe inside inline snippet + stable Script id).
 * Root layout does not remount on App Router navigations — script is not re-injected on route changes.
 */
export function YandexMetrika() {
  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildInlineInit() }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}
