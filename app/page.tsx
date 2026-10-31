import Image from "next/image";

const TEL = "000-0000-0000"; // TODO: 正式な電話番号に差し替え
const TEL_HREF = `tel:${TEL.replace(/-/g, "")}`;

const nav = [
  { href: "#flow", label: "ご葬儀の流れ" },
  { href: "#price", label: "料金" },
  { href: "#reason", label: "選ばれる理由" },
  { href: "#services", label: "その他のサービス" },
  { href: "#contact", label: "ご相談" },
];

const flow = [
  {
    no: "01",
    title: "お迎え",
    sub: "病院・施設からの寝台搬送",
    body: "軽寝台車両でお迎えにあがります。ご自宅への搬送をご希望の場合は、追加料金（追加人件費）がかかります。",
  },
  {
    no: "02",
    title: "ご安置",
    sub: "Funeral Home「故人の宿」",
    body: "スマートロックで24時間セルフ面会ができます。室内はビジネスホテル並みの貸切空間。ご遺族数名での面会やお別れが可能な、葬儀式を行わない施設です。空室状況の確認・ご予約は24時間ウェブから。",
  },
  {
    no: "03",
    title: "火葬",
    sub: "水戸市下入野斎場",
    body: "移送の負担を減らすため、最寄りの火葬場である2024年共用開始の水戸市下入野斎場をご利用いただきます。",
  },
];

const included = [
  "寝台搬送（基本料金）",
  "安置料（2回分相当）",
  "棺",
  "納棺料",
  "骨壷",
  "ドライアイス1回分",
  "役所手続代行",
];

const reasons = [
  {
    title: "軽自動車での寝台搬送",
    body: "小回りがきき、車両コストも抑えられます。",
  },
  {
    title: "葬儀式場を持たない",
    body: "安置室のみの運営で、大きな設備投資がかかっていません。",
  },
  {
    title: "スマートロックの24時間セルフ面会",
    body: "常駐スタッフを置かずに、いつでもお別れの時間を過ごせます。",
  },
];

const points = [
  {
    title: "水戸市内の最安値水準",
    body: "追加費用ゼロの明瞭な定額プランです。",
  },
  {
    title: "火葬場に近い立地",
    body: "水戸市下入野斎場に至近。移動の負担を軽くします。",
  },
  {
    title: "キャンピングトレーラーの貸切利用",
    body: "AirDocを利用した衛生管理を行っています。",
  },
];

const services = [
  {
    title: "粉骨サービス",
    price: null,
    body: "海洋葬・手元供養をご希望の方向けに、ご遺骨をパウダー状にいたします。",
  },
  {
    title: "オリジナル遺影・位牌の制作",
    price: null,
    body: "お写真や想いをもとに、ひとつひとつ心を込めてお作りします。",
  },
  {
    title: "終活相談",
    price: "3,000円／1回",
    body: "終活アドバイザーが、これからの備えについてご相談をうかがいます。",
  },
  {
    title: "各種手続き相談",
    price: "5,000円／1回",
    body: "行政書士が、相続や各種手続きに関するご相談をうかがいます。",
  },
];

function SectionHead({
  en,
  title,
  lead,
}: {
  en: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <p className="text-xs tracking-[0.35em] text-sage-deep uppercase">{en}</p>
      <h2 className="font-serif mt-3 text-2xl text-ink md:text-3xl">{title}</h2>
      <span className="mx-auto mt-5 block h-px w-10 bg-flame" aria-hidden />
      {lead && (
        <p className="mx-auto mt-6 max-w-xl text-sm text-mute md:text-base">
          {lead}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-sand/80 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2">
          <a href="#top" aria-label="LilCere トップへ" className="leading-tight">
            <span className="font-serif text-xl tracking-wider text-ink">
              LilCere
            </span>
            <span className="block text-[10px] tracking-widest text-mute">
              リトセレ
            </span>
          </a>
          <nav className="hidden gap-7 text-sm md:flex" aria-label="メイン">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-ink/80 transition hover:text-sage-deep"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={TEL_HREF}
            className="rounded-full bg-sage-deep px-4 py-2 text-xs text-paper transition hover:bg-ink md:text-sm"
          >
            お電話
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center md:pt-28 md:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-flame/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl">
            <Image
              src="/logo.png"
              alt="LilCere by LIB co.,ltd"
              width={449}
              height={240}
              priority
              className="mx-auto mb-10 h-auto w-56 rounded-2xl shadow-sm ring-1 ring-sand md:w-72"
            />
            <p className="text-xs tracking-[0.3em] text-sage-deep md:text-sm">
              水戸市 火葬式専門葬儀社
            </p>
            <h1 className="font-serif mt-6 text-2xl leading-relaxed text-ink sm:text-3xl md:text-4xl md:leading-[1.8]">
              立派な葬儀はできません。
              <br />
              それでも、心を込めて
              <br />
              お見送りします。
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-sm text-mute md:text-base">
              ご安置と火葬に絞った、シンプルで明瞭なお見送り。
              <br />
              24時間いつでも会える貸切の安置室で、
              <br className="md:hidden" />
              ご家族だけの静かな時間を。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-full bg-sage-deep px-8 py-3.5 text-sm text-paper transition hover:bg-ink sm:w-auto"
              >
                事前相談・ご予約
              </a>
              <a
                href="#price"
                className="w-full rounded-full border border-sage px-8 py-3.5 text-sm text-sage-deep transition hover:bg-sand sm:w-auto"
              >
                料金を見る
              </a>
            </div>
          </div>
        </section>

        {/* Price highlight */}
        <section className="bg-paper px-5 py-16 text-center">
          <p className="text-sm text-mute">ご安置＋火葬一式</p>
          <p className="font-serif mt-2 text-ink">
            <span className="text-5xl md:text-6xl">209,000</span>
            <span className="ml-1 text-lg">円（税込）</span>
          </p>
          <p className="mt-3 text-sm font-medium text-flame">追加費用ゼロ</p>
          <p className="mt-1 text-xs text-mute">※下記の注意事項をご確認ください</p>
        </section>

        {/* Flow */}
        <section id="flow" className="mx-auto max-w-5xl px-5 py-24">
          <SectionHead
            en="Flow"
            title="ご葬儀の流れ"
            lead="お迎えからご安置、火葬まで。必要なことだけを、わかりやすく。"
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {flow.map((f) => (
              <li
                key={f.no}
                className="rounded-2xl border border-sand bg-paper p-7"
              >
                <span className="font-serif text-3xl text-flame">{f.no}</span>
                <h3 className="font-serif mt-2 text-xl text-ink">{f.title}</h3>
                <p className="mt-1 text-xs text-sage-deep">{f.sub}</p>
                <p className="mt-4 text-sm text-mute">{f.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Price */}
        <section id="price" className="bg-sand/50 px-5 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHead en="Price" title="料金" />
            <div className="rounded-2xl border border-sand bg-paper p-8 md:p-10">
              <p className="text-center text-sm text-mute">
                ご安置＋火葬一式プラン
              </p>
              <p className="font-serif mt-2 text-center text-ink">
                <span className="text-4xl md:text-5xl">209,000</span>
                <span className="ml-1">円（税込）</span>
              </p>
              <h3 className="mt-8 mb-4 text-center text-sm font-medium text-sage-deep">
                プランに含まれるもの
              </h3>
              <ul className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                {included.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-flame"
                      aria-hidden
                    />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="mt-6 space-y-1.5 text-xs text-mute">
              <li>※オプションの選択、ご安置の延泊は追加料金がかかります。</li>
              <li>
                ※斎場での火葬料（水戸市民は5,000円）、休憩室などの施設利用料は別途かかります。
              </li>
            </ul>
          </div>
        </section>

        {/* Reasons */}
        <section id="reason" className="mx-auto max-w-5xl px-5 py-24">
          <SectionHead
            en="Reason"
            title="低価格の理由"
            lead="質を落とすのではなく、必要のないものを持たないことで実現しています。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="border-t-2 border-sage pt-5">
                <h3 className="font-serif text-lg text-ink">{r.title}</h3>
                <p className="mt-3 text-sm text-mute">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <SectionHead en="Strength" title="LilCereの特長" />
            <div className="grid gap-6 md:grid-cols-3">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-paper p-7 text-center ring-1 ring-sand"
                >
                  <h3 className="font-serif text-lg text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm text-mute">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-paper px-5 py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHead en="Services" title="その他のサービス" />
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-sand p-7"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-lg text-ink">{s.title}</h3>
                    {s.price && (
                      <span className="shrink-0 text-sm text-flame">
                        {s.price}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-mute">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 py-24 text-center">
          <SectionHead
            en="Contact"
            title="事前相談・事前ご予約"
            lead="いざという時に慌てないために。ご不明な点は、どうぞお気軽にご相談ください。"
          />
          <a
            href={TEL_HREF}
            className="font-serif inline-block text-3xl text-ink md:text-4xl"
          >
            {TEL}
          </a>
          <p className="mt-2 text-xs text-mute">受付時間：24時間対応（要確認）</p>
          <div className="mt-8">
            <a
              href={TEL_HREF}
              className="inline-block rounded-full bg-sage-deep px-10 py-3.5 text-sm text-paper transition hover:bg-ink"
            >
              電話で相談する
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-sand bg-sand/40 px-5 py-12 text-center">
        <Image
          src="/logo.png"
          alt="LilCere"
          width={449}
          height={240}
          className="mx-auto h-24 w-auto rounded-xl ring-1 ring-sand"
        />
        <p className="mt-4 text-sm text-ink">
          リブ株式会社 <span className="text-mute">Life Is Better Co.,Ltd.</span>
        </p>
        <p className="mt-1 text-xs text-mute">茨城県水戸市城東</p>
        <p className="mt-8 text-xs text-mute">
          © 2026 LIB Co.,Ltd. All rights reserved.
        </p>
      </footer>
    </>
  );
}
