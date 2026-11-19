import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/wyfa-lockup.png.asset.json";
import { SiteFooter } from "@/components/site-footer";
import { LabPage } from "@/components/lab/lab-page";

const title = "SDG 17.next // Non-Exploitative Partnerships Lab | WYFA";
const description =
  "A youth working group’s draft proposals for non-exploitative SDG 17 partnerships, with sourced data and an open research queue. WYFA Summit, New Delhi 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <a href="/" className="brand" aria-label="World Youth for Action home">
          <img src={logo.url} width="1034" height="526" alt="World Youth for Action" />
        </a>
      </header>
      <LabPage />
      <SiteFooter />
    </>
  );
}
