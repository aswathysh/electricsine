import { BannerCheck } from "@/components/sharables/BannerCheck";
import { Header } from "@/components/sharables/Header";
// import { BannerNew } from "@/components/sharables/BannerNew";
export default function Home() {
  return (
    <div>
      <Header />
      {/* <BannerNew /> */}

      {/* <Banner />   */}
      <BannerCheck />
    </div>
  );
}
