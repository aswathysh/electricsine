"use client";
// import { Banner } from "@/components/sharables/Banner";
import { BannerCheck } from "@/components/sharables/BannerCheck";

import { Header } from "@/components/sharables/Header";

import "../styles/authStyles.css";
export default function Home() {
  return (
    <div style={{ ...styles.mainbg }}>
      <Header />

      <BannerCheck />
    </div>
  );
}
const styles = {
  mainbg: {
    backgroundImage: "url(/assets/images/about.png) !important",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100%",
    width: "100%",
    //  position: "absolute",
  },
};
// import './styles.css'
// export default function Page() {
//   return(
//     // pages/index.js


//     <div className='container'>
//       <h1 className='title'>Coming Soon!</h1>
//       <p className='description'>
//         We’re working hard to bring you something amazing. Stay tuned!
//       </p>
//       <form className='subscribeForm'>
//         <input
//           type="email"
//           placeholder="Enter your email..."
//           className='emailInput'
//         />
//         <button type="submit" className='subscribeButton'>
//           Notify Me
//         </button>
//       </form>
//       {/* <footer className='footer'>
//         <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// }
